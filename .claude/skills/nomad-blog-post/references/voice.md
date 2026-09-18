# Tomas's blog voice

Distilled from every post in `blog/` (2022-01 welcome → 2026 v3.8.0). Read the two most
recent posts as well — this file captures patterns, the posts carry the actual sound.

**Outlier:** the v3.5.0 post ("It's Hard to Teach Old Dogs New Tricks") is written in a
polished, press-release register — "We're thrilled to announce", "revolutionizing",
plural "we". It is not representative. If it is one of the two most recent posts, read
the next one back instead for voice.

## Who is talking

Tomas Lebl, NMR facility manager at St Andrews and self-taught developer of NOMAD. He
writes as a practitioner talking to peers: first person singular, honest about delays
and doubts, enthusiastic about ideas rather than about the product. It is never marketing
copy. English is not his first language and the posts carry a plain, slightly
conversational rhythm — match the register, but do not deliberately introduce errors.

## Titles

An idiom, pun or question, then the version in parentheses:

- "NOMAD 3 - Third time lucky?"
- "Floating on the back of whale (version 3.2.0)"
- "Could orange be the new red (v3.3.0)"
- "Can we keep NMR data F.A.I.R from inception to publication (v3.4.0)"
- "It's Hard to Teach Old Dogs New Tricks (v3.5.0)"
- "About Time (v3.8.0)"

A double meaning that ties the headline feature to the story of the release works best.

## Openers

Short, personal, often candid about the gap since the last post, and ending with a hook
before `<!--truncate-->`:

- "It has been a while since my last post here. I had to take some time off over the
  summer but did not stop pushing things forward."
- "I try to keep up with something that it seems to become a tradition and release
  another major upgrade just before summer holidays."
- "I have just released a new version of NOMAD on GitHub."

## Register and recurring phrasing

Plain sentences, moderate length. Phrases that recur naturally (use some, don't stack
them): "couple of", "quite", "rather", "a bit", "Obviously,", "In my opinion,", "Thus,",
"Moreover,", "game changer", "Last but not least", "To conclude,", "That's it for just
now", "Stay tuned".

## Recurring themes

- **Motivation from the lab.** Features are explained through real facility needs — the
  PhD NMR course that pushed the manual-data gateway (v3.3.0), teaching labs, variable
  temperature and reaction monitoring experiments.
- **F.A.I.R. data, "from inception to publication".** The long arc of the project.
  NMR data losing F.A.I.R. status when downloaded to a PC; datasets and collections as
  the fix.
- **Paradigm shift and old habits.** Users slipping back to old habits; printing spectra
  on paper as the historical analogy.
- **Single developer / sustainability.** Self-taught, too few hands, looking for
  collaborators.
- **NMRium** as the enabling tool — genuine admiration, linked every time.
- **Invitation to engage.** Feedback from active or potential users is what he values.

## Structure

- Short posts (≈300 words): no headings.
- Longer posts: `##` sections, e.g. "Background", "Future Outlook", "Conclusion", or
  feature-named sections.
- Occasional `:::tip` admonition for a summary box.
- Bullet lists for feature details; prose for motivation.
- Closes with a forward look and/or an invitation to get in touch.

## Formatting conventions

- British English (`organise`, `visualisation`, `behaviour`).
- External links bolded: `**[NMRium](https://www.nmrium.org/)**`,
  `**[F.A.I.R.](https://www.go-fair.org/)**`, `**[version 3.2.0](https://github.com/nomad-nmr/nomad-server/releases/tag/v3.2.0)**`.
- Internal docs links relative: `**[installation instructions](../docs/getting-started/system-overview)**`.
- Images beside the post: `![Descriptive alt text](./figure.svg)`.
- Front matter: `slug`, `title`, `authors`, `tags` (Title-ish keywords such as
  `NOMAD`, `NMRium`, `datastore`, feature names).
