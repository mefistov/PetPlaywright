import { test } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { setup, tearDown } from '../test-setup';
import dotenv from 'dotenv';
import { HeaderElement } from '../PageElements/HeaderElement';

dotenv.config();

let page: any;

test.beforeAll(async () => {
    const setupResult = await setup();
    page = setupResult.page;
});

test.afterAll(async () => {
    await tearDown();
});

test('Login and open home page', async () => {
    const mainPage = new MainPage(page);
    await (await mainPage.open())
    .login();
});

test('Performe initial order', async () =>{
    const mainPage = new MainPage(page);
     var headerElement = await new HeaderElement(page);
     (await headerElement.searchForProductAndSelectFirst("HTC Touch HD", 3))
     .clickBuyNow();
     
    

});