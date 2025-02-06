---
sidebar_position: 6
---

# For Developers

## System overview

NOMAD is a web application that has been built using **[Javascript MERN stack](https://www.educative.io/edpresso/what-is-mern-stack)**. The whole app is composed of three main components.

### nomad-front-end

This part of the system works as graphical user interface of the main part of the system. It is a single page application (SPA) that was built using **[REACT JS library](https://reactjs.org/)**. The compiled production build is served by a webserver (**[NGINX](https://www.nginx.com/)**) as static content web site, runs in web browser on user's computer and communicates with the application back-end via standard Internet communication protocols (HTTP/HTTPS).

### nomad-rest-api

The back-end code of the NOMAD system built using **[Express JS library](https://expressjs.com/)**. It runs on the application server in **[Node.js](https://nodejs.org/en/)** runtime environment and serves as REST API with the purpose to fetch and store application data using **[MongoDB](https://www.mongodb.com/)**. It also provides an end point for automatic NMR data upload. The communication with clients over HTTP/HTTPS protocol is facilitated by reverse proxy provided by a webserver (**[NGINX](https://www.nginx.com/)**)

### nomad-spect-client

The spectrometer client is a Javascript code that runs on spectrometer PC in **[Node.js](https://nodejs.org/en/)** runtime environment and enables communication of NOMAD back-end with Bruker IconNMR. It parses status and history HTML file(s) and outputs files in external setup folder to control automated run of the NMR spectrometer.

![Technical Overview](./assets/technical_overview_schema.png)

## Set up for development

The whole code base is split between two repositories. The repository **[nomad-server](https://github.com/nomad-nmr/nomad-server)** is the server side code composed of two parts **nomad-front-end** and **nomad-rest-api**. The spectrometer client has its own **[repository](https://github.com/nomad-nmr/nomad-spect-client)**.

The **nomad-server** repository contains all necessary configuration files to get you started in **[Docker](https://www.docker.com/)** environment.
You will need to install both docker engine and docker compose. The easiest way to achieve that is to install **[Docker Desktop](https://docs.docker.com/desktop/)** available for wide variety of Linux platforms, mcOS, Windows 10.

Clone **nomad-server** repository

```bash
git clone https://github.com/nomad-nmr/nomad-server.git
```

Setting up SMTP client for sending e-mails is not essential but if you want to use it then following entries in /envs/dev/backend.env file need to be edited.

```env
EMAIL_SUFFIX=''

#SMTP configuration
SMTP_HOST=''
SMTP_USER=''
SMTP_PASS=''
SMTP_SENDER=''
```

You can possibly change the password for automatically generated admin user by editing the following entry but the change has to be done before you start the server for the first time.
Changing password in the later stage is possible but SMTP client has to be set up or admin user has to be deleted from database directly.

```env
ADMIN_PASSWORD='foo'
```

To start NOMAD you need to navigate to nomad-server folder and run

```bash
docker-compose up -d
```

To start after updating dependencies in any package.json file you have to build new Docker images by using command

```bash
docker-compose up -d --build
```

To stop use command

```bash
docker-compose down
```

### Connecting spectrometer client in development environment

Clone **nomad-spect-client** repository in the same folder next to **nomad-server** repository.

```bash
git clone https://github.com/nomad-nmr/nomad-spect-client.git
```

To connect the spectrometer client, you need to login using admin username and the backdoor password that was set up in environmental variables and add an instrument into database. More information can be found on [documentation website](https://www.nomad-nmr.uk/docs/getting-started/NOMAD-config). Then you need rewrite INSTRUMENT_ID entry in /envs/dev/client.env file using actual instrument ID.

To start NOMAD together with the client, you need to navigate to nomad-server folder and run

```bash
docker-compose --profile client up -d
```

after updating dependencies you need to use

```bash
docker-compose --profile client up -d --build
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

### Automatic testing

Automatic testing is currently work in progress. So far, there is setup for integration tests of backend api using **[SuperTest](https://www.npmjs.com/package/supertest)** and **[Vitest](https://vitest.dev/)**.

To perform a single run without watch mode

```bash
cd nomad-rest-api
npm run test-once
```

You can also run test in watch mode or run it with coverage analysis by using following commands, respectively.

```bash
npm test
npm run coverage
```

## API Documentation

Version 2 API endpoints have been documented using **[Swagger.io](https://swagger.io/)** .
Documentation Swagger UI is accessible on any NOMAD server at the route `/api/api-docs`. You can check it on our **[NOMAD demo server](https://demo.nomad-nmr.uk/api/api-docs)**

Currently, only handful of endpoints, that could be used by a programmatic client to search and access archived data, has been refactored to version 2 and documented.
Please get in touch if you want to add more or adjust the existing ones.
