const { expect } = require("@playwright/test");

exports.CheckoutPage= class CheckoutPage{

constructor(page){
    this.page=page;
    this.firstName='#first-name';
    this.lastName='#last-name';
    this.zip='#postal-code';
    this.cancelButton='#cancel';
    this.continueButton='#continue';
    this.finishButton='#finish';
    this.totalPricetext="//div[normalize-space()='Price Total']";
    this.totalPrice='.summary_total_label';

    this.orderCompleteMsg='.complete-header';
    this.backToHome='#back-to-products';


}

async productCheckout(firstName,lastName,zip){

await this.page.locator(this.firstName).fill(firstName);
await this.page.locator(this.lastName).fill(lastName);
await this.page.locator(this.zip).fill(zip);
await this.page.locator(this.continueButton).click();


}

async verifyCheckoutInfo(totalprice){

    expect(await this.page.locator(this.totalPricetext).textContent()).toBe('Price Total');
    expect(await this.page.locator(this.totalPrice).textContent()).toBe(totalprice);
    await this.page.locator(this.finishButton).click();
}

async verifyOrderConfirmation(){

    expect(await this.page.locator(this.orderCompleteMsg).textContent()).toBe('Thank you for your order!');
    await this.page.locator(this.backToHome).click();
}

}