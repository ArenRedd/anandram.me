# anandram.me

Portfolio website served directly from GitHub Pages at [https://anandram.me/](https://anandram.me/).

## How It Works

The site is served directly from this repository's `main` branch and repository root:

```
GitHub Pages → anandram.me/
```

There is no external redirect. The homepage stays on `anandram.me`, and the custom 404 page provides a link back to the homepage without automatic navigation.

## SEO and Social

- Open Graph and Twitter Card metadata
- JSON-LD structured data for Anand Ram
- XML sitemap for the custom domain
- `robots.txt` with sitemap reference
- Content Security Policy via meta tags

## Files

```
index.html          Portfolio homepage served at the domain root
404.html            Branded 404 page with a link back home
redirect.js         Retained compatibility file with redirect behavior disabled
style.css           Dark glassmorphism styling
sitemap.xml         XML sitemap
robots.txt          Crawler configuration
CNAME               Custom domain: anandram.me
assets/             Favicons and social preview image
```

## DNS Setup

Point the apex domain `anandram.me` to GitHub Pages using GitHub's published A records. If using `www`, point it to the GitHub Pages hostname configured for this repository.

## Deployment

GitHub Pages deploys the `main` branch from the repository root. Push to `main` to publish changes. No build step is required.

## License

MIT
