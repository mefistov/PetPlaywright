import { Locator, Page, expect } from "@playwright/test";

export class BasePage{
    protected page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async navigateTo(url: string){
        try{
            await this.page.goto(url, {waitUntil:'networkidle'});
            this.page.screenshot({path: `screenShots/${Date.now()}.png`});
        } catch (error) {   
            console.log(`Error navigating to ${url}: ${error}`);
            await this.page.screenshot({path: `screenShots/${Date.now()}.png`});
            throw error;
        };

    }

    async waitForElement(selector: string){
        try{
            await this.page.waitForSelector(selector)
            } catch (error){
                await this.page.screenshot({path: `screenShots/${Date.now()}.png`});
                throw error;
            }
    }

    async makeScreenShot(id: string){
        await this.page.screenshot({path: `screenShots/${Date.now()}.png`})
    }

    async validateUrl(url: string){
        try{
            console.log(`Current url loading: ${this.page.url()} /n Expected url: ${url}`);
            expect(this.page.url()).toBe(url)
        } catch (error){
            await this.page.screenshot({path: `screenShots/${Date.now()}.png`});
            throw error;
        }

    }

    getLocator(selector: string): Locator {
        return this.page.locator(selector);
    }

}