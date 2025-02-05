import { BasePage } from "./BasePage";
import { Page } from "@playwright/test";
import { CheckOutPage } from "../pages/CheckOutPage";


export class ProductPage extends BasePage {

    private addToCartButton = this.page.locator("//button[contains(text(),'Add to Cart')]")
    private buyNowButton = this.page.locator("//button[contains(text(),'Buy now')]");

    constructor(page: Page) {
        super(page);
    }

    async clickBuyNow(): Promise<CheckOutPage> {
        try {
            await this.buyNowButton.waitFor({ state: 'visible' });
            //await this.buyNowButton.hover();
            await this.buyNowButton.click();

            return new CheckOutPage(this.page);
        } catch (error) {
            console.error('Error in clickBuyNow process: ', error)
            throw error;
        }
    }
}