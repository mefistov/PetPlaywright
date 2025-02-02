import { BasePage } from './BasePage';
import { Page } from "@playwright/test";
import dotenv from 'dotenv';

dotenv.config();

export class MainPage extends BasePage {
    private pageUrl: string;
    private userLogin: string;
    private password: string;
    private loginModale: string = '.modal-layout';
    private authRouteButton: string = 'rz-app-root >> ul > li:nth-child(4) >> rz-auth-icon >> button';
    private loginViaMailButton: string = '.button.button--medium.button--link.link-button';
    private emailInput: string = '.email__input';
    private passwordInput: string = '.password__input';

    constructor(page: Page) {
        super(page);
        this.pageUrl = process.env.URL || '';
        this.userLogin = process.env.LOGIN || '';
        this.password = process.env.PASSWORD || '';
    }

    async open(): Promise<MainPage> {
        try {
            await this.page.goto(this.pageUrl, { waitUntil: 'networkidle' });
            console.log(`Page was successfully loaded  url: ${this.pageUrl}`);
            await this.validateUrl(this.pageUrl);
        } catch (error) {
            console.error(`Error opening page: ${error}`);
            await this.makeScreenShot('open-error');
            throw error;
        }
        return this;
    }

    async login(): Promise<MainPage> {
        try {
            await this.getLocator(this.authRouteButton).click();
            await this.getLocator(this.loginModale).waitFor({ state: 'visible' });
            await this.getLocator(this.loginViaMailButton).click();
            await this.getLocator(this.loginModale).waitFor({ state: 'visible' });
            await this.getLocator(this.emailInput).fill(this.userLogin);
            await this.getLocator(this.passwordInput).fill(this.password);
        } catch (error) {
            console.error(`Error during login: ${error}`);
            await this.makeScreenShot('login-error');
            throw error;
        }
        return this;
    }
}