# Yaksh OS 🚀

> **Receptionist → Agency Owner | Zero to ₹1 Crore in 365 Days**
> A personal operating system — not just a website.

**Live:** `https://[username].github.io/yaksh`

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Mission Command | `index.html` | Hero, countdown, stats, milestone wall, daily check-in |
| Agency Roadmap | `roadmap.html` | 12-month plan, income tracker, revenue calculator, KPI dashboard |
| 365 Blueprint | `blueprint.html` | 5-phase day-by-day plan, day tracker, floating daily rules |
| Ideas Vault | `content-ideas.html` | 60 searchable content ideas, filters, random roller |
| Script Vault | `scripts.html` | 30 full video scripts with hooks, camera & expression tips |
| CRM | `crm.html` → `crm-app/` | Full Outreach CRM Pro v4 embedded |
| Focus OS | `focus-os.html` → `focus-app/` | Pomodoro, habits, journal, goals, matrix |

## Structure

```
yaksh-website/
├── index.html              # Home — Mission Command
├── roadmap.html            # 12-Month Agency Roadmap
├── blueprint.html          # 365 Day Blueprint
├── content-ideas.html      # 60 Content Ideas Vault
├── scripts.html            # 30 Video Scripts
├── crm.html                # CRM wrapper
├── focus-os.html           # Focus OS wrapper
├── shared/
│   ├── design-system.css   # Fonts, colors, animations, components
│   ├── navbar.css          # Global navbar styles
│   ├── navbar.js           # Theme toggle, search, mobile menu
│   ├── loader.css          # Page loader styles
│   └── loader.js           # Page loader logic
├── crm-app/
│   └── OutreachCRM_Pro_v4_WORKING.html
└── focus-app/
    └── focus-os-v3.html
```

## Deploy to GitHub Pages

```bash
# 1. Create repo named 'yaksh' on GitHub
# 2. In this folder:
git init
git add .
git commit -m "🚀 Yaksh OS — Zero to 1 Crore"
git remote add origin https://github.com/[username]/yaksh.git
git branch -M main
git push -u origin main

# 3. GitHub → Settings → Pages → Source: main branch → root
# 4. Live at: https://[username].github.io/yaksh
```

## Tech Stack
- Pure HTML + Vanilla CSS + Vanilla JS
- No framework, no build step, no npm
- 100% GitHub Pages compatible
- All data persisted via `localStorage`

## Design System
- **Fonts:** Space Grotesk (display) · DM Sans (body) · DM Mono (code)
- **Colors:** Gold `#F5C842` · Orange `#FF8C42` · Green `#39D98A` · Blue `#4F8EF7` · Purple `#7C6AF7`
- **Theme:** Dark mode default, light mode toggle (persistent)
- **Aesthetic:** Bloomberg Terminal × Gen-Z hustle culture

---

*Built for Yaksh — 19 years old, Gurugram, on a public ₹1 Crore mission.*
