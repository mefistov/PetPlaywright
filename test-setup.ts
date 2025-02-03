import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

let browser: Browser;
let context: BrowserContext;
let page: Page;

export const setup = async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    page.setExtraHTTPHeaders({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9'
  });

    return { browser, context, page };
}

export const tearDown = async () => {
    await page.close();
    await context.clearCookies();
    await context.close();
    await browser.close();
}