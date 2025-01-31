import {test, expect} from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import dotenv from 'dotenv';


dotenv.config();
test('base test', asgit ync ({page}) => {
    const mainPage = new MainPage(page);
    mainPage.open()
    mainPage.login();

});