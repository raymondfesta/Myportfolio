# Portfolio Styling System Guide

## Overview

Your portfolio now uses a centralized styling system that makes it easy to:
- **Change the entire site theme** in one place
- **Quickly revert** to previous designs
- **Maintain consistency** across all pages
- **Test different themes** without breaking anything

## Files Structure

```
myPortfolio/
├── styles/
│   ├── theme.css      # CSS variables & theme definitions
│   └── common.css     # Shared styles & components
├── index.html
└── projects/
    ├── case-study-template.html
    └── case-study-dataModelBuilder.html
```

## How to Change the Entire Site Theme

### Method 1: Edit CSS Variables (Recommended)

Open `styles/theme.css` and modify the color values in the `:root` section:

```css
:root {
    /* Change these to update your entire site */
    --color-primary: #3b82f6;        /* Your brand color */
    --color-bg-primary: #ffffff;     /* Main background */
    --color-text-primary: #0f172a;   /* Main text color */
    /* ... etc */
}
```

**Example: Change brand color from blue to purple**
```css
--color-primary: #a855f7;        /* purple-500 */
--color-primary-dark: #9333ea;   /* purple-600 */
```

### Method 2: Use Pre-built Themes

In `styles/theme.css`, we've included several pre-built themes. To switch themes:

1. **Find the theme section** you want (Web3, Minimal, Warm)
2. **Uncomment the theme** by removing `/*` and `*/`
3. **Comment out or remove** the current active theme

**Available Themes:**

#### Current Theme (Enterprise/Clean)
- Blue accent colors
- White/slate backgrounds
- Professional and clean

#### Web3/Crypto Theme
```css
/* Uncomment this section in theme.css */
:root {
    --color-primary: #00d4ff;           /* Cyber blue */
    --color-bg-primary: #0a0b0d;        /* Dark background */
    --color-text-primary: #ffffff;      /* White text */
    --font-sans: 'Space Grotesk', ...   /* Modern font */
}
```

#### Minimal Monochrome Theme
```css
/* Black & white, ultra minimal */
:root {
    --color-primary: #000000;
    --color-bg-primary: #ffffff;
    /* ... */
}
```

#### Warm/Creative Theme
```css
/* Warm amber/orange tones */
:root {
    --color-primary: #f59e0b;
    --color-bg-primary: #fffbeb;
    /* ... */
}
```

## How to Add These Styles to Your HTML Files

### Step 1: Add CSS Files to HTML

Add these two lines in the `<head>` section of each HTML file, **before** the Tailwind script:

```html
<head>
    <!-- ... other meta tags ... -->

    <!-- Portfolio Theme System -->
    <link rel="stylesheet" href="../styles/theme.css">
    <link rel="stylesheet" href="../styles/common.css">

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- ... -->
</head>
```

### Step 2: Use CSS Variables in Tailwind Config

Update your Tailwind config to reference the CSS variables:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                'primary-dark': 'var(--color-primary-dark)',
                'bg-primary': 'var(--color-bg-primary)',
                'bg-secondary': 'var(--color-bg-secondary)',
                'text-primary': 'var(--color-text-primary)',
                'text-secondary': 'var(--color-text-secondary)',
            }
        }
    }
}
```

## Quick Reference: CSS Variables

### Colors
```css
--color-primary              /* Brand/accent color */
--color-primary-dark         /* Darker brand color (hover states) */
--color-primary-light        /* Lighter brand color */

--color-bg-primary           /* Main background */
--color-bg-secondary         /* Alternate background */
--color-bg-tertiary          /* Third background option */

--color-text-primary         /* Main text */
--color-text-secondary       /* Secondary text */
--color-text-tertiary        /* Tertiary text */
--color-text-inverse         /* Inverse text (for dark backgrounds) */

--color-border-primary       /* Main border color */
--color-border-secondary     /* Secondary border */
--color-border-accent        /* Accent border */
```

### Typography
```css
--font-sans                  /* Main font family */
--font-mono                  /* Monospace font */

--text-xs to --text-7xl      /* Font sizes */
--font-normal to --font-bold /* Font weights */
```

### Spacing & Effects
```css
--spacing-xs to --spacing-3xl  /* Spacing scale */
--shadow-sm to --shadow-xl     /* Shadow levels */
--radius-sm to --radius-full   /* Border radius */
--transition-fast/base/slow    /* Transition speeds */
```

## How to Revert Changes

### Option 1: Git Reset
If you've committed your theme changes:
```bash
git checkout HEAD -- styles/theme.css
```

### Option 2: Swap Themes
Simply comment out the new theme and uncomment the original theme in `theme.css`.

### Option 3: Keep Backups
Before making major changes, copy `theme.css` to `theme.backup.css`:
```bash
cp styles/theme.css styles/theme.backup.css
```

## Testing a New Theme

1. **Duplicate theme.css**: `cp styles/theme.css styles/theme-experiment.css`
2. **Edit the experimental file**: Make your changes in `theme-experiment.css`
3. **Update HTML links**: Point to the experimental file
4. **Test thoroughly**: Check all pages
5. **Commit when satisfied**: Or revert by changing the link back

## Best Practices

### ✅ DO:
- Edit CSS variables in `theme.css` to change colors/fonts
- Use the pre-built themes as starting points
- Test changes across all pages before committing
- Keep backups before major style changes
- Document custom color choices

### ❌ DON'T:
- Edit Tailwind classes directly in HTML for theme colors
- Hardcode color values (#3b82f6) - use variables instead
- Make one-off style changes without adding to the system
- Delete the backup themes in `theme.css`

## Creating a Custom Theme

1. **Copy a theme section** in `theme.css`
2. **Rename it**: Add a comment like `/* MY CUSTOM THEME */`
3. **Edit the variables**: Change colors, fonts, etc.
4. **Activate it**: Uncomment your theme, comment out others
5. **Test**: Check all pages for consistency

## Common Tasks

### Change the Brand Color
```css
/* In theme.css */
--color-primary: #YOUR_COLOR;
--color-primary-dark: #DARKER_SHADE;
```

### Switch to Dark Mode
```css
/* In theme.css */
--color-bg-primary: #0a0b0d;
--color-bg-secondary: #13151a;
--color-text-primary: #ffffff;
--color-text-secondary: #9ca3af;
```

### Change the Font
```css
/* In theme.css */
--font-sans: 'Your Font', sans-serif;
```

Don't forget to add the font import in your HTML:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## Troubleshooting

**Q: My changes aren't showing up**
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check that CSS files are linked correctly in HTML
- Verify the CSS file path is correct

**Q: Some elements didn't change**
- Check if they're using hardcoded Tailwind classes
- Look for inline styles that override CSS variables
- Some elements may need to be updated manually

**Q: How do I know which theme is active?**
- Check `theme.css` - the uncommented `:root` section is active
- Look at the CSS variable values in browser DevTools

## Need Help?

- Check the CSS files for comments and examples
- Use browser DevTools to inspect CSS variables
- Refer to this guide for theme switching instructions
