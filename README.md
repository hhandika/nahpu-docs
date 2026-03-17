# NAHPU Docs

This serves documentation, guides, and project information for [NAHPU](https://nahpu.app).

## Project details

- Purpose: host documentation and informational pages for the NAHPU Digital Catalog.
- Tech stack: Astro (frontend static site generator).
- Main language: TypeScript / JavaScript (Astro components), Markdown for docs.

## Prerequisites

- Node.js >= 18 (Astro 5+ works best with recent Node versions).  
- Yarn (project uses Yarn as the package manager per `package.json`). Using npm is possible but the repo was bootstrapped with Yarn.

If you need to install Yarn you can follow the official guide (or use npm: `npm install -g yarn`).

## Quick start

Install dependencies:

```fish
yarn install
```

Run the development server (hot reload):

```fish
yarn dev
```

Build the site for production:

```fish
yarn build
```

Preview the built site locally:

```fish
yarn preview
```

These scripts map to the entries in `package.json`:

- `dev` -> `astro dev`
- `build` -> `astro build`
- `preview` -> `astro preview`

## Project structure (important paths)

- `src/pages/` - site pages and routes
- `src/layouts/` - page layout components (e.g. `Layout.astro`)
- `src/docs/` - Markdown documentation used by the site
- `src/components/` - reusable UI components
- `public/` - static assets (images, favicon, etc.)

## Contributing

See the documentation in `src/docs/contributing/` for contribution guidance, code & doc contribution workflows, and developer tooling.

If you'd like to propose changes, open an issue or submit a pull request on the `main` branch.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Maintainers / Contact

NAHPU Digital Catalog team

--
Notes and assumptions:

- Assumed Node >= 18 to work well with Astro 5.x. If you need a different Node version, let me know and I can add an `.nvmrc` or update the README.
