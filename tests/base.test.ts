import {test, expect} from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import dotenv from 'dotenv';


dotenv.config();
test('base test', async ({page}) => {
    const mainPage = new MainPage(page);
    mainPage.open();
    
});