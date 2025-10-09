# My Portfolio

A modern portfolio website showcasing product design case studies.

## Quick Start

### Viewing the Portfolio
Open `index.html` in your browser to view the main portfolio page.

## Project Structure

```
myPortfolio/
├── index.html                          # Main portfolio page
├── projects/
│   ├── case-study-template.html        # Template for creating new case studies
│   ├── case-study-*.html               # Individual case study pages
│   └── *.md                            # Markdown notes (optional, for reference)
├── styles/
│   ├── theme.css                       # Theme variables
│   ├── common.css                      # Common styles
│   └── theme-override.css              # Theme overrides
└── package.json                        # Dependencies
```

## Creating a New Case Study

### Simple Workflow

1. **Copy the template:**
   ```bash
   cp projects/case-study-template.html projects/case-study-your-project.html
   ```

2. **Customize the HTML:**
   - Open `projects/case-study-your-project.html` in your editor
   - Replace `[Project Name]` with your project title
   - Fill in the metadata (role, timeline, team, platform)
   - Update all section content (Challenge, Approach, Solution, Impact, etc.)
   - Customize the challenge cards, metrics, takeaways

3. **Add to homepage:**
   - Open `index.html`
   - Add a new project card in the "Featured Work" section
   - Link to your new case study: `projects/case-study-your-project.html`

4. **Preview:**
   - Open your new case study HTML file in a browser
   - Make adjustments as needed

### Template Sections

The `case-study-template.html` includes these styled sections:

- **Introduction** - Hero section with project title, description, and metadata
- **Challenge** - Grid of challenge cards highlighting key problems
- **Approach** - Numbered phases with timeline visualization
- **Solution** - Design principles and key features
- **Impact** - Metrics grid and categorized results
- **Key Takeaways** - Styled takeaway cards
- **Conclusion** - Closing section with CTA buttons

Each section has professional styling, animations, and responsive design built-in.

## Optional: Keep Markdown Notes

You can keep `.md` files in the `projects/` folder as:
- Content drafts before creating HTML
- Reference notes for future updates
- Documentation of your design process

These markdown files are optional and won't be used to generate HTML.

## Available Commands

```bash
# Build Tailwind CSS (if making custom style changes)
npm run build:css
```

## Technologies

- **HTML/CSS** - Hand-crafted, semantic markup
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Theme System** - CSS variables for easy theming

## Tips

💡 Use `case-study-template.html` as your starting point for consistency
💡 Each case study is a standalone HTML file - full control over design
💡 Keep project cards on homepage updated when adding new case studies
💡 Markdown files in `projects/` are optional reference materials

## Example Workflow

**Creating a new case study:**
```bash
# 1. Copy the template
cp projects/case-study-template.html projects/case-study-my-project.html

# 2. Open and customize the HTML file
# Replace all placeholder text with your project content

# 3. Add a card to index.html
# Update the "Featured Work" section with a link to your new case study

# 4. Open in browser to preview
open projects/case-study-my-project.html
```

## Theme Customization

- **Switch themes:** See [THEME-SWITCHING-GUIDE.md](THEME-SWITCHING-GUIDE.md)
- **Styling guide:** See [STYLING-GUIDE.md](STYLING-GUIDE.md)

---

**Portfolio by Raymond Festa**
