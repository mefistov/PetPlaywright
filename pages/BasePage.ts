import { Locator, Page, expect } from "@playwright/test";

export class BasePage{
    protected page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async navigateTo(url: string){
        try{
            await this.page.goto(url, {waitUntil:'networkidle'});

        } catch (error) {   
            console.log(`Error navigating to ${url}: ${error}`);
        };

    }

    async waitForElement(selector: string){
        await this.page.waitForSelector(selector)
    }

    async makeScreenShot(id: string){
        await this.page.screenshot({path: `screenShots/${id}.png`})
    }

    async validateUrl(url: string){
        try{
        expect(this.page.url()).toBe(url)
        } catch (error){
            console.log(`Error validating url: ${this.page.url()}`)
        }

    }

    getLocator(selector: string): Locator{
        return this.page.locator(selector);
    }

}