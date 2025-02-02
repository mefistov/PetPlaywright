import {test, expect, Page} from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { setup, tearDown } from '../test-setup';
import dotenv from 'dotenv';


dotenv.config();

let page: Page;

test.beforeAll( async() => {
    const setupResult = await setup();
    page = setupResult.page;
})

test.afterAll( async() => {
    await tearDown()
})

test('base test', async ({page}) => {
    const mainPage = new MainPage(page);
    mainPage.open();
    //mainPage.login();

});