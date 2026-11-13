---
title: Roadmap
description: Where NOMAD is heading, and how labs can influence it.
sidebar_position: 2
---

# Roadmap

This page shows where NOMAD is heading and what we are working on. It is organised as **Now**, **Next** and **Later**, with no fixed dates: NOMAD is developed by a very small team, so we keep the "Now" list short and would rather say what comes first than promise when.

:::tip Follow progress
Every item on this roadmap has an issue on GitHub, and you can follow day-to-day development on the **[NOMAD project board](https://github.com/orgs/nomad-nmr/projects/1)**. The "Features - Todo" column shows the roadmap items with their **Now**, **Next** and **Later** priority. You don't need a GitHub account to view it.
:::

:::note
This roadmap was discussed at the founding steering committee meeting on 28 October 2026 (see the **[meeting summary](./meetings/founding-meeting-2026-10-28.md)**) and updated with requests from the labs. The order of items may still change.
:::

## Now

### NOMAD-NMR Hub: first version

A website showing usage statistics collated from connected NOMAD instances, hosted in partnership with the Physical Sciences Data Infrastructure (PSDI).

- **Why it matters:** it is the first practical step towards a shared national NMR data repository, a way to explore what is technically feasible (including whether institutional IT services allow data to leave the lab network), and a public face for the network of NOMAD labs.
- **What the first version shows:** only non-confidential statistics, such as the number of active users, archived experiments and connected instruments. No research data.
- **Status:** in design. A first draft will be built on the NOMAD technology stack and then developed with a PSDI research software engineer. We aim to have a version ready for testing around December 2026 to early 2027.

### Email authentication (OAuth 2.0)

Support for modern authentication when NOMAD sends email notifications.

- **Why it matters:** Microsoft is phasing out basic authentication for email, with the change expected during 2027 and some effects already visible. Labs that rely on Exchange or Outlook for notifications will need NOMAD to keep working. Requested by Imperial as its top priority, and added to "Now" by the committee.
- **Status:** being scoped. Imperial is confirming the scope of the authentication change, in particular whether it affects only sending email or also signing in to NOMAD itself. We are checking what the email library NOMAD uses already supports, and will make it easy to configure.

## Next

### Structure verification from 13C shifts

Checking a proposed chemical structure against its experimental 13C chemical shifts, as a service alongside NOMAD.

- **Why it matters:** it lets labs check proposed structures against archived 13C spectra, and it should make NOMAD's workflows more attractive to organic chemists who might then archive their spectra at the Hub.
- **Status:** planned, linked to a student project at St Andrews. DP5q, the method first considered, looks unsuitable so far, so other approaches are being explored.

### Automated frontend testing (Playwright)

Automatic end-to-end tests of the NOMAD web interface, using Playwright.

- **Why it matters:** the tests catch problems in the submission and accounting workflows before a release reaches the labs, make frequent releases safer, and give new contributors and maintainers more confidence when changing the code.
- **Status:** planned. This is infrastructure work rather than a new feature, so it will not change what users see.

## Later

### Support for the TopSpin Python API

A new way for NOMAD to communicate with Bruker spectrometers, alongside the existing IconNMR interface.

- **Why it matters:** the Python API is currently available only on the newest instruments. NOMAD keeps working with IconNMR on all instruments it supports today, and this work is about being ready for the future. Bruker may stop providing IconNMR on new instruments as security rules on identifiable user logins change, while existing systems are expected to keep working.
- **Status:** not started, but we are watching closely. If Bruker signals that IconNMR will be discontinued, this moves up the list.

### Sharing data with the Hub

Letting a lab choose to send datasets from its NOMAD instance to a shared repository.

- **Why it matters:** it is the step from sharing usage statistics to sharing data itself.
- **Status:** not started. Participation will always be optional, and the terms will be agreed with PSDI and the participating labs first (see **[Governance](./index.md#9-data-and-the-nomad-nmr-hub)**, section 9). A plugin for uploading to a repository, suggested by Imperial, belongs here.

### User-defined composite experiments

Letting each user define their own sets of experiments (for example proton, carbon, HSQC and HMBC) in their settings and submit them in one step.

- **Why it matters:** users of Bruker's own software are used to one-click experiment sets. It is a bigger feature than it looks, so it sits at lower priority.
- **Status:** idea stage. Requested by Southampton.

### Support for other spectrometer vendors

Using NOMAD with JEOL and other manufacturers' instruments, so that labs with mixed fleets can use one system.

- **Why it matters:** it would widen the number of labs that can adopt NOMAD.
- **Status:** depends on vendors opening their software interfaces. We are in discussion with JEOL, and committee members will help by raising the case with the vendor. Labs running JEOL instruments who are interested are welcome to get in touch.

### Lab management extras

Features that move NOMAD towards an all-in-one tool for NMR facilities. None are urgent, and we will decide the order with the labs.

- **Attachments and documents:** storing files with a dataset (for example processed PDF reports next to the raw data), and a documents section on the server (for example health and safety documents). Requested by Imperial.
- **Helium monitoring:** a section for monitoring helium levels. Requested by Imperial.
- **Queue for manual and service experiments:** a log of requests that replaces paper forms, with items ticked off and commented when done. Requested by Imperial.

## Ongoing: improvements requested by labs

Many open issues on GitHub come from lab feedback on the submission and accounting workflows. We work through these alongside the items above, and a release with several quick improvements is planned before the end of 2026. Before each steering committee review, every lab can name its top two or three, and the committee helps decide which to prioritise.

Currently on the list:

- **Quick wins, likely in the next release:** a copy entry button in the submit workflow (#274, Edinburgh and Imperial). The feature already exists elsewhere in NOMAD, so this is a small change.
- **Fixes under investigation:** raw and processed data from some manual experiments (such as DOSY and STD) are not being archived correctly.
- **Suggested, not yet discussed by the committee:**
  - night experiment permissions for all users (#330, Edinburgh)
  - resubmitting batch samples (#367, Edinburgh)
  - counting "samples" in the accounting (Southampton)

## How this roadmap is kept

- It is reviewed by the steering committee twice a year (around June and December) and updated after each review.
- Changes to roadmap priorities go through the proposal process described in **[Governance](./index.md#4-decision-making)**, and the outcome is recorded in the decision log.
- Day-to-day development is tracked on the **[GitHub project board](https://github.com/orgs/nomad-nmr/projects/1)**. You don't need an account to view it.

*Last updated: October 2026.*
