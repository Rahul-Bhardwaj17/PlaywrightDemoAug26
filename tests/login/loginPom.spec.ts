import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import loginData from "../../data/login-data.json";

test("signs in with valid credentials @pomlogin", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await page.waitForTimeout(5000);
  await loginPage.login(
    loginData.credentials.valid.username,
    loginData.credentials.valid.password,
  );
  await expect(page).toHaveURL(
    "https://rahulshettyacademy.com/angularpractice/shop",
    { timeout: 10000 },
  );
});
