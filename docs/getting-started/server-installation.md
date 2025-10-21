---
sidebar_position: 1
---

# Server Installation

## Recommended server configuration

- 4 vCPUs (cores)
- 8GB RAM

## Server Infrastructure

NOMAD has been developed to run on the server in **[Docker](https://www.docker.com/)** environment and therefore you will need to start by installing both Docker Engine and Docker Compose that are available on a wide variety of Linux platforms, mcOS, Windows 10. Here are the links to installation instructions on Linux from the command line.

- **[Docker Engine installation guide](https://docs.docker.com/engine/install/)**
- **[Docker Compose installation guide](https://docs.docker.com/compose/install/linux/)**

To check whether Docker installation was successful use two following commands

```bash
sudo docker -v
sudo docker compose -v
```

## Docker Compose Configuration

Using sudo privileges create installation folder and `docker-compose.yaml` configuration file

```bash
sudo su
mkdir /nomad
nano /nomad/docker-compose.yaml
```

```yaml title=/nomad/docker-compose.yaml
version: '3.8'
services:
  mongodb:
    image: 'mongo'
    restart: always
    volumes:
      - mongo-data:/data/db

  api:
    image: nomadnmr/api:production
    env_file:
      - ./backend.env
    ports:
      - '8080:8080'
    volumes:
      - ./datastore:/app/datastore
      - ./downloads:/app/downloads
    restart: always
    depends_on:
      - mongodb

  server:
    image: nomadnmr/server:production
    ports:
      - 80:80
    volumes:
      - ./downloads:/app/downloads
    restart: always
    depends_on:
      - api

volumes:
  mongo-data:
```

:::warning
The indents in yaml files have a purpose. Make sure that they remain unchanged otherwise the configuration file won't work.
:::

NOMAD system is composed of three service containers **mongodb**, **api** and **server**. The first container is based on official Docker image of Mongo Database, the other two are based on images that were built from the NOMAD source code stored in **[nomad-server](https://github.com/nomad-nmr/nomad-server)** repository. The example of the configuration file uses images with `production` tag that correspond to images currently used in production in St Andrews. If you want to use an image with specific version release then you need to change image entry accordingly. For example, following changes in docker-compose.yaml file would compose the system based on v3.2.0 release.

```yaml
api:
  image: nomadnmr/api:v3.2.0
```

```yaml
server:
  image: nomadnmr/server:v3.2.0
```

Docker images are stored on **[Docker Hub](https://hub.docker.com/search?q=nomadnmr)** where you can check available tags.

### Datastore folder configuration

The NMR data should be archived on a dedicated resilient data storage volume.
To get this working using the configuration file above the archiving volume must be mounted to `datastore` folder inside the nomad installation folder.
If the archiving volume is mounted somewhere else then you need to define corresponding path in docker-compose.yaml file by editing the path before colon in api service volumes entry. Both relative and absolute paths work here. For example following change would make NOMAD to store data in `/mnt/datastore` folder.

```yaml
api:
  ##
  volumes:
    - /mnt/datastore:/app/datastore
```

:::danger
This configuration sets up HTTP server that will use insecure unencrypted connection with clients which is fine for testing but production server should use additional configuration settings for TLS encrypted communication as described in the following paragraph.
:::

### TLS Enabled server

To enable TLS encryption for your server a different configuration of server Docker container in docker-compose.yaml file is required. In nutshell, different server image server-tls has to be used, port needs to be set to 443 and folder with ssl certificates has to be mounted. If the following configuration is used in docker-compose.yaml file then certificate and key have to be saved as `/root/ssl/nomad3.pem` and `/root/ssl/nomad3.key`, respectively.

```yaml title=docker-compose.yaml
server:
  image: nomadnmr/server-tls:production
  ports:
    - 443:443
  volumes:
    - /root/ssl:/ssl
    - ./downloads:/app/downloads
  restart: always
  depends_on:
    - api
```

:::caution
The certificate has to be in full chain format otherwise the client won't be able to connect to the server.
:::

## Environmental variables {#env-variables}

Using sudo privileges create backend.env file with following example content.

```bash
sudo su
nano /nomad/backend.env
```

```js title=/nomad/backend.env
NODE_ENV='production'

#Frontend host url
FRONT_HOST_URL='###'

#Password for automatically generated admin user
ADMIN_PASSWORD='###'

#Secret word for generating JWT
JWT_SECRET='###'

EMAIL_SUFFIX='###'

#SMTP configuration
SMTP_HOST='###'
SMTP_PORT=###
SMTP_SECURE=###
SMTP_REQUIRE_TLS=###
SMTP_USER='###'
SMTP_PASS='###'
SMTP_SENDER='###'
```

All entries with value ### need to be edited.

- **FRONT_HOST_URL** : URL of the server hosting your system. For example: `http://nomad.my_domain.uk`
- **ADMIN_PASSWORD** : A backdoor password of your choice that will enable you to login with username admin after system installation.
  :::caution
  The user admin with the password set in environmental variables is only created at server startup with no users in the database. If the user admin has already been created changing ADMIN_PASSWORD in environmental variables will not change the password in the database.  
  In order to reset the user admin password you can start the server with an empty database by following commands:

  ```bash
  sudo docker exec -it mongodb-container-name mongosh
  ```

  You need to use the actual name of mongodb container that you can find by `docker ps` command.

  ```mongosh
  use nomad
  db.dropDatabase()
  ```

  _CTRL+C_ to exit mongosh and then **[stop and start](#start-stop)** the server.
  :::

- **JWT_SECRET** : Any random string of your choice that will be used to secure communication of the server with clients.
- **EMAIL_SUFFIX** : Email suffix that will be used to auto-generate e-mail addresses from usernames. For example: `my_domain.uk`
- **SMTP configuration**
  - **SMTP_HOST** : URL of SMTP server that will be used to send e-mails. For example: `mailhost.my_domain.uk`
  - **SMTP_PORT** : Port on SMTP server that will receive the request. For SSL/TLS 587 or 2525. [More info](https://www.sparkpost.com/blog/what-smtp-port/)
  - **SMTP_SECURE** : false or true depending on SMTP server set up
  - **SMTP_REQUIRE_TLS** : false or true depending on SMTP server set up. Related to SMTP_PORT setting.
  - **SMTP_USER** : Username for SMTP server authentication. Use empty string `''` if authentication is not required.
  - **SMTP_PASS** : Password for SMTP server authentication. Use empty string `''` if authentication is not required.
  - **SMTP_SENDER** : An email address that will be used as sender for NOMAD system e-mails. For example `nomad@my_domain.uk`

### Optional variables

From version 3.6.0 onwards, any of the following variables can be added to overwrite default value and customise your server. For older versions, optional variables have to be defined in `backend.env` file and set to the default values.

- **CUSTOM_SOLVENTS**: Adds custom solvents into the solvent list. The value must be a string with solvent names comma separated. For example `'DMSO_weak,C6D6_capillary'` will add two solvents DMSO_weak and C6D6_capillary.
- **SEND_EMAIL_ERROR** : initial boolean value in user profile settings for sending error status emails, default value `true`
- **SEND_EMAIL_ARCHIVED** : initial boolean value in user profile settings for sending archived status emails, default value `true`
- **JWT_EXPIRATION** : JWT expiration time in seconds, after this time users get automatically logged out, default value `3600`
- **COLLECTION_DOWNLOAD_TIMEOUT** : time in minutes that collection download link is valid for, default value `30`
- **PENDING_EMAIL_DELAY** : delay in minutes for sending pending status emails, default value `30`

Following optional variables can be used to set up NOMAD to run in unusual environments and should be used with caution.

- **PORT** : REST API port, default value `8080`
- **MONGODB_URL** : database URL, default value `'mongodb://mongodb:27017/nomad'.`
- **HOST** : can be used to set express API server to listen on a specific network, default value `'0.0.0.0'` - the server accepts connection from any network.
- **DATA_UPLOAD_TIMEOUT** : connection timeout for data upload route in seconds, default value `30`
- **SUBMIT_ON** : default value is `true`, if the value is set `false` it will set NOMAD to run in monitoring mode using auto-feed without submit function.
- **DATASTORE_ON** : default value is `true`, if the values is set `false`, NOMAD archiving function will be disabled.
- **DATASTORE_PATH** : datastore file system path, default value `'/app/datastore'`
- **DOWNLOADS_PATH** : collection downloads file system path, default value `'/app/downloads'`
- **AUTO_FEED_ON** : if the values is set `true`, it will switch on **[Auto-feed](./tips.md/#auto-feed)** function that will archive experiments that have not been submitted through NOMAD. It will only work if IconNMR generates dataset name in a generic format XXX-XXX-username.

## Start/Stop the server {#start-stop}

After you have set up docker-compose.yaml and backend.env configuration files, you can simply start and stop the server by using following commands.

```bash
sudo docker compose up -d
sudo docker compose down
```

:::caution
For the commands to work, you need to be in the folder with docker-compose.yaml file.
:::

You can use the following command to check running containers.

```bash
sudo docker ps
```

You should see three running containers with following names **nomad-mongodb-1**, **nomad-api-1** and **nomad-server-1**.

:::info

- Container names will be slightly different if the folder with docker-compose.yaml file has other name than nomad.
- If the containers are running when VM gets rebooted the containers will automatically restart.

:::

## Updating the server

- If you use version specific tags (e.g. `:v3.2.0`) then you need to stop the service, change the tag in docker-compose.yaml file and then start the service again.

- `:production` tag is the version currently running on production server in St Andrews and should not be used without consulting with developers. To update to a newer version of a production image, you need to remove the images that you currently have on your server and then pull the new ones from Docker-Hub.

```bash
sudo docker compose down
sudo docker rmi nomadnmr/server-tls:production nomadnmr/api:production
sudo docker compose pull
sudo docker compose up -d
```

## Database dumps

**To dump database**

```bash
sudo docker exec -i nomad-mongodb-1 sh -c 'mongodump --archive' > mongodb.dump
```

**To restore from dump**

```bash
sudo docker exec -i nomad-mongodb-1 sh -c 'mongorestore --archive --drop' < mongodb.dump
```

:::tip

- if the commands don't work use `docker ps` command to check actual name of your mongodb container which might differ from the one (nomad-mongodb-1) used in above example.
- Create a cron command to periodically archive mongodb.dump in the datastore volume or other secure place. The database dump and nomad docker images will allow you to resurrect the system on a new VM after a catastrophic event.

:::
