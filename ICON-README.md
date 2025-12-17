# Openza Icon & Logo Files

## Final Design Choice
**Quick Action Lightning - Charcoal + Slate**

### Color Palette
- **Primary (Outer Circle)**: `#1e293b` (Charcoal)
- **Secondary (Inner Circle)**: `#475569` (Slate)
- **Accent (Rings & Lightning)**: `#ffffff` (White)

### Design Rationale
- **Lightning bolt**: Represents speed, efficiency, and quick task completion
- **Concentric circles**: Creates depth and visual hierarchy
- **Professional colors**: Subdued charcoal and slate convey sophistication and reliability
- **Minimal design**: Scales perfectly from 16px (favicon) to 512px (app icon)

## Files

All icon files are located in the `public/` directory:

| File | Size | Purpose |
|------|------|---------|
| `favicon.svg` | 32x32 | Browser tab icon, bookmarks |
| `icon.svg` | 48x48 | Standard app icon for docs, GitHub |
| `icon-large.svg` | 512x512 | High-resolution for app stores, promotional materials |
| `logo.svg` | 200x48 | Full logo with icon + "Openza" text |

## Usage in Astro

The favicon is configured in `src/layouts/Layout.astro`:

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

The logo is used in `src/components/Header.astro` for the site header.

## Brand Verification

- No trademark conflicts found
- Charcoal + Slate lightning combination is unique
- No major apps use this specific design

## Converting to Other Formats

### To PNG (using Inkscape or ImageMagick):
```bash
# Convert to PNG at different sizes
inkscape public/icon.svg -w 512 -h 512 -o icon-512.png
inkscape public/icon.svg -w 256 -h 256 -o icon-256.png
inkscape public/icon.svg -w 128 -h 128 -o icon-128.png
inkscape public/icon.svg -w 64 -h 64 -o icon-64.png
inkscape public/icon.svg -w 32 -h 32 -o icon-32.png
inkscape public/icon.svg -w 16 -h 16 -o icon-16.png
```

### To ICO (using ImageMagick):
```bash
# Create multi-size ICO file
convert icon-16.png icon-32.png favicon.ico
```

## Design Philosophy

The Openza icon follows these principles:
1. **Scalability**: Works at all sizes from 16px to 512px
2. **Simplicity**: Clean, minimal design without unnecessary details
3. **Professionalism**: Subdued colors convey trust and sophistication
4. **Uniqueness**: Lightning bolt in charcoal/slate is distinctive in the task management space
5. **Versatility**: Dual-color for large displays, monochrome fallback for small sizes
6. **Accessibility**: High contrast ensures visibility for all users

## License

All icon files are part of the Openza project and follow the project's MIT License.
