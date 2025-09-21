import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function prerender() {
  console.log('Starting prerendering...');
  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Navigate to the local build
  await page.goto('http://localhost:4173/', { 
    waitUntil: 'networkidle0',
    timeout: 30000 
  });
  
  // Wait for React to hydrate
  await page.waitForTimeout(2000);
  
  // Get the rendered HTML
  const html = await page.content();
  
  // Save the prerendered HTML
  const distPath = path.join(__dirname, '../dist');
  await fs.writeFile(path.join(distPath, 'index.html'), html);
  
  console.log('Prerendering complete! HTML saved to dist/index.html');
  
  await browser.close();
}

prerender().catch(console.error);