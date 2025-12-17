# Openza Organization Website

This is the source code for the Openza organization landing page, hosted at https://openza.github.io

## Technology Stack

- **Astro** - Static site generator with component-based architecture
- **Tailwind CSS** - Utility-first CSS framework
- **GitHub Actions** - Automatic deployment with pnpm
- **GitHub Pages** - Free hosting

## Project Structure

```
├── public/              # Static assets (icons, images)
│   ├── favicon.svg
│   ├── icon.svg
│   ├── icon-large.svg
│   └── logo.svg
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
├── astro.config.mjs     # Astro configuration
├── package.json
└── tsconfig.json
```

## Local Development

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm

### Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The development server runs at `http://localhost:4321`

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### How it works

1. Push changes to `main` branch
2. GitHub Actions workflow (`.github/workflows/deploy.yml`) triggers
3. Astro builds the site to `dist/` folder
4. Built files are deployed to GitHub Pages
5. Site is live at https://openza.github.io

### Manual deployment check

- Check the "Actions" tab to see deployment progress
- Deployment usually takes 1-2 minutes

## Customization

### Update Content

Edit the Astro components in `src/components/`:
- `Hero.astro` - Main hero section with headline
- `Features.astro` - Feature highlights
- `Projects.astro` - Project listings
- `About.astro` - About section
- `Header.astro` - Navigation header
- `Footer.astro` - Footer with links

### Update Styling

- Modify Tailwind classes directly in component files
- Add custom CSS in `Layout.astro` or component `<style>` tags
- Current color scheme uses charcoal/slate professional palette

### Add New Pages

Create new `.astro` files in `src/pages/`:
```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Page Title">
  <!-- Your content here -->
</Layout>
```

## Links Between Sites

This organization site links to project-specific documentation:
- Openza Desktop: https://openza.github.io/openza-desktop

Each project repository should have its own GitHub Pages enabled for detailed documentation.

## License

MIT License - See LICENSE file for details.
