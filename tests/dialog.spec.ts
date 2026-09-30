import { test, expect } from "@playwright/test";

// test.use({ headless: false });
test("validate dialog functionality", async ({ page }) => {
  test.setTimeout(150000);
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
