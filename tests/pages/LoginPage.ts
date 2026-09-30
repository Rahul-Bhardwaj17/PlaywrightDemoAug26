import { Locator, Page } from "@playwright/test";

export class LoginPage {
  private username: Locator;
  private password: Locator;
  private terms: Locator;
  private signInButton: Locator;
  private page: Page;

  constructor(page: Page) {
    this.username = page.locator("#username");
    this.password = page.locator("#password");
    this.terms = page.locator("#terms");
    this.signInButton = page.locator("#signInBtn");
    this.page = page;
  }

  async open() {
    await this.page.goto("/loginpagePractise/", {
      waitUntil: "domcontentloaded",
    });
  }

  async login(userName: string, passWord: string) {
    await this.username.fill(userName, { timeout: 10000 });
    await this.password.fill(passWord);
    await this.terms.click();
    await this.signInButton.click();
  }
}
