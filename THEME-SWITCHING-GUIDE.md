# Quick Theme Switching Guide

## ✅ Setup Complete!

Your portfolio now has a centralized theme system. All HTML files have been updated to use:
- `styles/theme.css` - CSS variables for colors, fonts, spacing
- `styles/common.css` - Shared components and animations

## 🎨 How to Change Themes (2 Easy Ways)

### Method 1: Quick Theme Switch (Easiest)

Open `styles/theme.css` and **uncomment** one of the pre-built themes:

#### Web3/Crypto Theme
Find this section around line 130 and remove the `/*` and `*/`:

```css
/* Remove these comment markers ↓ */
/*
:root {
    --color-primary: #00d4ff;
    --color-bg-primary: #0a0b0d;
    --color-text-primary: #ffffff;
    ...
}
*/
```

**Result**: Dark mode with neon cyber blue accents

#### Minimal Monochrome Theme
```css
/* Uncomment this section */
/*
:root {
    --color-primary: #000000;
    --color-bg-primary: #ffffff;
    ...
}
*/
```

**Result**: Pure black and white design

#### Warm/Creative Theme
```css
/* Uncomment this section */
/*
:root {
    --color-primary: #f59e0b;
    --color-bg-primary: #fffbeb;
    ...
}
*/
```

**Result**: Warm amber/orange tones

### Method 2: Custom Colors (More Control)

Edit the main `:root` section at the top of `styles/theme.css`:

```css
:root {
    /* Change any of these values */
    --color-primary: #3b82f6;        /* ← Your brand color */
    --color-bg-primary: #ffffff;     /* ← Page background */
    --color-text-primary: #0f172a;   /* ← Main text color */
    ...
}
```

**Example**: Change blue to purple:
```css
--color-primary: #a855f7;
--color-primary-dark: #9333ea;
```

## 🔄 How to Revert Changes

### If you made changes in theme.css:

**Option 1 - Git**
```bash
git checkout -- styles/theme.css
```

**Option 2 - Manual**
Re-comment the theme you uncommented (add `/*` and `*/` back)

### If you want the original clean theme:
Make sure only the first `:root` section (lines 10-55) is uncommented, and all other theme sections have `/*` and `*/` around them.

## 🧪 Testing Themes

1. Open `http://localhost:8080` in your browser
2. Edit `styles/theme.css`
3. Save the file
4. Refresh browser (Cmd+Shift+R / Ctrl+Shift+R)
5. See changes instantly!

## 📋 What Changed in Your HTML Files

All three HTML files now include:

```html
<!-- Portfolio Theme System -->
<link rel="stylesheet" href="styles/theme.css">      <!-- or ../styles/ for project pages -->
<link rel="stylesheet" href="styles/common.css">
```

And Tailwind configs now support theme variables:
```javascript
colors: {
    'theme-primary': 'var(--color-primary)',
    'theme-bg-primary': 'var(--color-bg-primary)',
    // ... etc
}
```

## 🎯 Quick Examples

### Change to Dark Mode Right Now

1. Open `styles/theme.css`
2. Find the "WEB3/CRYPTO THEME" section (around line 130)
3. Remove `/*` from line before `:root {`
4. Remove `*/` from the line after the closing `}`
5. Save file
6. Refresh browser
7. Boom! Dark theme with cyber accents

### Go Back to Clean Theme

1. Add `/*` and `*/` back around the Web3 theme section
2. Save
3. Refresh
4. Back to clean enterprise design

## 💡 Pro Tips

- **Test first**: Make changes on a separate git branch
- **Keep backups**: Copy `theme.css` before major changes
- **Check all pages**: Test index.html AND project pages
- **Use git**: Commit working themes so you can switch between them easily

## 🚀 Future Theme Changes

Next time you want to change the site's visual style:
1. Just edit `styles/theme.css`
2. All pages update automatically
3. Easy to revert with git or by re-commenting sections

No more hunting through multiple HTML files! 🎉
