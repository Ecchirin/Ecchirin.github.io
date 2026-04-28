# Ecchirin.github.io

Personal portfolio site for Lim Zi Sheng. Vanilla HTML/CSS, no build step.

Live: https://Ecchirin.github.io

## Local development

Open `index.html` in a browser, or run `npx serve .` for a localhost server.

## Deploy

Push to `main`. GitHub Pages auto-serves from the root.

## OG image regeneration

Only needed if hero copy changes:

```bash
node scripts/generate-og.mjs
git add assets/og-image.png
git commit -m "chore: regenerate OG image"
```

## Source

Built from spec at `../career-ops/docs/superpowers/specs/2026-04-28-github-portfolio-design.md`.
