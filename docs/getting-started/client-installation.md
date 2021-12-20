---
sidebar_position: 3
---

# Spectrometer Client Installation

:::tip Linux Console for Windows
For installation on Windows machines, install **[Cmder](https://cmder.net/)** Linux console simulator. The full version comes with Git for Windows.
Using Cmder will make installation procedure on Windows and Linux machines nearly the same.
:::

The only dependency that you will need to install is **[node.js](https://nodejs.org/en/)** For Windows machines, download and run Windows installer. For Linux machine, you can just repeat what was done on the server.

Navigate to the folder where you want to install client for example:

```bash
## Windows
cd C: Bruker
## Linux
cd  /opt
```

Clone the repository and install JS dependencies

```bash
git clone https://github.com/nomad-nmr/nomad-spect-client.git
cd nomad-spect-client
npm install
```

Create folders for status and submit files

```bash
mkdir status_files
mkdir submit_files
```

## Client Configuration {#config}

Execute configuration script

```bash
npm run config
```

You will need to fill in following entries

- **instrumentId**: Unique ID of the NMR instrument that is generated when entry for the instrument is created in NOMAD configuration.
- **statusPath**: Relative path to IconNMR status.html file. _(./status_files/status.html)_
- **historyPath**: Relative path to IconNMR history.html file. Keep it same as **statusPath** if both IconNMR status and history are written in the same file. Recommended. _(./status_files/status.html)_
- **serverAddress**: URL of your NOMAD server _(https://nomad.my-uni.ac.uk)_
- **submissionPath**: Relative path to IconNMR external set up folder. _(./submit_files)_

At the end you should see something like this.

![Client Configuration](./assets/NOMAD_client_config.PNG)

_Ctrl + C_ to exit client configuration.
:::caution
The relative paths defined here need to match those set in **[IconNMR configuration](./IconNMR-configuration/)**.
:::

## Start client

Start the client in verbose mode to see if it runs correctly

```bash
npm run verbose
```

![Client Verbose Output](./assets/NOMAD_client_verbose.png)

### Star client on Windows startup

Create a .bat file

```bash
cd C:\Bruker\nomad-spect-client\src
npm start
```

Then use Windows Task Scheduler as Administrator to execute the .bat file on Windows startup.

## Update client

Stop the client by _Ctrl + C_ or Windows Task Scheduler

```bash
git pull
npm install
```

:::caution GIT PULL FAILS
If git pull command fails very likely some changes were done in the working directory by npm install command.
In that case, stash the changes and repeat pull.

```bash
git stash
git pull
```

:::
