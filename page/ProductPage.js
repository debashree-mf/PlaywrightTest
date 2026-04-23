const { expect } = require("@playwright/test");

exports.ProductPage=class ProductPage{

    constructor(page){

    this.page=page;
    this.backToProducts='#back-to-products';
    this.addToCart ='[data-test="add-to-cart"]';
    this.cart='.shopping_cart_link';
    this.cartItem='.shopping_cart_link>span';
    }

    async addProductToCart(itemcount){
    
        //verify product details page is loaded

        await expect(this.page.locator(this.backToProducts)).toBeVisible();
        await this.page.locator(this.addToCart).click();
        await expect(await this.page.locator(this.cartItem).textContent()).toBe(itemcount);
        await this.page.locator(this.cart).click();
    
    }
    
}