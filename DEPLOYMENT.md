# Deployment

The dashboard deploys from:

`deploy/water.earthguardinnovations.org`

The folder is already linked to the Vercel project:

`water-earthguard-dashboard`

## Permanent Local Setup

This project now includes:

- `package.json` with a pinned Vercel CLI dev dependency
- `.npmrc` with a project-local npm cache
- `scripts/deploy-live.cmd` for Windows deployment
- `scripts/deploy-live.mjs` for npm-script deployment

## Deploy

From `C:\Users\Ben\OneDrive\Desktop\Water`, run:

```bat
scripts\deploy-live.cmd
```

Or:

```bat
npm.cmd run deploy:prod
```

## Requirements

The machine must be able to reach:

- `https://registry.npmjs.org/`
- `https://api.vercel.com/`

The current Codex environment could not connect to either host on port 443, so it cannot install Vercel or deploy online from here. Once outbound HTTPS is available, the deploy script will install the local Vercel CLI and deploy the linked project to production.

The deploy script runs a network preflight before installing or deploying. If outbound HTTPS is blocked, it stops with the exact host that cannot be reached.

If Vercel asks for authentication, run:

```bat
npx.cmd vercel login
```

Then rerun:

```bat
scripts\deploy-live.cmd
```

## Current Blocker Seen In Codex

The current environment cannot reach:

```txt
registry.npmjs.org:443
api.vercel.com:443
```

Because of that, the project is permanently configured but cannot install the Vercel CLI or deploy until firewall, VPN, proxy, antivirus, or network policy allows outbound HTTPS to those hosts.
