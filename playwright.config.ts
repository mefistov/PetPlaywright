import {defineConfig} from '@playwright/test';

export default defineConfig({
    retries: 2,
    maxFailures: 3,
    use: {
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
