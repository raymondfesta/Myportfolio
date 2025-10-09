# 🟢 NVIDIA Theme - ACTIVE

## Theme Overview

Your portfolio is now styled with NVIDIA's signature aesthetic:

### Colors
- **Primary Accent**: NVIDIA Green (#76b900)
- **Background**: Pure Black (#000000) with dark gray accents
- **Text**: White on dark backgrounds
- **Style**: Sleek, powerful, tech-focused

### What Changed

#### Brand Colors
- ✅ Primary color: Blue → **NVIDIA Green** (#76b900)
- ✅ Dark green hover states (#5a8f00)
- ✅ Bright green accents (#8ed600)

#### Backgrounds
- ✅ Main background: White → **Pure Black** (#000000)
- ✅ Secondary backgrounds: Light gray → **Dark gray** (#0d0d0d)
- ✅ Cards and sections: Very dark gray (#1a1a1a)

#### Text & UI
- ✅ Text: Dark → **White/Light gray**
- ✅ Navigation: Light → **Dark with green accents**
- ✅ Buttons: Blue → **NVIDIA Green**
- ✅ Borders: Blue/Gray → **Green glow effects**
- ✅ Logo glow: Blue → **Green**

## View the Theme

1. Open `http://localhost:8080` in your browser
2. Navigate through:
   - Home page (index.html)
   - Data Model Builder case study
   - Template case study

## Features

### Dark Mode
- Pure black backgrounds for OLED displays
- Reduced eye strain
- Professional tech aesthetic

### NVIDIA Green Accents
- Buttons glow green on hover
- Logo animations in green
- Green borders and highlights
- Signature brand recognition

### High Contrast
- White text on black backgrounds
- Excellent readability
- Clear visual hierarchy

## How to Revert

### Option 1: Git
```bash
git checkout -- styles/theme.css styles/common.css
```

### Option 2: Manual
Open `styles/theme.css` and change back to original values:
```css
--color-primary: #3b82f6;        /* Back to blue */
--color-bg-primary: #ffffff;     /* Back to white */
--color-text-primary: #0f172a;   /* Back to dark text */
```

## Customize Further

Want to adjust the NVIDIA theme?

### Make Green Brighter
```css
--color-primary: #8ed600;  /* Lighter, more vibrant green */
```

### Add Gray Accents
```css
--color-bg-secondary: #1a1a1a;  /* Lighter dark gray */
```

### Soften Backgrounds
```css
--color-bg-primary: #0d0d0d;  /* Very dark gray instead of pure black */
```

## Perfect For

- 🎮 Gaming portfolios
- 💻 Tech/engineering roles
- 🚀 Performance-focused companies
- 🎯 Hardware/GPU companies (NVIDIA, AMD, etc.)
- ⚡ High-performance computing
- 🤖 AI/ML positions

## Files Modified

1. `styles/theme.css` - Color variables updated
2. `styles/common.css` - Navigation and logo glow updated

All HTML files automatically use the new theme!

---

**Theme Status**: ✅ ACTIVE
**Last Updated**: Just now
**Compatibility**: All pages
