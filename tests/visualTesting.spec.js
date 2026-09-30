"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)("has title", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await (0, test_1.expect)(page).toHaveScreenshot("homepage.png");
});
// Fail it and say i did not find any reference screenshot
// PW will capture the screenshot and put it in our tests
// when we are going to run the test case it will take new screenshot and compare it will already kept base screenshot
(0, test_1.test)("visual testing of an element", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await (0, test_1.expect)(page.locator("#dropdown-class-example")).toHaveScreenshot("element.png", { maxDiffPixels: 100 });
});
