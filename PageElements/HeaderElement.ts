
import { Page } from "@playwright/test";
import { ProductPage } from '../pages/ProductPage';

export class HeaderElement {
    private page: Page;
    searchInput;
    searchDropdown
    searchButton;
    compareButton;
    wishListButton;
    cartButton;
    categoriesDropdownButton;
    homeButton;
    spesialButton;
    blogButton;
    megeMenuButton;
    addsOnButton;
    myAccountButton;

    constructor(page: Page){
        this.page = page;
        this.searchInput = this.page.getByRole('textbox', { name: 'Search For Products' });
        this.searchDropdown = page.locator('.dropdown-menu.autocomplete .product-thumb');
        this.searchButton = this.page.getByRole('button', { name: 'Search' });
        this.compareButton = this.page.getByRole('link', { name: 'Compare', exact: true });
        this.wishListButton = this.page.getByRole('link', { name: 'Wishlist', exact: true });
        this.cartButton = this.page.locator('.cart');
        this.categoriesDropdownButton = this.page.getByRole('button', { name: 'All Categories' });
        this.homeButton = this.page.getByRole('link', { name: 'Home' });
        this.spesialButton = this.page.getByRole('link', { name: 'Special Hot', exact: true });
        this.blogButton = this.page.getByRole('link', { name: 'Blog', exact: true });
        this.megeMenuButton = this.page.getByRole('button', { name: 'Mega Menu' });
        this.addsOnButton = this.page.getByRole('button', { name: 'AddOns Featured' });
        this.myAccountButton = this.page.getByRole('button', { name: ' My account' });
    }

    async returnToHomePage(){
        try{
            await this.homeButton.click();
        }
        catch(error){
            console.error(`Error returning to home page: ${error}`);
            throw error;
        }
    }

    async searchForProductAndSelectFirst(product: string): Promise<ProductPage>{
        try{
            //await this.searchInput.toBeVisible();
            await this.searchInput.fill(product)
            await this.searchDropdown.second().click();
            
            return new ProductPage(this.page);
        }
        catch(error){
            console.error(`Error searching for product: ${error}`);
            throw error;
        }
    }

}
