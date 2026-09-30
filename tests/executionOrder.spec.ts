import { test } from "@playwright/test";

test.use({
  viewport: { width: 390, height: 844 },
  isMobile: true,
  screenshot: "on",
});

test("A - login test", async () => {});

test("B - payment test", async () => {});

test("C - login test", async () => {});

test("D - payment test", async () => {});
