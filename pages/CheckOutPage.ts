import { BasePage } from './BasePage';
import { HeaderElement } from '../PageElements/HeaderElement';
import { Page } from "@playwright/test";

export class CheckOutPage extends BasePage {
    
    constructor(page: Page){
        super(page);
    }

}