# Ecchirin.github.io

Personal portfolio site for Lim Zi Sheng. Vanilla HTML/CSS, no build step.

**Live:** https://Ecchirin.github.io

## Structure

- `index.html` — single-page editorial scroll, all content
- `styles.css` — all styling, system-font typography, paper-cream palette
- `script.js` — IntersectionObserver section reveals (with `prefers-reduced-motion` fallback)
- `assets/` — favicon, OG template + generated OG image
- `scripts/generate-og.mjs` — one-off Playwright script to regenerate the OG image

## Local development

```
npx -y serve . -l 4173
```

Open `http://localhost:4173`.

## Deploy

Push to `main`. GitHub Pages auto-serves from the root.

## OG image regeneration

Only needed if hero copy changes. The script imports `playwright` as a bare specifier; this repo has no `package.json` (intentional — we keep zero runtime dependencies). To regenerate, you need `playwright` resolvable from somewhere:

Option 1 — run from a directory that has `playwright` installed (e.g., the sibling `career-ops` project):

```
cd ../career-ops
node ../Ecchirin.github.io/scripts/generate-og.mjs
```

Option 2 — install playwright temporarily here:

```
npm init -y
npm install --no-save playwright
node scripts/generate-og.mjs
rm -rf node_modules package.json package-lock.json
```

After regenerating:

```
git add assets/og-image.png
git commit -m "chore: regenerate OG image"
```

## Source

Built from spec at `../career-ops/docs/superpowers/specs/2026-04-28-github-portfolio-design.md` in the sibling career-ops project.
