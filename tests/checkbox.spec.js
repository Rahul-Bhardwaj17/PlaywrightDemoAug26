"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
// test.use({ headless: false });
(0, test_1.test)("validate iframe functionality", async ({ page }) => {
    test_1.test.setTimeout(150000);
    await page.goto("/AutomationPractice/", {
        waitUntil: "domcontentloaded",
    });
    await page.waitForTimeout(5000);
    const iframe = page.frameLocator("#courses-iframe");
    await iframe.locator('(//a[text()="Courses"])[1]').click();
    await (0, test_1.expect)(iframe.locator('//a[text()="Browse products"]')).toBeVisible();
});
