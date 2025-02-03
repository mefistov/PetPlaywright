import { BasePage } from './BasePage';
import { Page } from "@playwright/test";
import dotenv from 'dotenv';
import { MainPage } from './MainPage';

export class LoginPage extends BasePage {

    private userLogin: string;
    private userPassword: string;
    private emailInput = this.page.getByRole('textbox', { name: 'E-Mail Address' });
    private passwordInput = this.page.getByRole('textbox', { name: 'Password' });
    private loginButton = this.page.getByRole('button', { name: 'Login' });

    constructor(page: Page) {
        super(page);
        this.userLogin = process.env.USER_LOGIN || '';
        this.userPassword = process.env.USER_PASSWORD || '';
    }

    async fillLoginForm(): Promise<MainPage> {
        try {
            await this.emailInput.fill(this.userLogin);
            await this.passwordInput.fill(this.userPassword);
            await this.loginButton.click();

            return new MainPage(this.page)
        }
        catch (error){
            console.error('Error in login process: ', error)
            throw error;
        }
        
    }



}