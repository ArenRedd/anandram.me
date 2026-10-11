# CLAUDE.md

> This file stacks on top of the workspace root at `C:\Code\GitHub\`:
> - Root [`CLAUDE.md`](../../CLAUDE.md) — voice, rules, routing map, references, skills, slash commands, conventions.
> - Root [`MEMORY.md`](../../MEMORY.md) — live facts across repos.
> - Root [`STATUS.md`](../../STATUS.md) — live PR/CI/security dashboard.
> - [`.claude/resources/`](../../.claude/resources/README.md) — deep reference for collaboration, workflow, git, OSS, debugging, voice.
>
> Read those first. The guidance below only adds repo-specific context.

## Project

Portfolio website served directly at `https://anandram.me/` through GitHub Pages.

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

No test suite. Verify that `index.html` stays on the local homepage without a meta refresh or JavaScript navigation, that `404.html` only links back to the homepage, and that `CNAME` remains exactly `anandram.me`.

## Entry points

- `index.html` — portfolio homepage served directly at the domain root
- `404.html` — branded 404 page with a manual link home
- `redirect.js` — retained compatibility file with redirect behavior disabled

## Key files

- `redirect.js` — intentionally contains no navigation logic
- `CNAME` — custom domain binding; do not delete or rename it
- `sitemap.xml` — sitemap for the custom domain
- `style.css` — dark glassmorphism styling
- `CHANGELOG.md` — semver changelog

## Gotchas

- Keep homepage navigation local to `anandram.me`; do not add external redirect destinations.
- The CSP in `index.html` and `404.html` must allow any new external endpoint.
- This repository is deployed as-is from `main`; there is no build step.

## Repo-specific rules

- Update `CHANGELOG.md` for any user-visible change.
- Do not modify unrelated repositories.

## Build / Deploy

- Build: none
- Deploy: GitHub Pages publishes the `main` branch from the repository root
- Output: `https://anandram.me/`
