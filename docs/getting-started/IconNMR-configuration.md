---
sidebar_position: 3
---

# IcoNMR Configuration

1. IconNMR has to be set in the way that IconNMR users correspond to research groups and individual users are tagged in using dataset names or originator items.
   :::note
   Set up with each individual user being registered as IconNMR user is not supported and probably will never be because that would disable some key features of NOMAD.
   :::
2. Set paths to status/history html files and external setup directory in _IconNMR configuration/Automation/Automation Window_

   ![IconNMR automation priority](./assets/IconNMR_config.png)

   :::caution
   The paths here are absolute and need to match corresponding relative paths that are set in **[NOMAD spectrometer client configuration](./client-installation/#config)**.
   :::

3. If you want to use Day/Night and Priority features of NOMAD traffic control. You have to enable those in _IconNMR configuration/Automation/Priority_ and use other settings according to your needs.

   ![IconNMR automation priority](./assets/IconNMR_config_priority.png)
