const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { LoginPage } = require('../page-objects/LoginPage')

const loginPage = new LoginPage()

defineStep('I visit a login page', async function () {
    // await navigateToLoginScreen();
    await loginPage.navigateToLoginScreen();
})

defineStep('I fill the login form with a valid credentials', async function () {
    // await page.fill('#user-name', 'standard_user');
    // await page.fill('#password', 'secret_sauce');
    // await page.click('#login-button');
    await loginPage.submitLoginForm();
})


defineStep('I should see the home page', async function () {
    // await page.waitForSelector('.inventory_list');
    await loginPage.assertUserIsLoggedIn();
})

defineStep('I wait for 3 seconds', async function () {
    await loginPage.pause();
})


defineStep(/^I fill the login form with "([^"]*)" and "([^"]*)"$/, async function (userName, password) {
    await loginPage.submitLoginFormWithParameters(userName, password);
})
