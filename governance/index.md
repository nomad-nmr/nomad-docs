---
sidebar_position: 1
---

# NOMAD Project Governance

:::note
Agreed at the founding steering committee meeting on 28 October 2026 (see the **[meeting summary](./meetings/founding-meeting-2026-10-28.md)**).
:::

## 1. Purpose and scope

This document describes how the NOMAD project (NMR Online Management And Datastore) is run: who makes decisions, how the community of labs takes part, and how the project carries on if people move on. It is deliberately lightweight and will change as the project grows.

It covers all repositories under **[github.com/nomad-nmr](https://github.com/nomad-nmr)** (including `nomad-server`, `nomad-spect-client` and `nomad-docs`) and the project website, **[nomad-nmr.uk](https://www.nomad-nmr.uk)**.

## 2. Principles

- **Open.** NOMAD is developed in the open under the AGPL-3.0 licence. Decisions and the reasons for them are recorded publicly wherever practical.
- **Labs first.** Priorities are driven by the needs of the facilities that run NOMAD.
- **FAIR data, under the lab's control.** Data stays with the lab and institution that produced it. Sharing beyond the lab is always opt-in (see section 9).
- **Low overhead.** The process should be no heavier than the project needs at its current size.

## 3. Roles

**Project Lead.** Dr Tomas Lebl (School of Chemistry, University of St Andrews) created NOMAD and currently leads it. The Project Lead has final decision authority, following the process in section 4. The role includes setting technical direction, reviewing and merging contributions (or delegating this), chairing the steering committee, publishing releases, and acting as the accountable contact for the host institution and funders.

**Maintainers.** People with merge and release rights. They are appointed by the Project Lead, with the steering committee informed, after a track record of sustained, good-quality contributions. Currently the Project Lead is the only maintainer. Reducing reliance on a single person is an explicit goal of the project. Maintainer rights can be granted for individual repositories, for example for the planned NOMAD-NMR Hub repository.

**Organisation members.** People who take part regularly (for example by managing issues or proposing documentation changes) are invited to join the GitHub organisation as members. Membership does not carry merge or release rights.

**Contributors.** Anyone who files an issue, submits code or documentation, tests a release, or helps another lab get started.

**Steering Committee.** The advisory voice of the adopting labs and partners (section 5).

## 4. Decision-making

**Day to day.** Routine work happens through GitHub issues and pull requests. A maintainer may merge after review. No further process is needed.

**Significant decisions.** The following go through the proposal process below:

- changes to roadmap priorities
- changes to the licence
- breaking changes to the data model, API or archive format
- anything that changes how data leaves a lab's NOMAD instance (including integration with a national repository)
- adding or removing maintainers
- changes to this document

The process:

1. The Project Lead or any committee member emails the proposal to the committee with the subject line "[NOMAD proposal] *title*". The email gives a short summary, the reasons, and the date the comment period closes. The Project Lead also lists the proposal as open in the public decision log.
2. A comment period of at least 14 days follows. Committee members reply to all on the same thread. Anyone else may send comments to the Project Lead, who shares them with the committee.
3. The Project Lead decides, aiming for consensus. If no objection has been raised by the closing date, the proposal is taken as agreed.
4. Within seven days of the comment period closing, the Project Lead replies on the thread with the decision and the reasoning, and records them in the decision log (`decisions.md` on the NOMAD documentation site). If the Project Lead decides against the clear view of the committee, the reasons are published there too.

Urgent security or data-loss fixes may go ahead immediately and be reported afterwards.

Discord is used for informal discussion and announcements. Proposals, and the decisions made on them, live in email and the decision log. Committee members do not need a GitHub account.

## 5. Steering Committee

**Role.** Advisory. The committee does not manage code day to day. It exists so that the labs relying on NOMAD have a structured say in where it goes.

**Responsibilities.**

- advise on roadmap priorities
- review significant proposals
- support funding applications and partnerships
- help onboard new labs, and help shape a strategy for recruiting more adopting labs
- review this document annually

**Composition.**

- one representative from each adopting lab (section 6). The seat belongs to the lab, not the individual: the lab nominates its representative, may name an alternate who can attend in their place, and may change either at any time
- one seat for a national data infrastructure partner (currently the Physical Sciences Data Infrastructure, PSDI)
- the Project Lead, who chairs and also represents the University of St Andrews (there is no separate St Andrews seat)

Further seats (for example, industry) may be added by consensus of the committee. The balance of seats, including the St Andrews seat, is reviewed if the number of adopting labs and contributors grows substantially.

**Initial members.** Each lab confirms its representative and, if it wishes, an alternate. The last column shows who attended the founding meeting on 28 October 2026.

| Seat | Representative | Founding meeting |
| --- | --- | --- |
| Imperial College London | Dr Stuart Elliott | Attended |
| UCL School of Pharmacy | To be confirmed by UCL | Not present |
| University of Southampton | Dr Neil Wells | Attended |
| University of Edinburgh | Dr Andrew Hall | Attended |
| University of Manchester | Dr Ralph Adams | Not present |
| PSDI | Dr Sally Bloodworth | Attended |
| University of St Andrews, and Project Lead (chair) | Dr Tomas Lebl | Attended (chair) |

**Meetings.** At least twice a year, online, with email and Discord in between. The aim is one meeting around June (near the UK MRM meeting, so that some members can also meet in person) and one around December, avoiding the busy autumn term. An agenda is circulated beforehand and short notes are published afterwards in the repository or on the website.

**Decisions.** Consensus is preferred. Where a vote helps, each seat has one advisory vote. The final decision rests with the Project Lead as described in section 4.

**Conflicts of interest.** Members declare it when a proposal directly affects their institution or a commercial interest, and the committee decides whether they should step back from that item.

## 6. Adopting labs

An adopting lab is an NMR facility that runs NOMAD in production or has committed in writing to doing so (for example, through a letter of support). The size of a lab's installation does not affect its seat: every adopting lab has one.

**What labs are asked to do.** The expectations are light:

- nominate a steering committee representative
- report bugs and share feedback
- take part in at least one committee call a year
- cite or acknowledge NOMAD in publications and reports where appropriate

**What labs receive.**

- a voice in the roadmap
- installation and training support, as resources allow
- early notice of releases and breaking changes

**Joining and leaving.** A new lab contacts the Project Lead (**[nomad@st-andrews.ac.uk](mailto:nomad@st-andrews.ac.uk)**), is added to the list of adopting labs on the website, and its representative joins the committee. A lab may leave at any time without penalty, and its seat then lapses.

## 7. Contributions

Contribution guidelines are on the **[Contributing](./contributing.md)** page and community standards in the **[Code of Conduct](./code-of-conduct.md)**.

- Contributions are accepted under the project's AGPL-3.0 licence, and contributors keep their copyright. No formal sign-off or contributor agreement is required at this stage. This will be revisited if the number of outside contributors grows.
- Contributors are responsible for what they submit, including code produced with AI assistance. Significant AI assistance should be mentioned in the pull request.
- Contributions from the wider community are welcome, including small fixes, documentation changes and work by students or engineers funded by a lab or partner. All contributions are reviewed before they are merged.
- The core team itself uses AI coding assistants (commits are co-authored accordingly), and the same review standard applies to all contributions.

## 8. Continuity and succession

- At least two people hold owner rights on the GitHub organisation. Credentials needed to publish releases and run the project (container registry, domain, documentation hosting) are documented and accessible to a second named person. Who this second person will be was not settled at the founding meeting. The committee agreed that the ideal second maintainer combines NMR facility experience with knowledge of the code and a lasting interest in NOMAD, and that nobody like that is currently involved. As interim steps, committee members who use GitHub are invited to join the organisation as members, and PSDI is considering whether part of a research software engineer's time can be named as a fixed-term maintainer, linked to the Hub. The question will be revisited as the Hub develops.
- If the Project Lead is unreachable or inactive for three months without notice, the steering committee may appoint interim maintainers to keep the project running (security fixes, releases) and begin a succession process.
- The Project Lead may step down at any time. The successor is chosen by the Project Lead in consultation with the committee, or by the committee if none has been named.
- When the project has at least three active maintainers from at least two institutions, or sooner if the Project Lead chooses, decision-making should move from a single lead to a collective maintainer or technical steering group. This is reviewed at the annual governance review.

## 9. Data and the NOMAD-NMR Hub

Each lab's NOMAD instance, and the data in it, belong to that lab and its institution. Participation in any shared repository, including the planned NOMAD-NMR Hub in partnership with PSDI, is opt-in at lab and dataset level. The Hub will be a central repository hosted by PSDI. Its first version will only show non-confidential usage statistics from connected instances (such as numbers of active users, archived experiments and instruments), and no research data. Terms for the Hub (licensing, curation, retention, who may access what) will be agreed with PSDI and the participating labs, and recorded as a proposal under section 4, before any data flows.

## 10. Security

Please report suspected vulnerabilities privately to the Project Lead, by direct message on Discord or by email to **[nomad@st-andrews.ac.uk](mailto:nomad@st-andrews.ac.uk)**, rather than in a public issue.

## 11. Funding, hosting and acknowledgement

NOMAD is developed at the University of St Andrews, which hosts the Project Lead. Funders and partners are acknowledged on the website. Funding does not by itself confer decision-making rights over the project.

## 12. Changing this document

Changes are made through the proposal process in section 4 and reviewed annually by the steering committee. The history of this file in the repository is the record of changes.
