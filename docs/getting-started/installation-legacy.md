---
sidebar_position: 5
---

# Server Installation - Legacy

:::warning
The procedure provided here describes installation on Red Hat Enterprise Linux Server 7.9 as detailed as possible without **[Docker](https://www.docker.com/)** technology that is currently part of the stack and recommended to use for **[server installation](./server-installation.md)**. The instructions have not been updated since Docker was implemented and quite few things have changed by now. The repositories that are described here are now combined in **[nomad-server](https://github.com/nomad-nmr/nomad-server)** repository but each part of the system is an individual NPM project and lives in its own folder within the repository. There are some other changes in pipelines such as a new front-end bundler that might affect how frontend production is built. However, if you go down this route then you probably know JS ecosystem quite well and these old instructions could help alongside with GitHub where you can inspect Dockerfiles to see how the current version of the system is bundled up for production. **Good Luck!**
:::

## Server infrastructure dependencies

Here is the list of resources that should be installed on the server before you proceed with NOMAD code installation.

- **[Node.js](https://linuxize.com/post/how-to-install-node-js-on-centos-7/)**
  :::tip
  The latest LTS (long-term support) version should do the trick at the moment.
  Using NVM (Node Version Manager) will allow easy upgrade in future if necessary.
  :::
- **[MongoDB](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-centos-7)**

- **[NginX](https://linuxize.com/post/how-to-install-nginx-on-centos-8/)**

- **[PM2](https://pm2.keymetrics.io/)**

- **[Git](https://www.tecmint.com/install-git-centos-fedora-redhat/)**
  :::note
  Git is not strictly a dependency but at this stage will help to get NOMAD code on your server.
  It's likely that Git has been already installed with your Linux distribution.
  :::

## Recommended server configuration

- 4 vCPUs (cores)
- 8GB RAM

## NOMAD code installation

Make installation folder using superuser privileges.

:::caution
Nginx needs to have read permission to the files that should be served AND have execute permission in each of the parent directories along the path from the root to the served files.
:::

```bash
sudo su
mkdir /nomad
chmod 701 /nomad
```

Clone NOMAD code repositories, install Javascript dependencies and create production build of the front-code.

:::caution
You need to create **[configuration files](#config-files)** before you run _npm run build_
:::

```bash
cd /nomad
git clone https://github.com/nomad-nmr/nomad-front-end.git
git clone https://github.com/nomad-nmr/nomad-rest-api.git
git clone https://github.com/nomad-nmr/nomad-nmrium.git
cd /nomad/nomad-rest-api
npm install
cd /nomad/nomad-front-end
npm install
npm run build
cd /nomad/nomad-nmrium
npm install
npm run build
```

:::note
To stay on the save side, you can consider to download .zip or .tar.gz files containing code related to a certain release on **[Github](https://github.com/nomad-nmr/nomad-server)**.
:::

## Configuration files {#config-files}

Following configuration files needs to be created.

```bash title=/nomad/nomad-front-end/config/production.env
SKIP_PREFLIGHT_CHECK=true
PORT=3000

#URL of the server running NOMAD back-end API and NMRium wrapper
REACT_APP_API_URL=http://nomad.my-uni.ac.uk
REACT_APP_NMRIUM_URL=http://nomad.my-uni.ac.uk/nmrium
#Set true if corresponding NOMAD module is used
#----------------------------------------------
#Submission portal
REACT_APP_SUBMIT_ON=true
#Batch submission portal
REACT_APP_BATCH_SUBMIT_ON=true
#Datastore
REACT_APP_DATASTORE_ON=true
```

:::caution
REACT_APP_API_URL has to be set correctly in accordance with your server domain name and protocol prefix (http/https)!
:::

```bash title=/nomad/nomad-nmrium/config/.env.production
VITE_APP_API_URL=http://nomad.my-uni.ac.uk
VITE_APP_NOMAD_URL=http://nomad.my-uni.ac.uk
```

```javascript title=/nomad/ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'nomad-api',
      script: './nomad-rest-api/app.js',
      watch: '.',
      env: {
        PORT: 8080,
        NODE_ENV: 'production',
        MONGODB_URL: 'mongodb://127.0.0.1:27017/nomad',
        FRONT_HOST_URL: 'http://nomad.my-uni.ac.uk',

        //Password for automatically generated admin user
        ADMIN_PASSWORD: 'MySuperSecretBackDoorPasswd',

        // JWT expiration time in seconds
        //After this time user automatically logs off
        JWT_EXPIRATION: 3600,

        //Secret word for generating JWT
        JWT_SECRET: 'SecretWord',

        EMAIL_SUFFIX: 'my-uni.ac.uk',

        //SMTP configuration
        SMTP_HOST: 'mailhost.my-uni.ac.uk',
        SMTP_PORT: 25,
        SMTP_SECURE: false,
        SMTP_REQUIRE_TLS: true,
        SMTP_USER: '',
        SMTP_PASS: '',
        SMTP_SENDER: 'nomad@my-uni.ac.uk',

        //Set to true if NOMAD submission portal is used
        SUBMIT_ON: true,

        //Set true if NOMAD datastore is used
        DATASTORE_ON: true,
        DATASTORE_PATH: '/nomad/store/data',

        //timeout for upload data route connection [ms].
        DATA_UPLOAD_TIMEOUT: 30000,

        //If true NMRium file is generated upon Bruker zip file upload.
        //That results in bigger volume of data in datastore but faster viewing of data in NMRium
        PREPROCESS_NMRIUM: true
      }
    }
  ]
}
```

:::tip
You can create default ecosystem.config.js file by command

```bash
pm2 ecosystem
```

:::

:::caution
Pay attention to setting FRONT_HOST_URL and SMTP configuration. These entries are the most crucial for correct operation of the system.
Very likely, you will need to request access to SMTP server run by IT services of your organisation.
:::

## NGINX configuration

### Configuration for HTTP

```bash {10-13,15-17,19-26} title=/etc/nginx/nginx.conf
server {
        listen       	80 default_server;
        listen       	[::]:80 default_server;
        server_name  nomad.my-uni.ac.uk;
        root         /usr/share/nginx/html;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
                root /nomad/nomad-front-end/build;
                try_files $uri /index.html =404;
        }

        location /data/ {
          proxy_read_timeout 30s;
          proxy_connect_timeout 75s;
          proxy_pass http://127.0.0.1:8080/data/;
          client_max_body_size 200M;
        }

        location /api/ {
          proxy_pass http://127.0.0.1:8080/;
       }

        location /socket.io/ {
            proxy_http_version 1.1;

            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";

           proxy_pass http://127.0.0.1:8080/socket.io/;
        }

        location /nmrium {
           autoindex on;
           index index.html;

           alias /nomad/nomad-nmrium/dist;

           try_files $uri $uri/ /index.html;
       }

        error_page 404 /404.html;
        location = /404.html {
        }

        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
        }
}
```

### Configuration for HTTPS

For running the server over HTTPS, TLS enabled server block has to be used and the default HTTP server block commented out. The three location blocks (/, /api/ and /socket.io) highlighted above need to be copied over and ssl_certificate and ssl_certificate_key have to be added. IT services in your organisation should be able to assist you to get the certificates.

```bash {9-10,19-22,24-26,28-35} title=/etc/nginx/nginx.conf
# Settings for a TLS enabled server.

    server {
        listen       443 ssl http2 default_server;
        listen       [::]:443 ssl http2 default_server;
        server_name  nomad.my-uni.ac.uk;
        root         /usr/share/nginx/html;

        ssl_certificate /root/ssl/my-certificate.crt;
        ssl_certificate_key /root/ssl/my-certificate.key;
        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout  10m;
        ssl_ciphers HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers on;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
                root /nomad/nomad-front-end/build;
                try_files $uri /index.html =404;
        }

        location /api/ {
          proxy_pass http://127.0.0.1:8080/;
       }

        location /data/ {
          proxy_read_timeout 30s;
          proxy_connect_timeout 75s;
          proxy_pass http://127.0.0.1:8080/data/;
          client_max_body_size 200M;
        }

        location /socket.io/ {
            proxy_http_version 1.1;

            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";

           proxy_pass http://127.0.0.1:8080/socket.io/;
        }

         location /nmrium {
           autoindex on;
           index index.html;

           alias /nomad/nomad-nmrium/dist;

           try_files $uri $uri/ /index.html;
       }

        error_page 404 /404.html;
        location = /404.html {
        }

        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
        }
    }
```

:::caution
If you switch to HTTPS you need to set correct protocol prefix (https)

- **REACT_APP_API_URL** (/nomad/nomad-front-end/config/production.env )
- **FRONT_HOST_URL** (/nomad/ecosystem.config.js)
- **VITE_APP_API_URL** and **\*VITE_APP_NOMAD_URL** (/nomad/nomad-nmrium/config/.env.production)
- **[Client configuration - serverAddress](./client-installation.md/#config)**

:::

## Starting the server

```bash
cd /nomad
pm2 start ecosystem.config.js
nginx
```

:::tip START NOMAD-API AT SERVER STARTUP
You can set PM2 to start at server startup

```bash
pm2 startup
```

See **[PM2 docs](https://pm2.keymetrics.io/docs/usage/startup/)** for more details.
:::

## Stopping the server

```bash
nginx -s quit
pm2 stop all
```

## Updating NOMAD code

```bash
cd /nomad/nomad-rest-api
git pull
npm install
cd /nomad/nomad-front-end
git pull
npm install
npm run build
cd /nomad/nomad-nmrium
git pull
npm install
npm run build
```

:::caution GIT PULL FAILS
If git pull command fails very likely some changes were done in the working directory by npm install command.
In that case, stash the changes and repeat pull.

```bash
git stash
git pull
```

:::

## Database backup & restore

```bash
mongodump --db nomad --out /nomad/db-backup/
mongorestore –db nomad /nomad/db-backup
```

:::tip
Periodically create and backup db-backup folder on a different machine to improve resilience of your NOMAD system.
:::
