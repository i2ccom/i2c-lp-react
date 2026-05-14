# HOWTO

## Local setup
```bash
pnpm install
pnpm dev
```

## Build
```bash
pnpm build
pnpm preview
```

## GitHub reconnect
Target repo:
- `https://github.com/i2ccom/i2c-lp-react`

Recommended commands if local folder is not yet bound to git:
```bash
git init -b master
git remote add origin https://github.com/i2ccom/i2c-lp-react.git
git fetch origin
```

If remote already exists:
```bash
git remote set-url origin https://github.com/i2ccom/i2c-lp-react.git
```

Authenticated GitHub tool account in this workspace:
- `atomixnmc`

## Cloudflare Pages
Project target:
- `i2cw-com`

Current Pages URL:
- `https://i2cw-com.pages.dev/`

Production domain target:
- `i2cw.com`

### One-time Cloudflare setup
1. Create Pages project `i2cw-com`.
2. Set production branch to `master`.
3. Add custom domain `i2cw.com`.
4. Add `www.i2cw.com` if needed and configure redirect policy.
5. Add GitHub repo connection or use API token deploy.

Current status:
- Pages project created
- deploy working
- custom domain still manual in Dashboard because Wrangler CLI cannot add Pages custom domains in current version

### Local deploy with Wrangler
```bash
pnpm cf:deploy
```

### Required auth
Need Cloudflare auth before deploy:
- `wrangler login`
or
- environment vars / CI secrets:
  - `CLOUDFLARE_API_TOKEN`
  - `CLOUDFLARE_ACCOUNT_ID`

### GitHub Actions secrets
Set in repo secrets before CI deploy works:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## Notes
- Static site output directory: `dist`
- Public assets source: `static`
- Main deploy config: `wrangler.toml`
- CI deploy workflow: `.github/workflows/deploy-cloudflare.yml`