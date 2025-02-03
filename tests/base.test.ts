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

test('base test', async () => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.login();

});