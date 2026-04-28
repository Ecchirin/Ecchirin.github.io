import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const templatePath = resolve(__dirname, '..', 'assets', 'og-template.html');
const outputPath = resolve(__dirname, '..', 'assets', 'og-image.png');

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1200, height: 630 } });
const page = await ctx.newPage();
await page.goto(`file://${templatePath}`);
await page.waitForLoadState('networkidle');
await page.screenshot({ path: outputPath, type: 'png' });
await browser.close();

console.log(`OG image written to ${outputPath}`);
