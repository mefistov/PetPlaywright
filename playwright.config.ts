import {defineConfig} from '@playwright/test';

export default defineConfig({
    retries: 0,
    maxFailures: 3,
    use: {
        //browserName: 'chromium',
        //channel: 'chrome',
        baseURL: process.env.BASE_URL,
        headless: false,
        screenshot: 'only-on-failure',
    },
    reporter: [
        ['list'],
        ['allure-playwright'],
    ],
    timeout: 30000, // 30 seconds 
});

