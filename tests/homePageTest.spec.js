import { test, expect } from '@playwright/test';
import { LoginPage } from '../page/loginPage';
import { HomePage } from '../page/HomePage';

test.beforeEach('login',async({page})=>{
const loginpage = new LoginPage(page);
await loginpage.gotoLoginPage();
await loginpage.login('standard_user','secret_sauce');

});

test.afterEach('logout',async({page})=>{
const homepage = new HomePage(page);
await homepage.logoutFromApp();

});

test('homePage@smoke',async({page})=> {
const homepage = new HomePage(page);
await homepage.verifyHomepage();
});


