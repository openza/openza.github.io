# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important: Open Source Project

This is a **public open source repository**. Never commit:
- API keys, tokens, or credentials
- `.env` files or environment secrets
- Private URLs or internal endpoints
- Any sensitive configuration

Always review changes before committing to ensure no secrets are leaked.

## Development Commands

```bash
pnpm install     # Install dependencies
pnpm dev         # Start dev server at http://localhost:4321
pnpm build       # Build for production
pnpm preview     # Preview production build
```

## Architecture

Single-page Astro site with section components. All page content is composed in `src/pages/index.astro` by importing and arranging components from `src/components/`.

Global styles use CSS variables defined in `src/styles/global.css`. The site uses a dark charcoal/slate color palette with cyan accent colors.

## Git Workflow (CRITICAL)

**Never work directly on main branch.** Main is protected; all changes require PRs.

1. Create feature branch: `git checkout -b feat/description` (or `fix/`, `docs/`, `style/`)
2. Make changes and commit using conventional commits (`feat:`, `fix:`, `docs:`, etc.)
3. Push and create PR: `gh pr create --title "type: description" --body "..."`

## Before Committing

1. Test locally with `pnpm dev`
2. Verify responsive design works
3. Ensure `pnpm build` succeeds

## Multi-Site Architecture

This is the **parent site** for the Openza ecosystem. Sub-project documentation sites are served as subpaths:

```
openza.github.io/           (this repo)
  ├── /tasks                (Tasks documentation - source: openza/tasks/website/)
  └── /flow                 (Flow documentation - source: openza/flow/website/)
```

### Dynamic Version Fetching

Version badges and download links are fetched from GitHub API at build time:

- **Source**: `src/lib/github.ts` fetches from `openza/tasks` and `openza/flow` releases
- **Fallback**: Shows `v0.1.0` if API fails
- **Rate limits**: GitHub allows 60 unauthenticated requests/hour (sufficient for builds)

### Content Sync

The parent site displays project information that must stay in sync with sub-projects:

| Content | Source | Update Method |
|---------|--------|---------------|
| Version badges | GitHub releases | Automatic at build time |
| Download links | GitHub release assets | Automatic at build time |
| Platform support | Manual | Update Hero, About, Footer when platforms change |
| Project names | Manual | Update Projects.astro, Footer.astro |

### Triggering Updates

The parent site rebuilds on push to main. After a sub-project release:

1. Push any change to this repo to trigger rebuild, OR
2. Manually trigger via GitHub Actions workflow_dispatch

### Adding a New Project

1. Add GitHub API call in `src/lib/github.ts`
2. Add project card in `src/components/Projects.astro`
3. Create download page at `src/pages/download/[project].astro`
4. Update footer links in `src/components/Footer.astro`
