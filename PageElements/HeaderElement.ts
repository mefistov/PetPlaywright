
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
        this.searchInput = this.page.locator("//header/div[@id='main-header']/div[@id='entry_217820']/div[@id='entry_217822']/div[1]/form[1]/div[1]/div[1]/div[1]/div[2]/input[1]");
        this.searchDropdown = page.locator('.dropdown-menu.autocomplete .product-thumb');
        //this.searchDropDownImage = page.locator(`li:nth-child(3) > .image > a`);
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

    async searchForProductAndSelectFirst(product: string, option: number): Promise<ProductPage>{
        try{
            await this.searchInput.hover();
            await this.searchInput.fill(product)
            await this.searchInput.click();
            await this.selectAndClickDropDownItemImage(option);
            
            return new ProductPage(this.page);
        }
        catch(error){
            console.error(`Error searching for product: ${error}`);
            throw error;
        }
    }

    async selectAndClickDropDownItemImage(option: number): Promise<ProductPage>{
        try{
            //await this.page.locator(`li:nth-child(${option}) > .image > a`).hover();
            await this.page.locator(`li:nth-child(${option}) > .image > a`).click();
    
            return new ProductPage(this.page);
        }
        catch(error){
            console.error(`Error selecting drop down image: ${error}`);
            throw error;
            }
        }

}
