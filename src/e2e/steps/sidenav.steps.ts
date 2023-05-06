import { Given, Then, When, AfterAll } from "@cucumber/cucumber";
import { Browser, Page, chromium, expect, defineConfig } from "@playwright/test";

let browser: Browser;
let page: Page;

export default defineConfig({
  timeout: 5 * 60 * 1000,
});

Given('User navigates to the Dashboard application', async function () {
    browser = await chromium.launch({headless: false});
    page = await browser.newPage();
    await page.goto('http://localhost:5001/dashboard');
});

When('User click on the header menu button', async function () {
    await page.locator(".example-icon").click();
});

Then('Side navigation should open', async function () {
    let sideNav = page.locator("mat-drawer");
    await expect(sideNav).toBeHidden();
});

When('User click on the header menu button again', async function () {
    await page.locator(".example-icon").click();
});

Then('Side navigation should close', async function () {
    let sideNav = page.locator("mat-drawer");
    await expect(sideNav).toBeHidden();
});

AfterAll(() => {
    page.close();
    browser.close();
})