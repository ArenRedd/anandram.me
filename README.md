# anandram.me

Custom-domain entry point for Anand Ram's portfolio.

## How It Works

```
anandram.me → instant redirect → https://portfolio-01-4zvq.vercel.app/
```

The root page uses three fallback layers:
1. **JavaScript** (`redirect.js`) for the instant redirect
2. **Meta refresh** for browsers with JavaScript disabled
3. **Manual link** if both automatic methods are blocked

The custom 404 page redirects to the portfolio after 5 seconds.

## SEO and Social

- Open Graph and Twitter Card metadata
- JSON-LD structured data for Anand Ram
- XML sitemap for the custom domain
- `robots.txt` with sitemap reference
- Content Security Policy via meta tags

## Files

```
index.html          Landing page with instant redirect
404.html            Branded 404 with delayed redirect
redirect.js         Shared redirect configuration
style.css           Dark glassmorphism fallback styling
sitemap.xml         XML sitemap
robots.txt          Crawler configuration
CNAME               Custom domain: anandram.me
assets/             Favicons and social preview image
```

## DNS Setup

Point the apex domain `anandram.me` to GitHub Pages using GitHub's published A records. If using `www`, point it to the GitHub Pages hostname configured for this repository.

## Deployment

Push to `main` — GitHub Pages deploys automatically. No build step.

## License

MIT
