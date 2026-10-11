# CLAUDE.md

> This file stacks on top of the workspace root at `C:\Code\GitHub\`:
> - Root [`CLAUDE.md`](../../CLAUDE.md) — voice, rules, routing map, references, skills, slash commands, conventions.
> - Root [`MEMORY.md`](../../MEMORY.md) — live facts across repos.
> - Root [`STATUS.md`](../../STATUS.md) — live PR/CI/security dashboard.
> - [`.claude/resources/`](../../.claude/resources/README.md) — deep reference for collaboration, workflow, git, OSS, debugging, voice.
>
> Read those first. The guidance below only adds repo-specific context.

## Project

Custom-domain entry point for Anand Ram's portfolio. `https://anandram.me/` redirects to the deployed portfolio at `https://portfolio-01-4zvq.vercel.app/`.

## Stack

- **Language**: Plain HTML / CSS / vanilla JS
- **Framework**: none — static files only
- **Database**: none
- **Package manager**: none
- **Deploy target**: GitHub Pages

## Run

```
python -m http.server 8000
```

Open `http://localhost:8000`.

## Test

No test suite. Verify that `index.html` redirects immediately and `404.html` redirects after 5 seconds. Confirm that `CNAME` remains exactly `anandram.me`.

## Entry points

- `index.html` — landing page with instant JS redirect, meta-refresh fallback, and manual link
- `404.html` — branded 404 page with a 5-second redirect
- `redirect.js` — shared redirect logic driven by the `<html data-redirect>` attribute

## Key files

- `redirect.js` — `PORTFOLIO_URL` is the redirect destination source of truth
- `CNAME` — custom domain binding; do not delete or rename it
- `sitemap.xml` — sitemap for the custom domain
- `style.css` — dark glassmorphism fallback styling
- `CHANGELOG.md` — semver changelog

## Gotchas

- The redirect destination is duplicated in the meta-refresh tags and manual links. If the portfolio moves, update all of them and `redirect.js`.
- The CSP in `index.html` and `404.html` must allow any new external endpoint.
- This repository is deployed as-is from `main`; there is no build step.

## Repo-specific rules

- Update `CHANGELOG.md` for any user-visible change.
- Do not modify unrelated repositories.

## Build / Deploy

- Build: none
- Deploy: push to `main`; GitHub Pages publishes automatically
- Output: `https://anandram.me/`
