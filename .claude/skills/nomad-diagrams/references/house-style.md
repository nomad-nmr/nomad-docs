# NOMAD diagram house style — reference

Lookup detail for the `nomad-diagrams` skill. Read the section you need rather than
the whole file.

- [Palette](#palette)
- [Type scale](#type-scale)
- [Figure canvas geometry](#figure-canvas-geometry)
- [Icon canvas geometry](#icon-canvas-geometry)
- [Motif index](#motif-index)
- [Recurring idioms](#recurring-idioms)
- [Renderer gotchas](#renderer-gotchas)

---

## Palette

Six colours carry the whole system. What matters more than the hex codes is that each
one means something, so a new element gets its colour by reasoning about its role
rather than by picking whatever looks nice.

| Colour | Hex | Means |
| --- | --- | --- |
| Blue | `#4db3e0` | Structure and machinery — panels, device bodies, chrome, the platform itself. The default for "a thing". |
| Grey | `#d3dbdb` | Inert or passive matter — screens, clouds, instrument casings, the ground shelf. |
| Green | `#587c58` | Working today: control paths, completed states, positive verdicts. |
| Yellow | `#e5d83e` | Queued, selected or highlighted — the row a search hit, the sample about to run. |
| Coral | `#e46444` | Live and active, and also alarming: spectra, the API, alerts, negative verdicts. |
| Heading text | `#3f4c4c` | Titles and element names. |
| Muted text | `#77827f` | Subtitles, qualifiers, captions. |

Supporting tints, used only inside motifs: `#e2e8e8` and `#e9eded` (screen and panel
interiors), `#eef5f5` (platform fill), `#e6ebeb` (card and divider strokes), `#fdfefe`
(card fill and knockout text), `#c3cdcd` / `#cfd7d7` / `#c8d0d0` / `#d9e0e0` / `#b7c2c2`
(the magnet's greys), `#9fc4d8` / `#e0a08c` (tinted text placeholders), `#ccd4d4`
(document outline), `#9aa6a6` (a greyed-out verdict word).

Colours are hardcoded everywhere. Markdown images become a plain `<img>`, so no page
CSS reaches them, there is no dark-mode variant, and `currentColor` resolves to
nothing useful.

---

## Type scale

| Role | Size | Weight | Fill |
| --- | --- | --- | --- |
| Figure title | 22 | 600 | `#3f4c4c` |
| Figure subtitle | 12.5 | 400 | `#77827f` |
| Element name | 13.5 | 600 | `#3f4c4c` |
| Element qualifier | 11.5 | 400 | `#77827f` |
| Card label (inside a panel) | 10.5 | 600 | `#3f4c4c` |
| Connector label | 10.5 | 700 | the connector's own colour |
| Connector sub-label | 10 | 400 | the connector's own colour |
| Panel header (knockout on blue) | 12.5 | 600 | `#fdfefe` |
| Verdict word | 34 | 700, `letter-spacing="17"` | `#587c58` or `#9aa6a6` |
| Verdict caption | 12.5 | 400 | `#77827f` |

Every figure carries the same font stack on its root element:

```
font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif"
```

Icons carry no text at all — the homepage renders each feature's title and bullets
around the icon.

Use `&#183;` for the middle dot separating a label from its status ("push · planned"),
`&#8594;` for a flow arrow in prose, and `&#8212;` for an em dash.

---

## Figure canvas geometry

Taken from `docs/assets/NMR-data-solution.svg`, which is the reference implementation.

| Part | Geometry |
| --- | --- |
| Root | `width="960" height="H" viewBox="0 0 960 H"` |
| Card | `rect x="8" y="8" width="944" height="H-16" rx="18" fill="#fdfefe" stroke="#e6ebeb"` |
| Title baseline | y44, `text-anchor="middle"` at x480 |
| Subtitle baselines | y66 and y83 |
| Body group | `<g transform="translate(0 N)">` wrapping everything between the subtitle and the summary strip |
| Body content | roughly y112 to y430 |
| Summary divider | `line x1="70" y1="452" x2="890" y2="452" stroke="#e6ebeb" stroke-width="1.5"` |
| Verdict word baseline | y503 |
| Verdict caption baseline | y532 |

The summary strip is deliberately outside the body group, because it is anchored to
the bottom of the card rather than to the diagram. When you shift the body group, the
gap between the diagram and the divider changes but the strip stays put; when you
change the canvas height, move the divider, word and caption together and keep the
word and caption centred in the band between the divider and the card's bottom edge.

The platform panel used in the solution figure:

```
<rect x="30" y="112" width="574" height="182" rx="16" fill="#eef5f5" stroke="#4db3e0" stroke-width="2"/>
<path d="M30 128 a16 16 0 0 1 16 -16 h542 a16 16 0 0 1 16 16 v14 h-574 z" fill="#4db3e0"/>
<circle cx="46" cy="127" r="3" fill="#eef5f5"/>   <!-- ×3 at cx 46, 56, 66 -->
```

Cards inside it are `rect width="142" height="138" rx="10" fill="#ffffff" stroke="#d7dede"`
on a 200px pitch, with their labels on a shared baseline below.

---

## Icon canvas geometry

All five shipped icons (`monitor`, `submit`, `data-storage`, `notebook`, `nomad-hub`)
share this frame:

```
<svg id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     width="400" height="400" viewBox="0 0 400 400">
  <g id="svgg">
    <rect x="20" y="366" width="360" height="7" rx="3.5" fill="#d3dbdb"/>
    <g transform="translate(0 -8)">
      …
    </g>
  </g>
</svg>
```

The ground shelf is the family resemblance — five separately drawn subjects read as
one set because they all stand on the same line. The body group's translate runs
between −8 and −14 across the set.

`HomepageFeatures.js` imports each icon with
`require('../../static/img/name.svg').default`, so SVGR converts it to an inline React
component and applies `styles.featureSvg` to the root element. Keep the root
attributes as they are.

---

## Motif index

Defined in `../assets/motifs.svg`. Render that file to see them all at once:

```
node .claude/skills/nomad-diagrams/scripts/preview.mjs .claude/skills/nomad-diagrams/assets/motifs.svg
```

| id | What it is | Origin | Size | Lifted from |
| --- | --- | --- | --- | --- |
| `#magnet` | NMR spectrometer cryostat on its stand | bore axis at the shoulder | 60×110 | NMR-data-solution.svg |
| `#benzene` | m-xylene ring, Kekulé bonds, methyls, highlight | ring centre | 28×24 | NMR-data-solution.svg |
| `#triplet` | 1:2:1 NMR spectrum spikes | left end of baseline | 32×22 | nomad-hub.svg |
| `#cylinder` | data store drum with a highlighted seam | centre of top ellipse | 60×74 | NMR-data-solution.svg |
| `#cloud` | hosted repository cloud with blue platform edge | centre of main puff | 126×82 | NMR-data-solution.svg |
| `#rack` | a local NOMAD server | top-left | 62×64 | nomad-hub.svg |
| `#drive` | shared network drive, three bays | top-left | 80×94 | NMR-data-problem.svg |
| `#monitor` | desktop PC | top-left | 98×81 | NMR-data-problem.svg |
| `#document` | flattened .docx/.pdf with folded corner | top-left | 142×148 | NMR-data-problem.svg |
| `#robot` | AI agent / script client | top-left of head | 100×76 | NMR-data-solution.svg |
| `#api-port` | REST API plug, sits flush on a panel wall | top-left | 40×60 | NMR-data-solution.svg |
| `#magnifier` | search | lens centre | 40×40 | NMR-data-solution.svg |
| `#magnifier-struck` | search, struck through: cannot be searched | lens centre | 40×40 | NMR-data-problem.svg |
| `#padlock` | access control | top-centre of body | 15×18 | NMR-data-solution.svg |
| `#tube-rack` | NMR tubes in an autosampler rack | top-left | 64×42 | NMR-data-solution.svg |
| `#flow-arrow` | solid head trailing round dots, points up | the tip | 20×77 | all five icons |
| `#tick` | positive verdict glyph | path start | 22×18 | NMR-data-solution.svg |
| `#cross` | negative verdict glyph | path start | 18×18 | NMR-data-problem.svg |

Plus the three arrowhead markers `ah-blue`, `ah-green`, `ah-red`.

An SVG cannot reference another file's `<defs>`, so copy the entries you use into the
file you are building. Copy the markup rather than `<use>`-ing it whenever you need to
recolour part of a motif — `<use>` cannot reach inside a referenced group.

---

## Recurring idioms

**UI chrome.** Any screen or panel is built the same way: an outer rounded rect in
`#4db3e0`, an inner rect in `#d3dbdb` or `#e2e8e8` for the display area, an optional
title bar strip, then rows of small rounded rects standing in for text. Placeholder
rects are always `rx` = half their height, which makes them read as pill-shaped lines
rather than blocks. Widths should vary between rows; uniform rows look like a table,
varied ones look like prose.

**Status semantics.** A row or item's state is carried by a small circle or a pill on
its left: `#587c58` done, `#e5d83e` queued or selected, `#e46444` running or failed.
The same three colours drive the tube caps, the queue rows, the storage seams and the
dashboard pills.

**Spectra.** Always drawn as sharp triangular spikes on a flat baseline with
`stroke-linecap="round" stroke-linejoin="round"`, in `#e46444`. The house shape is a
1:2:1 triplet — narrow side peaks with a middle peak about twice their height. Stroke
weight is 2 at figure scale, 2.5 at icon scale.

**Molecules.** Pointy-top hexagon with three inner Kekulé bonds on alternating edges.
A yellow highlight ellipse on one vertex means "this is the assignment NMRium is
showing". Do not draw a plain hexagon with dots at the vertices — that was the earlier
style and it was replaced for looking unlike real chemistry.

**Dotted flow arrows.** The icons use a distinctive trail: a solid triangular head
plus a line with `stroke-dasharray="0.5 11" stroke-linecap="round"`, which renders as
round dots rather than dashes. Figures use marker arrowheads instead; do not mix the
two idioms within one file.

**Figure cards mirror icons.** The three cards inside the solution figure's platform
panel are miniatures of the corresponding landing-page icons — the tube rack, the
storage drum, the notebook window. If you redesign a motif in one place, change it in
the other, or the two drift apart. That drift is what forced a reconciliation pass in
the past.

---

## Renderer gotchas

**No system fonts.** resvg here has no fonts installed and falls back to monospace, so
preview text renders roughly 20–30% wider than it will on the real site. Text that
looks slightly crowded in a preview is usually fine in the browser. Never fix a
crowding problem you have only seen in a render — check whether the real proportional
font would clear it first.

**Markers panic on a reduced viewBox.** resvg 2.6 aborts with
`called Option::unwrap() on a None value` in `geom.rs` whenever a path carrying a
`marker-end` falls outside a shrunken viewport. This rules out the obvious way of
zooming into a region — rewriting the root `viewBox` — for any diagram with arrows,
which is all of them. `preview.mjs` therefore renders the whole document at scale and
uses resvg's native `--crop-*` flags instead. Do not "simplify" it back.

**Validate before trusting a render.** If the render fails, a stale PNG from the
previous run stays on disk under the same name, and it is easy to review the old
picture and think the change did nothing. `preview.mjs` parses the XML first and stops
on failure for exactly this reason.

**svgo is available** at `node_modules/.bin/svgo` if you want a second opinion on
whether a file parses: `node_modules/.bin/svgo -q -i file.svg -o /dev/null`. Do not run
it in optimising mode over these files — it would strip the comments that explain
what each region is.
