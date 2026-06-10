# BTC Tax Consultant — Website

Landing page for PT Bintang Konsultama Prima built with Next.js 15, TypeScript, and CSS Modules.

## Tech Stack

| Tool | Purpose |
|---|---|
| **Next.js 15** | Framework (App Router, SSG) |
| **TypeScript** | Type safety |
| **CSS Modules** | Scoped styles, no runtime overhead |
| **Biome** | Linting + formatting (replaces ESLint + Prettier) |
| **pnpm** | Package manager |
| **OpenNext + Cloudflare Workers** | Deployment (edge CDN) |

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Lint + format
pnpm check

# Build for production
pnpm build
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/
    page.tsx          ← Landing page (composes all sections)
    layout.tsx        ← Root layout + metadata
    globals.css       ← CSS variables + resets
  components/
    Nav.tsx / .module.css
    Hero.tsx / .module.css
    Services.tsx / .module.css
    Consultants.tsx / .module.css
    Clients.tsx / .module.css
    Contact.tsx / .module.css
    Footer.tsx / .module.css
  lib/
    constants.ts      ← All site data (edit here)
```

## Customisation

All site content lives in `src/lib/constants.ts` — edit names, links, services,
and contact details there without touching component files.

## Deployment to Cloudflare Workers (via OpenNext)

```bash
# Install OpenNext Cloudflare adapter
pnpm add -D @opennextjs/cloudflare

# Build + deploy
pnpm build
npx opennextjs-cloudflare deploy
```

Requires a `wrangler.toml` in the project root — see the
[OpenNext Cloudflare docs](https://opennext.js.org/cloudflare) for setup.
