# i2c-lp-react

Modernized i2c landing pages app. Vite + React 18 + TypeScript + pnpm.

## Stack
- React 18
- TypeScript
- Vite 5
- pnpm
- Bulma
- Cloudflare Pages deploy support

## Local dev
```bash
pnpm install
pnpm dev
```

App starts on Vite dev server. Main routes:
- `/`
- `/services`
- `/about`

## Production build
```bash
pnpm build
pnpm preview
```

## Cloudflare Pages
This repo now includes Cloudflare Pages deploy scaffolding.

Local preview of built output:
```bash
pnpm cf:preview
```

Deploy from local machine:
```bash
pnpm cf:deploy
```

Expected Cloudflare Pages project name: `i2cw-com`

Current Pages URLs:
- `https://i2cw-com.pages.dev/`
- latest deploy: `https://000113d0.i2cw-com.pages.dev`

Custom domain target: `i2cw.com`
Custom domain binding still needs Cloudflare Dashboard because Wrangler CLI cannot manage Pages custom domains in current version.

Current repo default branch on origin: `master`

## Repo structure
- `src/components` reusable UI blocks
- `src/pages` route-level pages
- `src/data` structured content files named `data.*.ts`
- `static/images` public assets copied into build output
- `docs/HOWTO.md` operator notes for setup, GitHub, and Cloudflare

## GitHub repo
Target remote repo:
- `https://github.com/i2ccom/i2c-lp-react`

Authenticated GitHub account detected in tools:
- `atomixnmc`

## Legacy deploy
Old Surge scripts still present for compatibility, but Cloudflare Pages is now primary deploy target.
