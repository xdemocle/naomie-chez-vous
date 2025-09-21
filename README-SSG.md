# Static Site Generation (SSG) Setup

This project now includes prerendering capabilities for better SEO performance.

## How to Use

1. **Build the project first:**
   ```bash
   npm run build
   ```

2. **Preview the build locally:**
   ```bash
   npm run preview
   ```

3. **Run prerendering (in a separate terminal):**
   ```bash
   node scripts/prerender.js
   ```

## What the Prerendering Does

- Launches a headless browser using Puppeteer
- Visits your built application at localhost:4173
- Waits for the React app to fully hydrate
- Captures the rendered HTML
- Saves the static HTML to `dist/index.html`

## Benefits

- **Better SEO**: Search engines can crawl the static HTML
- **Faster Initial Load**: Users see content immediately
- **Social Media**: Better preview cards for sharing

## Production Deployment

When deploying to production, run the prerender script after building:

```bash
npm run build
node scripts/prerender.js
```

The generated `dist/index.html` will contain the fully rendered page content that search engines can index.

## Alternative Approach

If you prefer a more automated solution, you can use build tools like:
- **Vite Plugin SSG**: For automatic prerendering during build
- **Vite Plugin Prerender**: For route-based prerendering
- **Astro**: For static site generation with React components

The current setup provides a simple, working solution that you can extend as needed.