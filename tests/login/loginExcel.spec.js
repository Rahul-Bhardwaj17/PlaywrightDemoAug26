"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const XLSX = __importStar(require("xlsx"));
const workbook = XLSX.readFile("./data/login-data.xlsx");
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const jsonData = XLSX.utils.sheet_to_json(sheet);
// test.use({ headless: false });
(0, test_1.test)("signs in with valid credentials", async ({ page }) => {
    test_1.test.setTimeout(150000);
    await page.goto("/loginpagePractise/", {
        waitUntil: "domcontentloaded",
    });
    // await page.pause();
    await page.locator("#username").fill(jsonData[0].username);
    await page.locator("#password").fill(jsonData[0].password);
    await page.locator("#terms").click();
    await page.locator("#signInBtn").click();
    await (0, test_1.expect)(page).toHaveURL("https://rahulshettyacademy.com/angularpractice/shop", { timeout: 10000 });
});
(0, test_1.test)("shows an error for invalid credentials", async ({ page }) => {
    await page.goto("/loginpagePractise/", {
        waitUntil: "domcontentloaded",
    });
    await page.locator("#username").fill(jsonData[1].username);
    await page.locator("#password").fill(jsonData[1].password);
    await page.locator("#terms").click();
    await page.locator("#signInBtn").click();
    await (0, test_1.expect)(page.locator(".alert-danger")).toHaveText("Incorrect username/password.");
});
