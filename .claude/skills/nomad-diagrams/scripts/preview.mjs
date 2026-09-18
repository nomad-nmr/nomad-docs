#!/usr/bin/env node
//
// preview.mjs — validate an SVG, render it, and render zoomed sub-regions of it.
//
// Rendering is the only honest way to review a diagram: coordinates that look right
// in the source routinely produce buried arrowheads, overlapping labels and lopsided
// margins. This script exists so that check is one command rather than a throwaway
// script rewritten from scratch every session.
//
// Usage:
//   node preview.mjs <svg> [--width 960] [--zoom x,y,w,h[,scale]]... [--out-dir DIR]
//
// Examples:
//   node preview.mjs docs/assets/NMR-data-solution.svg
//   node preview.mjs docs/assets/NMR-data-solution.svg --zoom 700,90,180,150
//   node preview.mjs static/img/notebook.svg --width 600 --zoom 238,240,110,100,8
//
// Zoom regions are given in the SVG's own user units — the numbers you read straight
// off the markup — not in output pixels. Zooming renders the whole document at
// `scale` and uses resvg's native crop, so the region comes out at true resolution.
//
// Do NOT be tempted to "optimise" this by rewriting the root viewBox to the region
// instead: resvg 2.6 panics (`Option::unwrap()` on a `None` value` in geom.rs`)
// whenever a path carrying a marker-end falls outside a reduced viewport, and every
// diagram here uses arrow markers. Cropping after rendering sidesteps that entirely.

import { execFileSync } from 'node:child_process'
import { mkdirSync, readFileSync } from 'node:fs'
import { basename, extname, join } from 'node:path'
import { tmpdir } from 'node:os'

function usage(msg) {
  if (msg) console.error(`error: ${msg}\n`)
  console.error(
    'usage: node preview.mjs <svg> [--width N] [--zoom x,y,w,h[,scale]]... [--out-dir DIR]\n' +
      '\n' +
      '  --width N               width in pixels of the full render (default 960)\n' +
      '  --zoom x,y,w,h[,scale]  crop to this region of the SVG user-unit coordinate\n' +
      '                          space, rendered at scale (default 6). Repeatable.\n' +
      '  --out-dir DIR           where PNGs are written (default a temp directory)'
  )
  process.exit(msg ? 1 : 0)
}

// --- arguments ---------------------------------------------------------------

const argv = process.argv.slice(2)
if (argv.length === 0 || argv.includes('--help') || argv.includes('-h')) usage()

let svgPath = null
let width = 960
let outDir = join(tmpdir(), 'nomad-diagrams-preview')
const zooms = []

for (let i = 0; i < argv.length; i++) {
  const arg = argv[i]
  if (arg === '--width') {
    width = Number(argv[++i])
    if (!Number.isFinite(width) || width <= 0) usage('--width needs a positive number')
  } else if (arg === '--out-dir') {
    outDir = argv[++i]
    if (!outDir) usage('--out-dir needs a path')
  } else if (arg === '--zoom') {
    const spec = argv[++i]
    if (!spec) usage('--zoom needs x,y,w,h[,scale]')
    const parts = spec.split(',').map(Number)
    if (parts.length < 4 || parts.length > 5 || parts.some((n) => !Number.isFinite(n))) {
      usage(`could not parse --zoom "${spec}" (expected x,y,w,h[,scale])`)
    }
    const [x, y, w, h, scale = 6] = parts
    if (w <= 0 || h <= 0 || scale <= 0) usage('--zoom width, height and scale must be positive')
    zooms.push({ x, y, w, h, scale })
  } else if (arg.startsWith('-')) {
    usage(`unknown option ${arg}`)
  } else if (svgPath === null) {
    svgPath = arg
  } else {
    usage(`unexpected extra argument ${arg}`)
  }
}

if (!svgPath) usage('no SVG path given')

// --- validate ----------------------------------------------------------------

// Catching a malformed document before rendering matters because the failure mode
// otherwise is silent: the render errors, a stale PNG from the previous run stays on
// disk, and you review the old picture. Python's parser reports the exact line and
// column. If python3 is missing we let resvg report the problem instead.
try {
  readFileSync(svgPath)
} catch (err) {
  console.error(`error: cannot read ${svgPath}: ${err.message}`)
  process.exit(1)
}

try {
  execFileSync('python3', ['-c', 'import sys,xml.dom.minidom as m; m.parse(sys.argv[1])', svgPath], {
    stdio: ['ignore', 'ignore', 'pipe']
  })
  console.log(`XML OK     ${svgPath}`)
} catch (err) {
  if (err.code === 'ENOENT') {
    console.log('XML        (python3 not found, skipping parse check)')
  } else {
    console.error(`XML FAILED ${svgPath}`)
    console.error((err.stderr?.toString() || '').trim() || err.message)
    process.exit(1)
  }
}

mkdirSync(outDir, { recursive: true })
const stem = basename(svgPath, extname(svgPath))

// --- rendering ---------------------------------------------------------------

function render(outputPath, extraArgs) {
  execFileSync(
    'npx',
    ['--yes', '@resvg/resvg-js-cli', '--background', '#ffffff', ...extraArgs, svgPath, outputPath],
    { stdio: ['ignore', 'ignore', 'pipe'] }
  )
}

const written = []

try {
  const fullOut = join(outDir, `${stem}.png`)
  render(fullOut, ['--fit-width', String(width)])
  written.push([fullOut, `full figure, ${width}px wide`])

  zooms.forEach(({ x, y, w, h, scale }, i) => {
    const zoomOut = join(outDir, `${stem}-zoom${i + 1}.png`)
    render(zoomOut, [
      '--fit-zoom', String(scale),
      // resvg's crop bounds are absolute pixel coordinates in the scaled render,
      // so a user-unit region maps across by simple multiplication.
      '--crop-left', String(Math.round(x * scale)),
      '--crop-top', String(Math.round(y * scale)),
      '--crop-right', String(Math.round((x + w) * scale)),
      '--crop-bottom', String(Math.round((y + h) * scale))
    ])
    written.push([zoomOut, `region ${x},${y} ${w}×${h} at ${scale}×`])
  })
} catch (err) {
  console.error('render FAILED')
  console.error((err.stderr?.toString() || '').trim() || err.message)
  process.exit(1)
}

for (const [path, note] of written) console.log(`rendered   ${path}  (${note})`)
