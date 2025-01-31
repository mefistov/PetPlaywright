import {defineConfig} from '@playwright/test';

export default defineConfig({
    use: {
        baseURL: process.env.BASE_URL,
        headless: false,
    },
    reporter: [
        ['list'],
        ['allure-playwright'],
    ],
    timeout: 30000, // 30 seconds 
});
