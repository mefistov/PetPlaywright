# PetPlaywright Project

## Project Setup

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd PetPlaywright

2. Install dependencies:
npm install

3. Install Allure command-line tool:
npm install -g allure-commandline --save-dev

4. Create a .env file in the root directory with the following content:
USER_LOGIN=your_login
USER_PASSWORD=your_password
URL=https://ecommerce-playground.lambdatest.io/


# Run your tests
npm run test

# Generate the Allure report
npm run allure:report

# Open the Allure report
npm run test:allure


# Environment Variables
Ensure you have the following environment variables set in your .env file:

USER_LOGIN: The login username for the application.
USER_PASSWORD: The login password for the application.
URL: The base URL of the application.