"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)("launch browser and navigate to a page", async () => {
    const browser = await test_1.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://playwright.dev/", { waitUntil: "domcontentloaded" });
    await (0, test_1.expect)(page).toHaveTitle(/Playwright/); //wait + assertion
    await browser.close();
});
(0, test_1.test)("example for page fixture", async ({ page }) => {
    await page.goto("https://www.google.com/");
});
