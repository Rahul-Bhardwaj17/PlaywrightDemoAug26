import { test, expect, chromium } from "@playwright/test";

test("launch browser and navigate to a page", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://playwright.dev/", { waitUntil: "domcontentloaded" });

  await expect(page).toHaveTitle(/Playwright/); //wait + assertion

  await browser.close();
});

test("example for page fixture", async ({ page }) => {
  await page.goto("https://www.google.com/");
});
