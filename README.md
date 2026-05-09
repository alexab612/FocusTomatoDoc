# focusTomato

A high-fidelity, static homepage clone inspired by 1Focus, built with Next.js and Tailwind CSS for GitHub Pages.

## Tech Stack

- Next.js App Router
- Tailwind CSS
- Static export via `next build`
- GitHub Pages deployment through GitHub Actions

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

The static site is exported to `out/`.

## GitHub Pages Deployment

The workflow in `.github/workflows/pages.yml` installs dependencies, builds the static export, uploads `out/`, and deploys it to GitHub Pages.

For project Pages, the production build enables a repository base path:

- `basePath: /<repo-name>`
- `assetPrefix: /<repo-name>`

This is controlled by the `GITHUB_PAGES=true` environment variable in the workflow and derived from `GITHUB_REPOSITORY`, so the exported site works even if the repository name changes. Local builds keep the base path empty so development works at `/`.

## Content Configuration

Homepage copy, navigation, ratings, reviews, feature cards, and footer links live in `data/home.ts`.

## Notes

- The site only implements the homepage.
- There are no SSR features, server actions, or API routes.
- Visuals use bundled public assets for the Mac screenshot, app icon, App Store badge, and rating stars.
