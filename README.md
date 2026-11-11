# stefankanazir.dev

Personal site. Astro 7, Tailwind CSS 4, no client-side JavaScript.

## Develop

Requires Node 22.23+ (`.nvmrc` pins 24).

```sh
nvm use
npm install
npm run dev
```

## Scripts

| Command                | What it does                      |
| ---------------------- | --------------------------------- |
| `npm run dev`          | Dev server at `localhost:4321`    |
| `npm run build`        | Type-check, then build to `dist/` |
| `npm run preview`      | Serve the production build        |
| `npm run format`       | Format with Prettier              |
| `npm run format:check` | Check formatting without writing  |

## Structure

- `src/pages/index.astro`: the homepage and its copy
- `src/consts.ts`: site metadata, email and social links
- `src/layouts/BaseLayout.astro`: `<head>`, SEO tags, JSON-LD, fonts
- `src/styles/global.css`: Tailwind theme tokens and base styles (light and dark)
