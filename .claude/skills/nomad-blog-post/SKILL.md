---
name: nomad-blog-post
description: Research and write a NOMAD blog post in Tomas Lebl's own voice — release announcements, catch-up posts after a gap, and feature write-ups for the blog/ folder of this Docusaurus site. Use this skill whenever the user asks for a blog post, a release post or announcement, to "write up" a nomad-server version (e.g. "a post for v3.9.0"), to tell the community what has changed, or to pick the blog up again — even if they never say "blog". It covers researching nomad-server releases and commits, finding documentation changes on every branch of this repo, asking the domain questions git cannot answer, drafting in house voice, and handing the draft over with its judgement calls flagged.
---

# NOMAD blog post

Tomas writes the NOMAD blog for the NMR community — lab managers, facility staff and
chemists who use or are considering NOMAD. The posts are first-person, candid and plain,
and they are read as his own words. Two things therefore matter more than polish: that
the post **sounds like him**, and that **every claim in it is true**. A post that reads
beautifully but credits the wrong person, or invents how a feature came about, does real
damage — the people it describes read it.

Work through the steps in order. The research is what makes the post accurate; the
questions in step 4 are what make it right.

## 1. Orient

- **Find the last post.** List `blog/` and take the newest dated entry. Note its date (from
  the folder or file name) and the version in its slug or title. That version is the lower
  bound for release research and the date is the lower bound for documentation research.
- **Is the target release out yet?** If it is already tagged, research ends at that tag
  and its release date. If not, research runs to the tip of `main` and today.
- **Read `claude-context/nomad-project-summary.md` — every time.** Tomas maintains this
  file himself and keeps it current; it holds what is not in this repo or on GitHub:
  which labs run NOMAD, scale at St Andrews, collaborations, the NOMAD-NMR Hub vision with
  PSDI, research on NMR data sharing. Re-read it rather than trusting an earlier reading.
  - It mixes public facts with internal material. Use public facts freely (adoption,
    scale, Hub vision, published research). **Do not put funding applications, bids,
    reviewer concerns or governance plans in a post without asking** — a blog post is
    public, and those items often are not yet.
- **Read the two most recent posts in full**, then `references/voice.md`. The live posts
  keep the voice current as Tomas writes more; the reference distils patterns across all
  of them, and notes which posts are outliers to not imitate.

## 2. Research nomad-server

Commands are in `references/research.md`.

- Release notes for **every tag** since the last post's version, including betas.
- Full commit messages in the range: previous tag → target tag for a released version, or
  latest tag → `main` for an upcoming one. From v3.7.1 onward messages are verbose and
  describe intent well — read the bodies, not just the subjects.
- **When release notes are too thin to describe a feature**, look at the relevant route or
  component files for that PR — enough to say what a user sees and can do, no deeper.
  The post describes behaviour, not implementation.
- **Who did the work.** Pull human authors and co-authors (the GraphQL query) and the
  "New Contributors" / "@user in #PR" lines from release notes. People come before tools
  in the credit.
- **Released vs unreleased.** If the headline work is only on `main` or in a beta tag, the
  post is being written to go out *with* that release. Write it as the release
  announcement, but say so in the handoff, and never describe beta-only work as already
  shipped in earlier releases.

## 3. Research this repo (nomad-docs)

Documentation work belongs in the post, and it is easy to miss: Tomas writes posts on a
release branch (e.g. `release-380`), so recent docs work may not be on `main` at all.
Fetch, then look at **all branches** since the last post's date, and diff the content
folders from the commit that added the last post. See `references/research.md`.

The origin remote URL may embed a GitHub token. Pipe any output that might print the
remote through the redaction `sed` shown in the reference, and never repeat a token.

## 4. Ask before drafting

Git records code, not lab practice or relationships. Before writing, use AskUserQuestion
for what materially changes the post — typically:

- **Which release it is pegged to**, and whether it is a catch-up after a gap.
- **The headline feature** — propose the one the evidence points to.
- **How the headline feature is used in practice, and what people did before it.** Do not
  infer the "before" from the code. On the v3.8.0 post, the commits suggested timed
  experiments replaced sitting at the instrument; in reality labs already ran loop
  scripts, and the real gain was not blocking the magnet for everyone else. Only Tomas
  could say that.
- **Collaborators, labs, students or beta testers to credit** who may not appear in git.
  On v3.8.0, a design change came from Edinburgh beta testers and much of the feature was
  built by an Edinburgh project student — neither was obvious from the commits alone.
- **How much weight the Claude Code / AI-assisted development angle gets**, if relevant.

Ask a compact set (2–4 questions). Anything unclear later can be flagged in the handoff
instead of blocking.

## 5. Draft

- **Location:** `blog/YYYY-MM-DD-vX.Y.Z/index.md` (a folder, so images can sit beside it).
  For a released version use its release date. For an upcoming one use today's date, and
  the handoff reminds Tomas to rename it to the real release date.
- **Front matter:** start from `assets/post-template.md`. Authors default to
  `[tomlebl, claude]` — the byline credits drafting the *post*, so it stays even when the
  release itself had no AI-assisted code. The `claude` entry already exists in
  `blog/authors.yml`.
- **Shape**, adapted to the material:
  opener → `<!--truncate-->` → catch-up section if there was a gap → headline feature →
  "Also in this release" → Documentation → closing.
  - **Include the Documentation section only when the docs changed substantially** — new
    or rewritten guides, tutorials, a white paper update. Leave it out entirely for minor
    changes such as a logo, a link or a small fix; a thin section padded to exist reads
    worse than none.
- **Voice:** follow `references/voice.md`. British English. Bold external links.

## 6. Accuracy rules

Each of these comes from a correction Tomas had to make, so the reasons are concrete:

- **No invented anecdotes, timelines, motives or "who spotted it".** Colour like "it felt
  wrong as soon as I used it" or "a few weeks of evenings" reads as Tomas's testimony. If
  the evidence does not show it, leave it out or ask.
- **Credit people before tools.** Name human contributors for the work they did. Do not
  attribute a feature's speed or existence to AI assistance when people built it; AI
  credit belongs only to work the commit history shows it did.
- **Describe domain tools by their domain purpose.** "Supports the NMR Sample Manager"
  says nothing; say what it does for an NMR lab (it captures sample metadata for manual
  workflows). If you cannot tell the purpose, ask.
- **Separate shipped from beta**, as in step 2.
- **Keep internal material out** unless confirmed, as in step 1.

## 7. Figure

Earlier release posts carry a scheme, and one often helps the headline feature. Offer it.
If accepted, use the `nomad-diagrams` skill, save the SVG next to `index.md`, and embed it
with alt text that is a full descriptive sentence. Make sure the figure argues the same
point as the prose — when the prose changes, check the figure still agrees.

## 8. Handoff

Start the message with one line naming the audience, e.g.
"Written for: the NOMAD community — NMR lab managers and users."

Then give:
- the file path and a short outline of the post;
- **every judgement call** — sentences that are framing or colour rather than sourced
  fact, credit you were unsure about, anything from the summary file you chose to use;
- the reminder to rename the folder date to the real release date before publishing;
- an offer of a figure if not already made.

Do not run `yarn build` — Tomas runs the dev server himself.
