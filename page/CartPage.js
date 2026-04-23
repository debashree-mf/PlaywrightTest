const { expect } = require("@playwright/test");

exports.CartPage = class CartPage{

constructor(page){

    this.page=page;
    this.cartitemname='.inventory_item_name';
    this.cartitemprice='.inventory_item_price';
    this.removeButton="//button[normalize-space()='Remove']";
    this.continueShopping='#continue-shopping';
    this.checkout='#checkout';


}

async verifyCartItems(itemname,itemprice){

    expect(await this.page.locator(this.cartitemname).textContent()).toBe(itemname);
    expect(await this.page.locator(this.cartitemprice).textContent()).toBe(itemprice);
    await this.page.locator(this.checkout).click();


}


}