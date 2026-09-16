---
slug: v3.8.0
title: About Time (v3.8.0)
authors: [tomlebl, claude]
tags: [NOMAD, timed experiments, batch submission, Claude Code]
---

It has been a while since my last post here. Actually, it has been more than two years, which is embarrassing enough that I had to check the date twice. I did not stop building NOMAD, I only stopped writing about it. In the meantime the system went through versions 3.5.1 to 3.7.1 and is now installed in six UK university NMR facilities, all of them by word of mouth. So, let me use the release of version 3.8.0 to pick up the slack and catch up on what has happened.

<!--truncate-->

## What you have missed

There is too much in eight releases to describe it all, so here are the things that I think matter most.

**Batch submission** got a substantial rework. There are now two types of racks. The group rack is what you already know, while the new instrument rack is tied to a particular instrument and can be opened even when that instrument is being used manually or is under maintenance. The same mechanism also allows for submitting SampleJet racks, which was one of the most frequent requests from labs that run high throughput automation.

**Manual and semi-automated workflows** were pushed a bit further. NOMAD now archives the additional experiments that processing AU programs create, which means that pseudo-2D NOAH data sets survive the trip into the datastore in one piece. Version 3.6.3 also added support for the **[NMR Sample Manager](https://nmrsamples.github.io)**, which captures sample metadata for experiments acquired manually. Metadata has always been the weak spot of manual workflows, as there is no submission form that would collect it on the way in, and this closes a good part of that gap.

**Accounting** has grown up quite a lot. Grants can be assigned to users and groups, costing multipliers can be applied per grant, calculations can be exported to CSV, selected users can be given access to costs, and experiments that are not assigned to any grant are listed separately rather than quietly disappearing.

**Version 3.7.0** added a public landing page with usage statistics for the instance, announcement banners on the dashboard, custom lists of experiments that can be defined per group, and API documentation for user and group management. There is also an OpenAPI description of the REST API, which should make it easier for anybody who wants to pull data out of NOMAD programmatically.

Last but not least, **[NMRium](https://www.nmrium.org/)** travelled from version 0.54 all the way to version 3.0 over this period. Every one of those upgrades brought something, and the current one is a different piece of software from the one I integrated four years ago.

I should also say that I am no longer the only person committing to the repository. Over the last two years pull requests have come from **[@hunxjunedo](https://github.com/hunxjunedo)**, **[@lukasturcani](https://github.com/lukasturcani)** and **[@brianod414](https://github.com/brianod414)**, and it is a very good feeling to merge somebody else's work into this project.

## Timed experiments

Now to the main reason for this release. Version 3.8.0 brings timed experiments, which closes issue #50, one of the oldest tickets in the repository. The feature was developed in collaboration with the NMR facility at the University of Edinburgh. A large chunk of the work was done by **[Brian O'Donovan](https://github.com/brianod414)**, a project student there, and the beta testers in the Edinburgh lab shaped it considerably.

Running experiments in a loop is nothing new, of course. Nobody has to sit at the instrument through the night, as there are simple scripts for that. You put the sample in the magnet, trigger the script manually and let it repeat the experiment for as long as you need. The drawback is that the sample has to stay in the magnet for the whole run and nothing else can be measured on that instrument until the loop is finished. For a reaction that needs a spectrum every hour through the evening, the instrument is effectively out of service for everybody else.

With version 3.8.0 you can submit the sample through NOMAD as usual and give it a start time and a repeat loop with a lag between the repeats. The sample goes into the magnet only when a repeat is due. In between, it sits in the sample changer while the reaction carries on at room temperature, and the instrument keeps running normal traffic. In other words, reaction monitoring is slotted in alongside everybody else's experiments rather than taking the instrument over.

![Two timelines against the same clock. With a loop script the sample occupies the magnet from the first run at 19:30 until the last one finishes at 23:00, so nothing else can run. With a timed experiment the same four hourly repeats are slotted in between other users' experiments.](./timed-experiments.svg)

A couple of details are worth mentioning, because they took longer to get right than the feature itself.

- The start time is an absolute clock time rather than a delay. The first implementation asked for a duration, and the beta testers in Edinburgh asked for this to be changed. They were right, as nobody thinks "in three hours and forty minutes", they think "at half seven". If the time you pick has already passed today, the submission rolls over to tomorrow.
- The status table shows the estimated end time of a timed data set in a popover on the clock icon. Getting this to display in the facility timezone rather than in the server's UTC took an embarrassing number of attempts, as it kept being an hour out during British Summer Time.
- If the lag in your repeat loop is shorter than the longest experiment currently queued on that instrument, NOMAD warns you before submission. A repeat loop that cannot keep up with the queue is a very quiet way of ruining an overnight run.
- Day and night allowances are clamped automatically for timed experiments, so the queue's own time limits don't cut your kinetics short.

For reaction monitoring at room temperature this means that a run through the evening no longer blocks the instrument, and because it goes through the normal submission, the data is tracked and archived like any other experiment.

## Also in this release

- **Resubmit for batch submission.** Samples that ended in error can be resubmitted directly from the rack, which frees the holder on the spectrometer and rebuilds the history entries properly instead of leaving orphans behind.
- **Private group racks.** A group rack can be marked private and is then visible only to members of that group and to full administrators.
- **Archived grants.** Grants can be archived and costed separately, so old grants stop cluttering the costing tables without being deleted.
- **Session expiration warning.** You get a warning before your session expires and the token can be refreshed, rather than losing what you were doing.
- **Archived experiments are now protected from status regression.** There were circumstances in which an experiment that had already been archived could be pushed back to an earlier status, and that was a path to losing data. It is closed in three places now.
- **Experiment search** has been consolidated and properly indexed, and inactive instruments can be included in the search form.
- Under the hood, the front end moved to React 19, the Docker images to Node 24 LTS, and the booking form was broken up into components small enough to reason about.

## Documentation

This website did not stand still either, even though it probably looked like it with no new blog posts.

- **[Video tutorials](../docs/video-tutorials)** for everyday users were recorded last year, covering the dashboard, submitting samples, searching experiments, resetting a password and resubmitting a sample. Sometimes it is simply easier to watch than to read.
- A new **[NOMAD configuration](../docs/getting-started/nomad-config)** guide takes a lab manager from a freshly installed server to the first experiment: adding instruments, groups, users and parameter sets.
- The **[spectrometer client installation](../docs/getting-started/client-installation)** now explains how to run the client as a service on Linux, so it starts again automatically after a reboot, and what to check when the client fails to start.
- The server installation guide documents all environment variables, including `TIMEZONE`. If you are going to use timed experiments, please check that it is set correctly for your facility.
- The **[white paper](../docs/whitepaper)** has been updated and its diagrams redrawn, and the homepage now shows the labs that use NOMAD, testimonials from some of them and a link to our **[Discord server](https://discord.gg/YxwFuCJeJ9)**.
- The old legacy installation guide and the demo server have been retired.

## A new pair of hands

Anybody who looks at the commit log will notice that most commits since August are co-authored with Claude. I have been using **[Claude Code](https://claude.com/claude-code)** for the day to day development of NOMAD and I am not going to pretend otherwise, partly because it is written in the git history anyway and partly because I think it is the more interesting thing that happened this summer.

I have written on this blog since 2022 about the one problem I could never solve, which is that this project has one developer. I taught myself to build web applications precisely because I could not find anybody else to do it. That constraint has shaped every roadmap decision I have made, and plenty of features sat in the issue tracker for years not because they were hard but because there was only so much of me to go round.

That constraint is loosening, and not only because of AI. Timed experiments are the proof that collaboration with other labs and their students works, and I hope to see more of that. However, much of the rest of this release, such as batch resubmission, private racks and archived grants, was built with Claude Code over the last few weeks. The React 19 upgrade, which I had been putting off for the better part of a year because three dependencies were using APIs that React 19 removed, took an afternoon. Test coverage of the API, which I confessed in the version 3.2.2 post was sitting at about 45% and creeping up slowly, is finally moving again.

I want to be clear that this is not the same as having a second developer. I still review every line, I still run everything on real instruments in our lab before it goes anywhere near a release, and the things that need an NMR spectroscopist's judgement still need mine. What has changed is the cost of the work I used to postpone. For a single maintainer of a codebase this size, that turns out to matter more than I expected.

To conclude, version 3.8.0 is on **[GitHub](https://github.com/nomad-nmr/nomad-server/releases)** along with the usual **[installation instructions](../docs/getting-started/system-overview)**. As always, feedback from active or potential users is the thing I value most, so do get in touch with any questions. And I will try rather harder not to leave it another two years before the next post.
