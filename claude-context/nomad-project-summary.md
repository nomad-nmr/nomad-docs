# NOMAD NMR — Project Summary

*Prepared September 2026 — last reviewed 15 September 2026*

## What NOMAD Is

NOMAD (NMR Online Management And Datastore) is an open-source (AGPL-3.0) platform, created and led by Dr Tomas Lebl at the University of St Andrews (School of Chemistry), that manages the full lifecycle of NMR spectroscopy data in a research facility. It sits above the instrument control software (Bruker IconNMR/TopSpin) as an orchestration layer and solves two distinct problems for NMR labs:

- **Orchestration and control** — a centralised, browser-based dashboard for booking instrument time, submitting and tracking experiments in real time, managing user accounts and groups, and reporting usage and costs.
- **FAIR data preservation** — automatic archiving of raw NMR data alongside its metadata, replacing the common failure mode of data scattered across individual PCs in ad-hoc folder structures that make later retrieval (e.g. for publication or re-analysis) nearly impossible.

Researchers submit experiments through the portal, process and analyse spectra directly in an embedded lab notebook (built on NMRium), and the raw data is archived automatically with full provenance — removing the need to ever download data to a local machine. A REST API also exposes archived data programmatically, including to automated and AI-driven workflows.

The technical design (MERN stack: MongoDB, Express, React, Node, containerised with Docker) and the FAIR rationale are documented in full in the project's technical specification and white paper.

## Current Situation

**Deployment and scale.** NOMAD is live at six UK university NMR facilities — St Andrews plus Imperial College London, UCL School of Pharmacy, Southampton, Edinburgh and Manchester. At its original site, the University of St Andrews, it has been in continuous production use since 2020, serving around 200 active users across six spectrometers and archiving over 400 experiments a day at peak. That spread has come entirely by word of mouth, with no dedicated outreach funding behind it.

**Funding.** An Expression of Interest has been submitted to the University of St Andrews Impact & Innovation Fund (IIF) for 2026–27, requesting roughly £5,000–£10,000 under the Impact stream (a 12-month project proposed for January–December 2027). The funding would support two things: continued on-site installation visits and training at adopting labs, engagement with the NMR community (including the SMASH conference), and — critically — a part-time student developer from Computer Science, aimed at reducing the project's single-developer dependency, which is its most significant sustainability risk. The application names the five other adopting labs (Imperial College London, UCL School of Pharmacy, Southampton, Edinburgh, Manchester) as partners, with the Physical Sciences Data Infrastructure (PSDI) as a separate national-infrastructure partner. Outstanding tasks before submission include confirming a supporting DOI resolves correctly and collecting partner letters of support.

**Active development.** The latest published release of the core platform (`nomad-server`) remains `v3.7.1` (6 August 2026), a small bug-fix release on top of `v3.7.0` (7 July 2026), which added the instance landing page with usage statistics, per-group custom experiment lists, dashboard announcement banners, zero-balance toggles in the accounting tables, direct access to recent datasets from the NMRium page, and API documentation for user and group management. Current engineering effort is focused on the as-yet unreleased v3.8.0, now sitting at `v3.8.0-beta.2` with 21 commits merged since the `v3.7.1` tag (18 August – 9 September 2026); nothing in it should be described as shipped until that release is published. The headline feature is timed experiments (Issue #50): scheduling submitted experiments to a clock-time start with repeat loops, timezone-aware end-time estimation, and automatic allowance clamping — this has now merged to `main`, so the technical specification's description of it as an unmerged feature branch is out of date and due an update. Alongside it: a resubmit action for batch-submitted samples, a session-expiration warning with token refresh, three-layer protection against archived experiments silently regressing to an earlier status (closing a data-loss path in the tracker), a consolidated and better-indexed experiment search, an NMRium upgrade to v2.5, and a refactor of the experiment-booking form into smaller components. Most commits are co-authored with Claude (Sonnet 5, Opus 5, Haiku 4.5), consistent with the project's AI-assisted development workflow.

**Documentation.** In parallel, NOMAD's documentation site and content workflows are being actively built out, including installation guides, video tutorials for daily users, and an emerging pipeline to automate release notes and announcement content (blog posts, social copy) from GitHub releases.

**Why this matters.** Independent research (Bloodworth, Willoughby & Coles, *Beilstein J. Org. Chem.* 2025) analysing 240 organic chemistry papers found that under 20% share any primary research data, and only 1% of NMR-reporting papers share raw NMR data at all — despite 96% meeting minimal journal requirements. Crystallography shows the alternative is possible: a shared repository (CCDC) and common format drive near-universal sharing. NOMAD is built to make the equivalent practical for NMR.

## Outlook

**A national NMR data repository.** NOMAD's longer-term vision is the NOMAD-NMR Hub — a shared, curated NMR data repository built in partnership with PSDI, deliberately modelled on the role CCDC plays for crystallography. Rather than building repository infrastructure itself, NOMAD would connect individual lab instances to PSDI's established storage and governance, focusing its own effort on capturing and curating data at the point of acquisition. The same REST API that already allows programmatic reads is planned to eventually support pushing data from a lab's NOMAD instance up to the Hub.

**Growing adoption.** The immediate growth path is expanding from six to more UK academic NMR facilities, with industrial adoption as a longer-term ambition once the academic user base is large enough to be self-sustaining.

**Automated structure verification (planned).** A future direction, not yet started, is integrating DP5q — a graph neural network tool for verifying a proposed chemical structure against its NMR data — as a microservice alongside NOMAD, extending the platform from data capture into automated structure verification.

**Sustainability and governance.** Beyond the IIF-funded developer post, plans include establishing a lightweight steering committee drawn from existing lab users (in an advisory capacity, with a BDFL model for now) and formal open-source governance documents (contribution guidelines, code of conduct). A longer-term funding pipeline beyond the IIF is also being considered, including EPSRC, JISC, and the Software Sustainability Institute.

**Open question worth preparing for.** Given NOMAD already runs at eight sites (six labs plus development/testing), reviewers may ask why it is seeking small-scale seed funding rather than applying to larger research-software funders directly — this is a point the team is already aware needs a clear answer.

---

*This summary draws on the NOMAD white paper, technical specification, the draft IIF funding application, the `nomad-server` commit history since `v3.7.1`, and related project notes. Let me know if anything should be corrected, expanded, or reframed for a specific audience.*
