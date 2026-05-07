# Repository Guidelines

## Project Structure & Module Organization

This is a Vite React/TypeScript single-page site for Landhuis Installatietechniek. Application code lives in `src/`: `src/main.tsx` boots React, `src/App.tsx` contains the page structure, and `src/App.css` plus `src/index.css` hold styling. Source-local assets are in `src/assets/`; public, URL-addressable assets such as `logo.svg`, `logo.webp`, `foto-bus.webp`, `favicon.svg`, `icons.svg`, and `robots.txt` are in `public/`. Production output is generated in `dist/` and should not be edited by hand.

## Build, Test, and Development Commands

- `npm install`: install dependencies from `package-lock.json`.
- `npm run dev`: start the Vite development server with hot reload.
- `npm run build`: type-check with `tsc -b` and build the production bundle.
- `npm run lint`: run ESLint across the repository.
- `npm run preview`: serve the built `dist/` output locally for final checks.

Run `npm run build` before publishing changes that affect TypeScript, assets, or page behavior.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Keep JSX readable with two-space indentation, descriptive class names, and semantic HTML where possible. Components and exported React functions use `PascalCase`; variables, helpers, and CSS classes use clear lower-case or kebab-case names such as `hero-title` and `service-card`. Prefer existing CSS patterns in `App.css` before adding new layout conventions. Icons should come from `lucide-react` when available; keep inline SVGs limited to cases without a suitable library icon.

## Testing Guidelines

No automated test framework is currently configured. For changes, run `npm run lint` and `npm run build`, then visually inspect the page with `npm run dev` or `npm run preview`. When adding tests later, place them near the source they cover using names like `App.test.tsx`, and add a matching `npm test` script.

## Commit & Pull Request Guidelines

Recent history uses short, imperative commits with optional conventional prefixes, for example `feat: add Google Review badge to hero section` and `chore: ignore GEMINI.md`. Keep commit subjects focused on one change. Pull requests should include a concise summary, note visual or SEO-impacting changes, list verification commands run, and include screenshots for layout or asset updates.

## Security & Configuration Tips

Do not commit secrets, deployment credentials, or local environment files. Keep public business contact details in `App.tsx` consistent across phone, WhatsApp, email, address, and SEO text. When replacing images in `public/`, preserve stable filenames or update every reference that uses the public URL path.
