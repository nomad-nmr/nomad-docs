---
slug: datastore-release
title: Datastore released (version 3.1.0)
authors: [tomlebl]
tags: [NOMAD, datastore, NMRium]
---

I have been swamped by quite few things right now. So, this is going to be only a very short post to mark another big milestone in NOMAD development.

We have been using NOMAD with datastore function on production server for over 2 weeks and successfully archived over 3000 experiments without any glitch. Datastore function now includes essential data search engine and data can be directly opened in **[NMRium](https://www.nmrium.org/)**. Furthermore, results of NMR data analysis can be stored back in datastore in **[NMRium](https://www.nmrium.org/)** format. All code currently running on our production server has been released on GitHub as version 3.1.0 and the documentation for **[server](../docs/getting-started/server-installation)** and **[spectrometer client](../docs/getting-started/client-installation)** installation has been updated.

Obviously, there is still a lot of work to build a system that would seamlessly take NMR data from inception to publication. However, the current state of development makes me think that this is just a question of time.
