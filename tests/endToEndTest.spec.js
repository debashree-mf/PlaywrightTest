
import {test, expect} from '@playwright/test'
import { LoginPage } from '../page/loginPage';
import { HomePage } from '../page/HomePage';
import { ProductPage } from '../page/ProductPage';
import { CartPage } from '../page/CartPage';
import { CheckoutPage } from '../page/ChekoutPage';

test('endToEndTest@reg',async({page})=> {

const loginpage = new LoginPage(page);
await loginpage.gotoLoginPage();
await loginpage.login('standard_user','secret_sauce');


const homepage = new HomePage(page);
await homepage.selectProduct('Sauce Labs Backpack');


const productpage = new ProductPage(page);
await productpage.addProductToCart('1');


const cartpage = new CartPage(page);
await cartpage.verifyCartItems('Sauce Labs Backpack','$29.99');



const checkoutpage = new CheckoutPage(page);
await checkoutpage.productCheckout('Debashree','M','100100');
await checkoutpage.verifyCheckoutInfo('Total: $32.39');
await checkoutpage.verifyOrderConfirmation();


});

