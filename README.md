# under-armour-textiles

Envision Partnership Overview — a 10-slide presentation deck built as a static site, ready for Vercel deployment.

## Project Structure

```
├── index.html          # Main presentation (10-slide deck)
├── css/styles.css      # All presentation styles
├── js/deck.js          # Slide navigation logic
├── assets/             # Images (e.g. textile-cutting.jpg)
├── vercel.json         # Vercel deployment config
└── README.md
```

## Deploy to Vercel

1. Connect this repository to [Vercel](https://vercel.com)
2. No build step required — static HTML is served directly
3. The site will be live at your Vercel domain

## Local Preview

Open `index.html` in any browser, or run a local server:

```bash
npx serve .
```

## Navigation

- Arrow keys or click to navigate slides
- `Home` / `End` to jump to first/last slide

## Assets

Place `textile-cutting.jpg` in the `assets/` directory for the slide 4 header image. A gradient fallback is included if the image is missing.
