---
name: nomad-diagrams
description: >-
  Create and refine the flat vector schematics used across the NOMAD docs site — the
  whitepaper figures in docs/assets/ and the homepage feature icons in static/img/.
  Use this skill whenever the user asks for a diagram, figure, scheme, schematic,
  illustration or icon in this repository, or asks to change an existing one
  (spacing, arrows, colours, an element's shape, wording inside a figure), or asks
  about the NOMAD palette or house style, or edits any .svg under docs/assets/ or
  static/img/ — even when they never say the word "SVG". Use it too when judging
  whether a diagram looks right, since it carries the render-and-review loop.
---

# NOMAD diagrams

These figures are hand-written SVG. There is no drawing tool in the loop, which is
what makes them precise and consistent — and also what makes it easy to waste an hour
rediscovering conventions that are already settled. This skill carries the settled
parts so the conversation can be about the design.

## What you are making, and where it goes

**Docs figures** live in `docs/assets/` and are embedded from markdown:

```markdown
![long descriptive alt text](./assets/NMR-data-solution.svg)
```

Markdown images render as a plain `<img>`. No page CSS reaches inside, there is no
theming and `currentColor` resolves to nothing useful, so **every fill and stroke is
hardcoded**. The alt text is a full descriptive sentence, not a label — see
`docs/whitepaper.md` lines 19 and 27 for the two worked examples. When you change what
a figure argues, check whether its alt text still tells the same story.

**Feature icons** live in `static/img/` and are pulled into the homepage by
`src/components/HomepageFeatures.js` via `require('../../static/img/name.svg').default`.
SVGR turns each into an inline React component and puts a class on the root element,
so keep the root attributes exactly as the shipped icons have them. Icons carry no
text — the page renders the title and bullets around them.

## Before you draw anything

**Check `assets/motifs.svg` first.** It holds every reusable shape already in the
system — spectrometer, benzene ring, spectrum triplet, storage drum, cloud, server,
drive, monitor, document, robot, API port, magnifier, padlock, tube rack, flow arrow,
tick, cross — each with a documented origin and natural size. Render it to browse:

```bash
node .claude/skills/nomad-diagrams/scripts/preview.mjs \
  .claude/skills/nomad-diagrams/assets/motifs.svg
```

Reusing one keeps a new figure consistent by construction. Redrawing something that
already exists is how the whitepaper figures and the landing icons drifted apart
before and had to be reconciled afterwards. An SVG cannot reference another file's
`<defs>`, so copy the entries you need into the file you are building.

**Colours mean things.** Pick by role, not by appearance:

| | |
| --- | --- |
| `#4db3e0` blue | structure and machinery — the default for "a thing" |
| `#d3dbdb` grey | inert matter — screens, clouds, casings |
| `#587c58` green | works today; control paths; positive verdicts |
| `#e5d83e` yellow | queued, selected, highlighted |
| `#e46444` coral | live and active, and also alarming — spectra, the API, alerts |
| `#3f4c4c` / `#77827f` | heading text / muted text |

Full palette, type scale, canvas geometry, motif index and renderer gotchas are in
`references/house-style.md`. Read it when you need a number; you do not need it all in
context to start.

## The two canvases

Copy the matching template from `assets/`:

- `figure-template.svg` — 960-wide docs figure: card, title, subtitle lines, body
  group, summary strip, the three arrowhead markers.
- `icon-template.svg` — 400×400 homepage icon: the shared ground shelf and body group.

## Layout: put the body in a group

Every shipped file wraps its content in `<g transform="translate(0 N)">`. This is worth
doing from the first line, because vertical balance is the single most common thing
the user asks you to change, and this makes "more room at the top", "pull the footer
closer" and "shift it all down a bit" one-number edits instead of thirty coordinate
edits that risk introducing inconsistencies.

In a figure, the summary strip deliberately sits *outside* that group: it is anchored
to the bottom of the card, not to the diagram. Changing the canvas height means moving
the divider, the verdict word and the caption together, and keeping the word and
caption centred in the band between the divider and the card's bottom edge.

## Connectors

This is where subtle errors hide, so the geometry is worth stating exactly.

Arrowheads are markers with `markerUnits="userSpaceOnUse"`, which holds the head at a
fixed size instead of scaling it with `stroke-width`. With `viewBox="0 0 14 14"` and
`refX="11"`, **the tip lands 3px beyond the path's end point**. Every end-gap
calculation has to allow for that, and forgetting it is what produces arrowheads that
appear to touch or bury themselves in the target.

For a horizontal connector between two elements, with a 16px gap at each end:

```
x1 = sourceRightEdge + 16
x2 = targetLeftEdge  - 16 - 3     ← the 3 is the marker overhang
```

Use the same gap on every connector in a figure. Inconsistent gaps are noticeable even
when no single arrow looks wrong, and "make the spacing consistent" is a request that
comes up reliably.

**Route orthogonally.** Horizontal and vertical segments joined by rounded 90° bends,
using a quadratic Bézier with a 10px radius:

```
M117 300 V336 Q117 346 127 346 H166
```

Diagonal connectors look casual next to flat geometry, and orthogonal routes are far
easier to keep clear of other elements. A connector must never cross or pass over
another element — if the direct route is blocked, route around it or move the
elements apart, and prefer moving elements, since a diagram that needs a connector to
dodge things is usually too tight.

**Dashed means planned, solid means it works today.** `stroke-dasharray="7 5"` on a
figure connector. Label a connector in its own colour, 10.5px/700, with an optional
10px/400 sub-label beneath.

Icons use a different idiom — a solid triangular head trailing round dots
(`stroke-dasharray="0.5 11"` with a round linecap). Do not mix the two within a file.

## Render, look, then show

You cannot review a diagram by reading its source. Coordinates that look right
routinely produce buried arrowheads, labels overlapping lines, and lopsided margins.

```bash
node .claude/skills/nomad-diagrams/scripts/preview.mjs docs/assets/NMR-data-solution.svg
node .claude/skills/nomad-diagrams/scripts/preview.mjs docs/assets/NMR-data-solution.svg \
  --zoom 700,90,180,150
```

`--zoom x,y,w,h[,scale]` takes a region in the SVG's own coordinates — the numbers you
read straight off the markup — and renders it at true resolution. Use it whenever you
are judging something small: an arrow's end gaps, a motif's detail, whether a label
clears a line. The script validates the XML first, because when a render fails the
stale PNG from the previous run stays on disk under the same name and it is easy to
review the old picture and conclude your change did nothing.

Then send the render with SendUserFile so the user can actually see it. A diagram
change described in prose is not reviewable.

## Check these before showing the user

The same handful of problems come back every time, and catching them yourself saves a
round trip:

- **No connector crosses or overlies another element.** Includes passing through a
  text label.
- **Gaps are equal at both ends of each arrow, and the same on every arrow.**
- **Arrowheads land in open space**, not on top of the thing they point at.
- **Vertical margins are balanced** — the gap above the content and below it should
  look deliberate, and the header should not crowd the first row of graphics.
- **Labels clear their graphics** and each other.
- **Depictions are physically plausible.** Real chemistry, real instrument shapes.
  This is a chemistry audience and they notice.
- **The figure and its landing-page counterpart still agree** if you touched a shared
  motif.

Do not chase text that looks slightly crowded *only in a render*: resvg has no system
fonts and falls back to monospace, so preview text is 20–30% wider than the real site.
Check whether a proportional font would clear it before moving anything.

## Editing an existing diagram

Most requests are edits, not new figures. Read the file first and work with its
existing structure — the body group, the shared `<defs>`, the established gaps —
rather than importing conventions from elsewhere.

When a request is vague ("the spacing looks off", "make it cleaner"), render it and
zoom in before asking. Usually you can see what they mean, and a specific proposal is
more useful than a question.

If you change a motif that appears in more than one file, change it everywhere in the
same pass and say so.

## Verification

The render is the verification. There is nothing to compile, no tests, and the dev
server is the user's to run — do not run or offer to run `yarn build`.

For a final check that a file is well-formed, `preview.mjs` already parses it; svgo at
`node_modules/.bin/svgo -q -i file.svg -o /dev/null` is a second opinion if you want
one. Never run svgo in optimising mode over these files — it strips the comments that
explain what each region is.
