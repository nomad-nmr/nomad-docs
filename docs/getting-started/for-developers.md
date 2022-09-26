---
sidebar_position: 6
---

# For Developers

## System overview

NOMAD is a web application that has been built using **[Javascript MERN stack](https://www.educative.io/edpresso/what-is-mern-stack)**. The whole app is composed of four main parts.

### nomad-front-end

This part of the system works as graphical user interface of the main part of the system. It is a single page application (SPA) that was built using **[REACT JS library](https://reactjs.org/)**. The compiled production build is served by a webserver (**[NGINX](https://www.nginx.com/)**) as static content web site, runs in web browser on user's computer and communicates with the application back-end via standard Internet communication protocols (HTTP/HTTPS).

### nomad-nmrium

It is also SPA that servers as a wrapper for **[NMRium](https://www.nmrium.org/)** React component that enables communication between nomad-rest-api and NMRium.

### nomad-rest-api

The back-end code of the NOMAD system built using **[Express JS library](https://expressjs.com/)**. It runs on the application server in **[Node.js](https://nodejs.org/en/)** runtime environment and serves as REST API with the purpose to fetch and store application data using **[MongoDB](https://www.mongodb.com/)**. It also provides an end point for automatic NMR data upload. The communication with clients over HTTP/HTTPS protocol is facilitated by reverse proxy provided by a webserver (**[NGINX](https://www.nginx.com/)**)

### nomad-spect-client

The spectrometer client is a Javascript code that runs on spectrometer PC in **[Node.js](https://nodejs.org/en/)** runtime environment and enables communication of NOMAD back-end with Bruker IconNMR. It parses status and history HTML file(s) and outputs files in external setup folder to control automated run of the NMR spectrometer.

![Technical Overview](./assets/technical_overview_schema.png)

## Set up for development

The whole code base is split between two repositories. The repository **[nomad-server](https://github.com/nomad-nmr/nomad-server)** is the server side code composed of three parts **nomad-front-end**, **nomad-nmrium** and **nomad-rest-api**. The spectrometer client has its own **[repository](https://github.com/nomad-nmr/nomad-spect-client)**.

The **nomad-server** repository contains all necessary configuration files to get you started in **[Docker](https://www.docker.com/)** environment.
You will need to install both docker engine and docker compose. The easiest way to achieve that is to install **[Docker Desktop](https://docs.docker.com/desktop/)** available for wide variety of Linux platforms, mcOS, Windows 10.

Clone both **nomad-server** and **nomad-spect-client** repositories

```bash
git clone https://github.com/nomad-nmr/nomad-server.git
git clone https://github.com/nomad-nmr/nomad-spect-client.git
```

You can skip the latter if you want to leave the client out and work only with the server code. In that case, you need to comment out the client block in nomad-server/docker-compose.yaml file.

Before you start, the environmental variables needs to be set up in env folder. You can create the folder and copy content of env-example folder in it.

```bash
cd nomad-server
mkdir env
cp env-example/* env/
```

The system shall start without editing environmental variables. To achieve full functionality, following entries in backend.env file need to be edited.

```env
#Password for automatically generated admin user
ADMIN_PASSWORD=''

#Secret word for generating JWT
JWT_SECRET=''

EMAIL_SUFFIX=''

#SMTP configuration
SMTP_HOST=''
SMTP_USER=''
SMTP_PASS=''
SMTP_SENDER=''
```

To connect the spectrometer client, you need to login using admin username and the backdoor password that was set up in environmental variables and add an instrument into database. More information can be found in [Tips & Tricks](./tips.md). Then you need to enter instrument ID in client.env file and restart the Docker containers.

To start NOMAD you need to navigate to nomad-server folder and run

```bash
docker-compose up -d
```

To stop use command

```bash
docker-compose down
```

### Database dumps

**To dump database**

```bash
docker exec -i nomad-server_mongodb_1 sh -c 'mongodump --archive' > mongodb.dump
```

**To restore from dump**

```bash
docker exec -i nomad-server_mongodb_1 sh -c 'mongorestore --archive --drop' < mongodb.dump
```

---

More useful info about developing in a Docker Container can be found [here](https://code.visualstudio.com/docs/remote/containers).
