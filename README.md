# anuj-maharjan.com.np

Personal portfolio of [Anuj Maharjan](https://github.com/AnuzzMaharjan) — a minimalist, monospace, terminal-styled single page. Live at [anuj-maharjan.com.np](https://anuj-maharjan.com.np/).

## Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/)
- Handwritten CSS (no framework) — JetBrains Mono, self-hosted
- Deployed to GitHub Pages via GitHub Actions on every push to `main`

## Development

```sh
npm install
npm run dev      # dev server with HMR
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

Or with Docker: `docker compose up`.

## Editing content

All copy — journey, projects, skills, stack, contact links — lives in [`src/data.js`](src/data.js). Edit that file; the components under `src/components/` only handle layout.
