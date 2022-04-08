---
slug: visualization
title: NMR data - from inception to visualization
authors: [tomlebl]
tags: [NOMAD, datastore, NMRium]
---

March was somewhat tough in many ways. So, it has been a while since I made a blog post. However, I have kept busy building NOMAD and made a decent progress with datastore function and **[NMRium](https://www.nmrium.org/)** integration.

<!--truncate-->

It seems that I have got the core of datastore function finished. Obviously, there were couple of hurdles that slowed me down little bit but at the end the result looks good and the prototype has worked very well on few test samples that I have run myself. The last bug was actually quite interesting to see. All have worked fine while I was using the spectrometer client in my test environment but run on an instrument was failing. Eventually, I have noticed that the problem stems from incomplete NMR data set being archived. It turned out that parsing status file, sending it to the server, analysing it and sending archiving command back to the client is faster than processing 1D 1H spectrum. In my opinion, that clears any doubts about capability of web application built on MERN stack to handle NMR lab data traffic. Now it's the time to get it under load of beta testing on the test server with one instrument and handful of beta testers.

Another important milestone is **[NMRium](https://www.nmrium.org/)** integration. One of the ultimate goals of NOMAD to create a platform that would take NMR data from inception to publication. I have always struggled to explain this idea and how it facilitates NMR data preservation. I have got some new ideas about it that hopefully shade some more light on overall NOMAD pursuit. You can check that in the **[introduction section](../docs/intro#how-could-nomad-help-with-nmr-data-preservation)**.
As I mentioned last time, **[NMRium](https://www.nmrium.org/)** is a huge game changer and helps NOMAD to make massive leap to a stage that I would call **_"from inception to visualisation"_** witch could be a milestone about half way through. In order to demonstrate what I have got so far I recorded another **[video tutorial](../docs/video-tutorials)** showing current workflow from users perspective.
