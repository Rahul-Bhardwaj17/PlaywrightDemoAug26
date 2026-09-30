import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(page).toHaveScreenshot("homepage.png");
});
// Fail it and say i did not find any reference screenshot
// PW will capture the screenshot and put it in our tests
// when we are going to run the test case it will take new screenshot and compare it will already kept base screenshot
test("visual testing of an element", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  await expect(page.locator("#dropdown-class-example")).toHaveScreenshot(
    "element.png",
    { maxDiffPixels: 100 },
  );
});
