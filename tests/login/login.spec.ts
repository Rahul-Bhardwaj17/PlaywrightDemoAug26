import { test, expect, devices } from "@playwright/test";
import loginData from "../../data/login-data.json";

test.use(devices["Pixel 5"]);
test.describe("Login tests", () => {
  //test.describe.configure({ mode: "parallel" });
  // test.use({ headless: false });
  test.use({ viewport: { width: 375, height: 812 } });
  test("signs in with valid credentials @login", async ({ page }) => {
    test.setTimeout(150000);
    //test.use({ trace: "on" });
    // use: {
    //   video: "retain-on-failure";
    // }
    await page.goto("/loginpagePractise/", {
      waitUntil: "domcontentloaded",
    });
    // await page.pause();
    await page.locator("#username").fill(loginData.credentials.valid.username);
    await page.locator("#password").fill(loginData.credentials.valid.password);
    await page.locator("#terms").click();
    await page.locator("#signInBtn").click();
    await expect(page).toHaveURL(
      "https://rahulshettyacademy.com/angularpractice/shop",
      { timeout: 10000 },
    );
  });

  test("shows an error for invalid credentials @login", async ({
    page,
  }, testInfo) => {
    test.skip(
      testInfo.project.name === "chromium",
      "skipping for chromium device",
    );
    await page.goto("/loginpagePractise/", {
      waitUntil: "domcontentloaded",
    });
    await page
      .locator("#username")
      .fill(loginData.credentials.invalid.username);
    await page
      .locator("#password")
      .fill(loginData.credentials.invalid.password);
    await page.locator("#terms").click();
    await page.locator("#signInBtn").click();

    await expect(page.locator(".alert-danger")).toHaveText(
      "Incorrect username/password.",
    );
  });
});
