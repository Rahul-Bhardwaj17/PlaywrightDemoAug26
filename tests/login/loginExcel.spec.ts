import { test, expect } from "@playwright/test";
import * as XLSX from "xlsx";

type loginData = {
  scenario: string;
  username: string;
  password: string;
  expectedResult: string;
};

const workbook = XLSX.readFile("./data/login-data.xlsx");
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const jsonData = XLSX.utils.sheet_to_json<loginData>(sheet);

// test.use({ headless: false });
test("signs in with valid credentials", async ({ page }) => {
  test.setTimeout(150000);
  await page.goto("/loginpagePractise/", {
    waitUntil: "domcontentloaded",
  });
  // await page.pause();
  await page.locator("#username").fill(jsonData[0].username);
  await page.locator("#password").fill(jsonData[0].password);
  await page.locator("#terms").click();
  await page.locator("#signInBtn").click();
  await expect(page).toHaveURL(
    "https://rahulshettyacademy.com/angularpractice/shop",
    { timeout: 10000 },
  );
});

test("shows an error for invalid credentials", async ({ page }) => {
  await page.goto("/loginpagePractise/", {
    waitUntil: "domcontentloaded",
  });
  await page.locator("#username").fill(jsonData[1].username);
  await page.locator("#password").fill(jsonData[1].password);
  await page.locator("#terms").click();
  await page.locator("#signInBtn").click();

  await expect(page.locator(".alert-danger")).toHaveText(
    "Incorrect username/password.",
  );
});
