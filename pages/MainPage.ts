import { BasePage } from './BasePage';
import { HeaderElement } from '../PageElements/HeaderElement';
import { LoginPage } from './LoginPage';
import { Page } from "@playwright/test";
import dotenv from 'dotenv';

dotenv.config();

export class MainPage extends BasePage {
    loginPage: LoginPage;
    private pageUrl: string;
    loginButtton = this.page.getByRole('button', { name: ' My account' });
    headerElement: HeaderElement;

    constructor(page: Page) {
        super(page);
        this.pageUrl = process.env.URL || '';
    }

    async open(): Promise<MainPage> {
        try {
            await this.page.goto(this.pageUrl, { waitUntil: 'networkidle' });
            console.log(`Page was successfully loaded  url: ${this.pageUrl}`);
            await this.validateUrl(this.pageUrl);

            return this;
        } catch (error) {
            console.error(`Error opening page: ${error}`);
            await this.makeScreenShot('open-error');
            throw error;
        }
        return this;
    }

    async login(): Promise<MainPage> {
        try {
            await this.loginButtton.click();
            this.loginPage = new LoginPage(this.page);
            await this.loginPage.fillLoginForm()
            this.headerElement = new HeaderElement(this.page);
            await this.headerElement.returnToHomePage();
        } catch (error) {
            console.error(`Error during login: ${error}`);
            await this.makeScreenShot('login-error');
            throw error;
        }
        return this;
    }
}