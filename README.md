# Akíndé Portfolio — NestJS + Docker

This repository serves a static portfolio site and exposes a small NestJS API.

Quick commands

- Build Docker image:

```bash
docker build -t akinde-portfolio .
```

- Run the built image:

```bash
docker run -p 3000:3000 akinde-portfolio
```

- Use docker-compose (recommended):

Production service:

```bash
docker-compose up --build -d web
```

Development service (live reload inside container):

```bash
docker-compose up --build dev
```

What you'll get
- Static site served at http://localhost:3000
- API endpoint at http://localhost:3000/api/hello

Notes
- If you want to run locally without Docker, install Node.js (includes `npm`) and run:

```bash
npm install
npm run start:dev
```

- The `dev` service mounts the project directory and runs `npm run start:dev` for fast iteration.

If you want, I can add a GitHub Actions workflow to build and publish the Docker image automatically.
# Akíndé Precious — QA Engineer Portfolio

A clean, dark-themed static portfolio website built with plain HTML, CSS, and JavaScript — no frameworks or build tools required.

---

## 📁 File Structure

```
portfolio/
├── index.html     ← Main HTML (all sections)
├── style.css      ← All styles (dark theme, responsive)
├── script.js      ← Interactions (typing, scroll, form, animations)
└── README.md      ← This file
```

---

## 🚀 Getting Started in VSCode

1. Open the `vscode/` folder in VSCode.
2. Install the **Live Server** extension (by Ritwick Dey) if you haven't already.
3. Right-click `index.html` → **Open with Live Server**.
4. The site opens at `http://127.0.0.1:5500`.

That's it — no `npm install`, no build step.

---

## 📸 Adding Your Photo

In `index.html`, find the `.avatar-inner` div and replace the initials span with an `<img>` tag:

```html
<!-- Before -->
<div class="avatar-inner">
  <span class="avatar-initials">AP</span>
</div>

<!-- After -->
<div class="avatar-inner">
  <img src="assets/photo.jpg" alt="Akíndé Precious" style="width:100%;height:100%;object-fit:cover" />
</div>
```

---

## 📬 Wiring Up the Contact Form

The form currently simulates a submission. To make it real, pick one option:

### Option A — Formspree (easiest, free)
1. Sign up at [formspree.io](https://formspree.io) and create a form.
2. In `index.html`, change the form tag:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
3. Remove the `onsubmit` attribute and the JS submission code in `script.js`.

### Option B — EmailJS (sends via Gmail)
1. Sign up at [emailjs.com](https://emailjs.com).
2. Follow their JS SDK guide and replace the `setTimeout` block in `handleContactSubmit()` with an `emailjs.send(...)` call.

---

## ✏️ Customizing Content

All personal data is written directly in `index.html`. Search for:
- `akindeprecious@gmail.com` — your email
- `+234 705 509 5306` — your phone
- `Lagos, Nigeria` — your location
- LinkedIn / GitHub / Twitter `href="#"` — update with real URLs
- Stats in the Hero section (`100+`, `1000+`, etc.)

---

## 🎨 Changing the Color Scheme

All colors use CSS variables at the top of `style.css`:

```css
:root {
  --gold:       #D4AF37;   /* primary accent */
  --gold-hover: #c49f2d;
  --gold-light: #f5d060;
  --bg:         #0A0A0A;   /* page background */
  --bg-alt:     #0D0D0D;   /* alternate section background */
  --card:       #111111;   /* card background */
}
```

Change `--gold` to any colour (e.g. `#00BFFF` for blue) and the entire site updates.

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| > 1024px   | Full 3-column grids |
| 768–1024px | 2-column grids |
| < 768px    | Single column, mobile nav |
| < 480px    | Compact padding, stacked stats |

---

## 🚢 Deploying

| Platform | How |
|----------|-----|
| **Vercel (recommended)** | Connect your GitHub repo at https://vercel.com/new and set the project root to `next-app`. Vercel will auto-build and deploy on every push to `main`. |
| **Netlify** | Drag & drop at app.netlify.com/drop |
| **GitHub Pages** | Push to a repo → Settings → Pages → Deploy from main |

---

_Built with ❤️ — zero dependencies, 100% yours._

---

Vercel CI via GitHub Actions

If you prefer deploying to Vercel via GitHub Actions (instead of Vercel's Git integration), the repo includes `.github/workflows/vercel-deploy.yml` which uses `amondnet/vercel-action`.

To enable it:

1. Create a Vercel token: https://vercel.com/account/tokens
2. In your GitHub repo, go to Settings → Secrets and variables → Actions and add three secrets:
  - `VERCEL_TOKEN` (the token from step 1)
  - `VERCEL_ORG_ID` (found in your Vercel project settings)
  - `VERCEL_PROJECT_ID` (found in your Vercel project settings)
3. Push to `main` — the workflow will run and deploy the `next-app` project to Vercel.

If you'd like, I can add a small check step in the workflow to run `npm test` before deploying.
