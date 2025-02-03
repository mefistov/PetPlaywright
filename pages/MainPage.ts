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
    private loginViaMailButton: string = "//button[contains(text(),'Увійти через пошту')]";
    private emailInput: string = '.email__input';
    private passwordInput: string = '.password__input';
    private submitButton: string = '.submit-button__bottom';
    private cloudFlairIframe = 'iframe';

    constructor(page: Page) {
        super(page);
        this.pageUrl = process.env.URL || '';
        this.userLogin = process.env.USER_LOGIN || '';
        this.password = process.env.USER_PASSWORD || '';
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

    async handleCloudflare(): Promise<void> {
        try {
            // Wait for the Cloudflare challenge to be solved
            await this.getLocator(this.cloudFlairIframe).waitFor({state: 'visible'}) // Adjust the timeout as needed

            // Check if the Cloudflare challenge iframe is present
            const cloudflareIframe = this.page.frame({ name: this.cloudFlairIframe });
            if (cloudflareIframe) {
                console.log('Cloudflare challenge detected, waiting for it to be solved...');
                await cloudflareIframe.waitForSelector('body', { state: 'hidden' });
                console.log('Cloudflare challenge solved.');
            }
        } catch (error) {
            console.error(`Error handling Cloudflare challenge: ${error}`);
            await this.makeScreenShot('cloudflare-error');
            throw error;
        }
    }


    async login(): Promise<MainPage> {
        try {
            await this.getLocator(this.authRouteButton).click();
            await this.getLocator(this.loginModale).waitFor({ state: 'visible' });
            await this.getLocator(this.loginViaMailButton).click();
            await this.getLocator(this.loginModale).waitFor({ state: 'visible' });
            await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 4000 + 1000)));
            await this.getLocator(this.emailInput).fill(this.userLogin);
            console.log(`User login: ${this.userLogin}`);
            await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 4000 + 1000)));
            await this.getLocator(this.passwordInput).fill(this.password);
            console.log(`User password: ${this.password}`);
            await this.getLocator(this.submitButton).click();
            await this.handleCloudflare();
            await this.getLocator(this.submitButton).click();

        } catch (error) {
            console.error(`Error during login: ${error}`);
            await this.makeScreenShot('login-error');
            throw error;
        }
        return this;
    }
}