"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
test_1.test.describe("Login tests", () => {
    const usersCredentials = [
        { username: "rahulshettyacademy", password: "Learning@830$3mK2" },
        { username: "user1", password: "user123" },
        { username: "user2", password: "user123" },
        { username: "user3", password: "user123" },
    ];
    for (const user of usersCredentials) {
        (0, test_1.test)(`signs in with valid credentials having ${user.username} @loginWithData`, async ({ page, }) => {
            await page.goto("/loginpagePractise/", {
                waitUntil: "domcontentloaded",
            });
            // await page.pause();
            await page.locator("#username").fill(user.username);
            await page.locator("#password").fill(user.password);
            await page.locator("#terms").click();
            await page.locator("#signInBtn").click();
            await (0, test_1.expect)(page).toHaveURL("https://rahulshettyacademy.com/angularpractice/shop", { timeout: 10000 });
        });
    }
});
test_1.test.describe("Login tests", () => {
    const usersCredentials = [
        { username: "rahulshettyacademy", password: "Learning@830$3mK2" },
        { username: "user1", password: "user123" },
        { username: "user2", password: "user123" },
        { username: "user3", password: "user123" },
    ];
    usersCredentials.forEach((user) => {
        (0, test_1.test)(`signs in with valid credentials having ${user.username} @loginWithDataForEach`, async ({ page, }) => {
            await test_1.test.step("login to application", async () => {
                await page.goto("/loginpagePractise/", {
                    waitUntil: "domcontentloaded",
                });
                // await page.pause();
                await page.locator("#username").fill(user.username);
                await page.locator("#password").fill(user.password);
                await page.locator("#terms").click();
                await page.locator("#signInBtn").click();
            });
            await test_1.test.step("validate login", async () => {
                await (0, test_1.expect)(page).toHaveURL("https://rahulshettyacademy.com/angularpractice/shop", { timeout: 10000 });
            });
        });
    });
});
