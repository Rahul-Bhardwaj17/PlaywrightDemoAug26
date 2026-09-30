"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
test_1.test.use({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    screenshot: "on",
});
(0, test_1.test)("A - login test", async () => { });
(0, test_1.test)("B - payment test", async () => { });
(0, test_1.test)("C - login test", async () => { });
(0, test_1.test)("D - payment test", async () => { });
