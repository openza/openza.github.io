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
