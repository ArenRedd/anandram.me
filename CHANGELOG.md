# Changelog

## [2.3.0] - 2026-10-11

- Remove obsolete external hosting and redirect references from the project
- Document direct GitHub Pages hosting from the `main` branch repository root
- Keep the homepage, custom 404 page, stylesheet, assets, and `anandram.me` CNAME local to this repository

## [2.2.0] - 2026-10-11

- Configure the `anandram.me` root domain to serve the Anand Ram portfolio directly
- Disable automatic navigation in `redirect.js`, `index.html`, and `404.html`
- Replace stale Sagar Gupta and legacy domain metadata with Anand Ram branding
- Keep the dark glassmorphism design and `anandram.me` CNAME unchanged

## [2.1.1] - 2026-10-10

- Stop blocking /assets/ and /portfolio-react/assets/ in robots.txt so crawlers can load the JS and CSS that render the portfolio
- Sitemap: list Tic-Tac-Toe on the legacy host and refresh the portfolio lastmod

## [2.1.0] - 2026-03-23

- Move assets to assets/ folder, remove unnecessary config
- Improve SEO: meta description, title, JSON-LD structured data
- Add favicon.ico, apple-touch-icon.png, og-image.png
- Add meta-refresh no-JS fallback
- Expand sitemap from 2 to 10 URLs
- Remove .github/, .well-known/, SECURITY.md, renovate.json

## [2.0.0] - 2026-03-06

- Dark-themed glassmorphism redesign
- CSP meta tag, SimpleAnalytics, redirect.js

## [1.0.0] - 2023-07-14

- Initial GitHub Pages site with custom domain
