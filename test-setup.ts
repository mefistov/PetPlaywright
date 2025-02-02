import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

let browser: Browser;
let context: BrowserContext;
let page: Page;

export const setup = async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();

    return { browser, context, page };
}

export const tearDown = async () => {
    await page.close();
    await context.clearCookies();
    await context.close();
    await browser.close();
}