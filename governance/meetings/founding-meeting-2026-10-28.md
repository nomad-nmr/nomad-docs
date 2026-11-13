---
sidebar_position: 1
sidebar_label: 28 October 2026 (founding)
---

# Steering Committee: Founding Meeting, 28 October 2026

**Present:** Tomas Lebl (Project Lead, chair), Andrew Hall (Edinburgh), Stuart Elliott (Imperial), Neil Wells (Southampton), Sally Bloodworth (PSDI).

**Not present:** Manchester, UCL.

## Governance

- The committee found the draft governance document clear and raised no objections.
- **Meetings:** twice a year is enough, with email and Discord in between. The next meetings are planned for around June 2027 (near the UK MRM meeting) and around December, avoiding the busy autumn.
- **Seats:** the Project Lead represents St Andrews, with no separate extra seat. This can be revisited if the project grows substantially.
- **Second maintainer:** not decided. The committee agreed the ideal person combines NMR facility experience with knowledge of the code, and nobody like that is currently involved. For now:
  - Andrew Hall will be invited to join the NOMAD GitHub organisation as a member (without maintainer rights) and keep helping with issues.
  - Sally will ask PSDI whether part of a PSDI research software engineer's time can be formalised as a fixed-term maintainer role, linked to the Hub work.
  - Stuart will explore whether engineers at Imperial's software partner could contribute code.
  - The question stays open and will be revisited as the Hub develops.
- **Community contributions:** more small contributions from the wider community are welcome. Edinburgh's summer 2026 collaboration with a computer science PhD student is a model that other labs or PSDI could repeat.
- **Growing the network:** Sally noted that data sharing depends on more facilities adopting NOMAD, so an engagement strategy for recruiting new labs is needed.

## Roadmap

**Now**
- **NOMAD-NMR Hub, first version:** a placeholder website showing non-confidential usage statistics from connected instances, built with PSDI. Tomas will draft it first and contact Sally once a prototype is ready, and the work then continues with PSDI's engineer. Target for testing: around December to early 2027.
- **Email authentication (OAuth 2.0):** Microsoft is phasing out basic authentication for email in 2027. Added as a priority at Imperial's request. Stuart will confirm the scope of the authentication change (whether it affects only sending email or also signing in to NOMAD itself), and Tomas will check what the email library already supports.

**Next**
- **Structure verification from 13C shifts:** DP5q has so far looked unsuitable, so other methods will be explored.

**Later**
- **TopSpin Python API:** moves up the list if Bruker signals the end of IconNMR.
- **Sharing data with the Hub:** optional for labs, with terms agreed first.
- **Lab requests of lower priority:** user-defined composite experiments, attachments and documents on the server, helium monitoring, and a queue for manual and service experiments.
- **Support for other spectrometer vendors:** depends on vendors opening their software interfaces. Members will raise the case with JEOL and approach labs that run JEOL instruments.

A release (3.8.1) with a few quick fixes and small requested features is planned before the end of the year.

## Actions

| Who | Action |
| --- | --- |
| Tomas | Invite Andrew to the GitHub organisation. Check email OAuth support. Draft the Hub placeholder and contact Sally when the prototype is ready. Update the governance and roadmap documents. |
| Sally | Take the maintainer proposal and the student/developer contributor idea to PSDI. Let PSDI's engineer know that the Hub placeholder is coming. |
| Stuart | Confirm the scope of the authentication change (email sending only, or also signing in to NOMAD itself). Explore contributions from Imperial's software partner. Raise NOMAD support with visiting JEOL representatives. |
| All | Suggest labs, including those with JEOL instruments, who might adopt NOMAD. |
