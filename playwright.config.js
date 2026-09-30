"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const process_1 = __importDefault(require("process"));
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });
/**
 * See https://playwright.dev/docs/test-configuration.
 */
exports.default = (0, test_1.defineConfig)({
    testDir: "./tests",
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process_1.default.env.CI,
    /* Retry on CI only */
    retries: process_1.default.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process_1.default.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [["html"], ["list"]],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like `await page.goto('')`. */
        baseURL: "https://rahulshettyacademy.com",
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        screenshot: "only-on-failure",
        trace: "off",
    },
    /* Configure projects for major browsers */
    projects: [
        {
            name: "chromium",
            use: { ...test_1.devices["Desktop Chrome"] },
        },
        {
            name: "firefox",
            use: { ...test_1.devices["Desktop Firefox"] },
        },
        // {
        //   name: "webkit",
        //   use: { ...devices["Desktop Safari"] },
        // },
        /* Test against mobile viewports. */
        // {
        //   name: "Mobile Chrome",
        //   use: { ...devices["Pixel 5"] },
        // },
        // {
        //   name: "Mobile Safari",
        //   use: { ...devices["iPhone 12"] },
        // },
        /* Test against branded browsers. */
        // {
        //   name: 'Microsoft Edge',
        //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
        // },
        // {
        //   name: 'Google Chrome',
        //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
        // },
    ],
    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://localhost:3000',
    //   reuseExistingServer: !process.env.CI,
    // },
});
