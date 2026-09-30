import { test, expect } from "@playwright/test";

// test.use({ headless: false });
test("validate iframe functionality", async ({ page }) => {
  test.setTimeout(150000);
  await page.goto("/AutomationPractice/", {
    waitUntil: "domcontentloaded",
  });
  await page.waitForTimeout(5000);
  const iframe = page.frameLocator("#courses-iframe");
  await iframe.locator('(//a[text()="Courses"])[1]').click();
  await expect(iframe.locator('//a[text()="Browse products"]')).toBeVisible();
});
