"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
// test.use({ headless: false });
(0, test_1.test)("validate dialog functionality", async ({ page }) => {
    test_1.test.setTimeout(150000);
    await page.goto("/AutomationPractice/", {
        waitUntil: "domcontentloaded",
    });
    await page.waitForTimeout(5000);
    page.on("dialog", async (dialog) => {
        console.log("Message:", dialog.message());
        await dialog.accept();
    });
    await page.click("#alertbtn");
});
