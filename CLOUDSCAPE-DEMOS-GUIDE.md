# Cloudscape Demo Components Guide

This guide explains how to use Cloudscape Design System demos in your portfolio.

## 📂 Location

All Cloudscape demo components are built separately in:
```
/Desktop/cloudscape-demo-builder/
```

And copied to your portfolio at:
```
/Desktop/myPortfolio/projects/demo-components/
```

## 🔄 Workflow: Creating a New Demo

### 1. Navigate to Builder Project
```bash
cd ~/Desktop/cloudscape-demo-builder
```

### 2. Create Your Demo Component
Create a new file in `src/demos/`, e.g., `YourDemo.jsx`:

```jsx
import React, { useState } from 'react';
import Button from '@cloudscape-design/components/button';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';

export default function YourDemo() {
  return (
    <Container
      header={<Header variant="h2">Your Demo Title</Header>}
    >
      {/* Your Cloudscape components here */}
      <Button variant="primary">Click me</Button>
    </Container>
  );
}
```

### 3. Update App.jsx
Replace the existing demo import:

```jsx
import '@cloudscape-design/global-styles/index.css';
import YourDemo from './demos/YourDemo';  // Change this
import AppLayout from '@cloudscape-design/components/app-layout';

function App() {
  return (
    <AppLayout
      navigationHide
      toolsHide
      content={
        <div style={{ padding: '20px' }}>
          <YourDemo />  {/* Use your new demo */}
        </div>
      }
    />
  );
}
```

### 4. Test in Development
```bash
npm run dev
```

Visit `http://localhost:5173` to preview your demo.

### 5. Build & Copy
```bash
npm run build
npm run copy:portfolio
```

The demo files will be copied to `myPortfolio/projects/demo-components/`

### 6. Update Copy Script (Optional)
If you want to copy to a specific project folder, edit:
`cloudscape-demo-builder/scripts/copy-to-portfolio.js`

```javascript
const DEMO_MAPPINGS = [
  {
    name: 'your-demo',
    source: 'dist/index.html',
    destination: '../myPortfolio/projects/yourProject/components/your-demo.html',
  },
];
```

## 📝 Embedding in Case Studies

### Basic Embed
In your case study HTML file (e.g., `case-study-yourProject.html`):

```html
<div class="bg-slate-50 p-8 border border-slate-950/[0.08]">
  <h4 class="text-xl font-semibold text-slate-950 mb-4">Interactive Demo</h4>
  <p class="text-base text-slate-600 leading-relaxed mb-4">
    Description of what this demo shows...
  </p>
  <iframe
    src="../demo-components/table-demo.html"
    class="w-full border-0 rounded-lg"
    style="height: 600px;"
    title="Demo Title">
  </iframe>
</div>
```

### With Custom Height
```html
<iframe
  src="../demo-components/your-demo.html"
  class="w-full border-0 rounded-lg"
  style="height: 800px;"
  title="Your Demo">
</iframe>
```

### Responsive Embed
```html
<div class="relative w-full" style="padding-bottom: 56.25%;">
  <iframe
    src="../demo-components/your-demo.html"
    class="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
    title="Your Demo">
  </iframe>
</div>
```

## 📋 Example: Embedding in Existing Structure

Looking at your existing `dataModelBuilder` case study, here's how to add a Cloudscape demo:

```html
<div class="bg-slate-50 p-8 border border-slate-950/[0.08]">
  <h4 class="text-xl font-semibold text-slate-950 mb-4 tracking-tight">
    4. Actual AWS Implementation
  </h4>
  <p class="text-base text-slate-600 leading-relaxed mb-4">
    This is the actual Cloudscape component as implemented in the AWS Console,
    showing the production-ready design with full AWS styling and interactions.
  </p>
  <iframe
    src="../demo-components/table-demo.html"
    class="w-full border-0 rounded-lg"
    style="height: 700px;"
    title="AWS Timestream Table Demo">
  </iframe>
</div>
```

## 🎨 Available Demo

Currently built demos:
- ✅ **table-demo.html** - Interactive data table with filtering and pagination

## 💡 Best Practices

### Demo Design
1. **Keep it focused**: Each demo should showcase one feature or interaction
2. **Match your narrative**: Demos should support your case study story
3. **Show before/after**: Consider building demos that show both old and new approaches
4. **Add context**: Always include descriptive text above the demo

### Technical
1. **Test iframe height**: Different demos need different heights
2. **Check responsive**: Test on mobile viewport sizes
3. **Verify paths**: Make sure iframe `src` paths are correct relative to case study location
4. **Copy assets**: Always copy the `assets/` folder along with HTML files

### Performance
1. **Lazy load**: For multiple demos on one page, consider lazy loading
2. **Optimize size**: Remove unused Cloudscape components from your demo
3. **Test loading**: Check demo load times, especially with slower connections

## 🔧 Troubleshooting

### Demo Not Showing
**Issue**: Iframe shows blank or error

**Solutions**:
- Check browser console for errors
- Verify `assets/` folder is in the same directory as HTML file
- Check iframe `src` path (relative to case study file)
- Try opening the demo HTML directly to test

### Styles Not Loading
**Issue**: Demo appears unstyled

**Solutions**:
- Ensure `assets/` folder was copied from `cloudscape-demo-builder/dist/`
- Check that CSS file paths in the HTML are correct
- Verify no 404 errors in browser Network tab

### Wrong Height
**Issue**: Demo is cut off or has too much whitespace

**Solutions**:
- Adjust iframe `height` style property
- Use browser DevTools to inspect actual content height
- Consider using fixed heights for predictable demos

## 📚 Quick Reference

### Commands
```bash
# Navigate to builder
cd ~/Desktop/cloudscape-demo-builder

# Install dependencies (first time only)
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Copy to portfolio
npm run copy:portfolio

# Or do both in one command
npm run build && npm run copy:portfolio
```

### File Paths
| File | Path |
|------|------|
| Builder project | `~/Desktop/cloudscape-demo-builder/` |
| Create demos in | `cloudscape-demo-builder/src/demos/` |
| Built output | `cloudscape-demo-builder/dist/` |
| Portfolio demos | `myPortfolio/projects/demo-components/` |
| Case studies | `myPortfolio/projects/[projectName]/` |

### Common Cloudscape Components
```jsx
import Button from '@cloudscape-design/components/button';
import Table from '@cloudscape-design/components/table';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import Input from '@cloudscape-design/components/input';
import Form from '@cloudscape-design/components/form';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Box from '@cloudscape-design/components/box';
```

## 🚀 Next Steps

1. **Build your first demo**: Start with a simple component
2. **Test embedding**: Add it to a case study with an iframe
3. **Iterate**: Create multiple demos showcasing different features
4. **Document**: Add descriptions above each demo explaining what it shows

---

For detailed documentation, see: `~/Desktop/cloudscape-demo-builder/README.md`
