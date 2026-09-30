"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const login_data_json_1 = __importDefault(require("../../data/login-data.json"));
test_1.test.use(test_1.devices["Pixel 5"]);
test_1.test.describe("Login tests", () => {
    //test.describe.configure({ mode: "parallel" });
    // test.use({ headless: false });
    test_1.test.use({ viewport: { width: 375, height: 812 } });
    (0, test_1.test)("signs in with valid credentials @login", async ({ page }) => {
        test_1.test.setTimeout(150000);
        //test.use({ trace: "on" });
        // use: {
        //   video: "retain-on-failure";
        // }
        await page.goto("/loginpagePractise/", {
            waitUntil: "domcontentloaded",
        });
        // await page.pause();
        await page.locator("#username").fill(login_data_json_1.default.credentials.valid.username);
        await page.locator("#password").fill(login_data_json_1.default.credentials.valid.password);
        await page.locator("#terms").click();
        await page.locator("#signInBtn").click();
        await (0, test_1.expect)(page).toHaveURL("https://rahulshettyacademy.com/angularpractice/shop", { timeout: 10000 });
    });
    (0, test_1.test)("shows an error for invalid credentials @login", async ({ page, }, testInfo) => {
        test_1.test.skip(testInfo.project.name === "chromium", "skipping for chromium device");
        await page.goto("/loginpagePractise/", {
            waitUntil: "domcontentloaded",
        });
        await page
            .locator("#username")
            .fill(login_data_json_1.default.credentials.invalid.username);
        await page
            .locator("#password")
            .fill(login_data_json_1.default.credentials.invalid.password);
        await page.locator("#terms").click();
        await page.locator("#signInBtn").click();
        await (0, test_1.expect)(page.locator(".alert-danger")).toHaveText("Incorrect username/password.");
    });
});
