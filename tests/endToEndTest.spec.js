
import {test, expect} from '@playwright/test'
import { LoginPage } from '../page/loginPage';
import { HomePage } from '../page/HomePage';
import { ProductPage } from '../page/ProductPage';
import { CartPage } from '../page/CartPage';
import { CheckoutPage } from '../page/ChekoutPage';

test('loginPage@reg',async({page})=> {

const loginpage = new LoginPage(page);
await loginpage.gotoLoginPage();
await loginpage.login('standard_user','secret_sauce');

//await page.waitForTimeout(5000);
});

test('homePage@reg',async({page})=> {
const homepage = new HomePage(page);
await homepage.selectProduct('Sauce Labs Backpack');

await page.waitForTimeout(5000);
});

test('productPage@reg',async({page})=> {
const productpage = new ProductPage(page);
await productpage.addProductToCart('1');

await page.waitForTimeout(5000);
});

test('cartPage@reg',async({page})=> {
const cartpage = new CartPage(page);
await cartpage.verifyCartItems('Sauce Labs Backpack','$29.99');

await page.waitForTimeout(5000);
});

test('CheckoutPage@reg',async({page})=> {
const checkoutpage = new CheckoutPage(page);
await checkoutpage.productCheckout('Debashree','M','100100');
await checkoutpage.verifyCheckoutInfo('Total: $32.39');
await checkoutpage.verifyOrderConfirmation();

await page.waitForTimeout(5000);

});

