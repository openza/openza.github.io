# Openza Organization Site - Claude Code Instructions

## Git Workflow Rules

### CRITICAL: Never Work Directly on Main Branch

**ALWAYS follow this workflow:**

1. **Check current branch** before starting any work:
   ```bash
   git branch --show-current
   ```

2. **If on main branch, STOP and create a feature branch:**
   ```bash
   git checkout -b feat/descriptive-name
   # OR
   git checkout -b fix/descriptive-name
   ```

3. **Never commit directly to main:**
   - Main branch is protected
   - All changes MUST go through Pull Requests
   - This ensures code review and quality control

4. **Branch naming conventions:**
   - `feat/` - New features (e.g., `feat/add-contact-form`)
   - `fix/` - Bug fixes (e.g., `fix/broken-navigation`)
   - `docs/` - Documentation updates (e.g., `docs/update-readme`)
   - `refactor/` - Code refactoring (e.g., `refactor/simplify-components`)
   - `style/` - Visual/styling changes (e.g., `style/update-colors`)

### Complete Git Workflow

**Step 1: Start new work**
```bash
# Ensure you're on main and it's up to date
git checkout main
git pull origin main

# Create new feature branch
git checkout -b feat/your-feature-name
```

**Step 2: Make changes and commit**
```bash
# Make your code changes...

# Stage changes
git add <files>

# Commit with descriptive message
git commit -m "feat: Add descriptive commit message"
```

**Step 3: Push and create PR**
```bash
# Push branch to remote
git push -u origin feat/your-feature-name

# Create pull request
gh pr create --title "feat: Your Feature Title" --body "Description of changes"
```

**Step 4: After PR is merged**
```bash
# Switch back to main
git checkout main

# Pull latest changes
git pull origin main

# Delete local feature branch
git branch -d feat/your-feature-name
```

## Commit Message Guidelines

Follow conventional commits format:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

**Examples:**
```
feat: Add testimonials section to landing page
fix: Correct header alignment on mobile
docs: Update README with Astro setup instructions
style: Update color scheme to professional charcoal palette
```

## Pull Request Guidelines

**Every PR should include:**

1. **Clear title** using conventional commit format
2. **Summary section** explaining what and why
3. **Changes section** listing specific modifications
4. **Testing checklist** showing what was verified
5. **Screenshots/previews** for visual changes

**PR Template:**
```markdown
## Summary
Brief description of changes and motivation

## Changes
- List specific changes
- One per line
- Be clear and concise

## Testing
- [ ] Tested locally with `pnpm dev`
- [ ] Verified on different screen sizes (if UI change)
- [ ] Build succeeds with `pnpm build`
- [ ] No console errors

## Screenshots
(If applicable)
```

## Project-Specific Guidelines

### Technology Stack
- **Astro** - Static site generator with component-based architecture
- **Tailwind CSS** - Utility-first styling
- **SVG icons** - Brand assets in `public/` directory
- **GitHub Pages** - Hosting via GitHub Actions

### File Organization
```
├── public/              # Static assets (icons, images)
├── src/
│   ├── components/      # Reusable Astro components
│   │   ├── About.astro
│   │   ├── Features.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   └── Projects.astro
│   ├── layouts/         # Page layouts
│   │   └── Layout.astro
│   └── pages/           # Route pages
│       └── index.astro
├── ICON-README.md       # Icon documentation
└── README.md            # Project documentation
```

### Code Style
- Use semantic HTML in Astro components
- Keep CSS minimal (prefer Tailwind utilities)
- Professional, clean design aesthetic
- Charcoal/slate color palette for branding
- Ensure responsive design for all screen sizes

### Before Committing
1. Run `pnpm dev` and test the site locally
2. Check responsive design (resize browser window)
3. Verify all links work
4. Run `pnpm build` to ensure build succeeds
5. Check for no console errors

## Common Tasks

### Adding a new section to the landing page
```bash
git checkout main
git pull origin main
git checkout -b feat/add-testimonials-section

# Create new component: src/components/Testimonials.astro
# Import and add to src/pages/index.astro

git add src/components/Testimonials.astro src/pages/index.astro
git commit -m "feat: Add testimonials section to landing page"
git push -u origin feat/add-testimonials-section
gh pr create --title "feat: Add testimonials section" --body "..."
```

### Updating icons or brand assets
```bash
git checkout main
git pull origin main
git checkout -b style/update-favicon

# Update icon files in public/

git add public/
git commit -m "style: Update favicon design"
git push -u origin style/update-favicon
gh pr create --title "style: Update favicon design" --body "..."
```

### Fixing bugs
```bash
git checkout main
git pull origin main
git checkout -b fix/mobile-menu-broken

# Fix the issue in relevant .astro files

git add src/components/Header.astro
git commit -m "fix: Resolve mobile menu not opening on tap"
git push -u origin fix/mobile-menu-broken
gh pr create --title "fix: Resolve mobile menu issue" --body "..."
```

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server (http://localhost:4321)
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Emergency Situations

If you accidentally commit to main:

```bash
# DON'T PANIC! Main is protected, you can't push directly

# Method 1: Move commits to a new branch
git branch feat/accidental-commits
git reset --hard origin/main
git checkout feat/accidental-commits
# Now create PR as normal

# Method 2: Reset and start over
git reset --hard origin/main
git checkout -b feat/your-feature
# Redo your changes
```

## Reminders

- Always create a feature branch
- Never work on main directly
- Write clear commit messages
- Create descriptive PRs
- Test with `pnpm dev` before committing
- Run `pnpm build` to verify build succeeds
- Pull latest main before creating new branches
- Never force push to main (it's blocked anyway)
- Never skip the PR process

## Questions?

If Claude Code suggests working directly on main branch, remind it to:
1. Check current branch first
2. Create a feature branch if on main
3. Follow the PR workflow

**Main branch is sacred - protect it by always working on feature branches!**
