# Next.js version of Akíndé Portfolio

This is a Next.js conversion of the static portfolio.

Run locally

```bash
cd next-app
npm install
npm run dev
```

The app runs on port 3001 by default (`http://localhost:3001`).

Notes
- Global CSS is in `public/styles.css` and loaded via a `<link>` in `pages/_app.js`.
- Client JS is `public/script.js` and is loaded after hydration.
