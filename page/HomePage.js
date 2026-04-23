const { expect } = require("@playwright/test");

exports.HomePage = class HomePage{

constructor(page){

    this.page=page;
    this.itemList='//div[@id="inventory_container"]//div//a//div';
    this.menuButton ='#react-burger-menu-btn';
    this.menuCloseButton ='#react-burger-cross-btn';
    this.filterOption='.product_sort_container';
    this.logout='//a[normalize-space()="Logout"]';
    this.login='#login-button';

    
}

async verifyHomepage(){

    await expect (this.page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect (this.page).toHaveTitle("Swag Labs");
    const noOfItemDisplayed=await this.page.$$(this.itemList);
    await expect(await noOfItemDisplayed.length).toBe(6);
    await expect(this.page.locator(this.filterOption)).toBeEnabled();
    await this.page.locator(this.menuButton).click();
    await expect (this.page.locator(this.logout)).toBeVisible();
    await this.page.locator(this.menuCloseButton).click();
}

async logoutFromApp(){
    await this.page.locator(this.menuButton).click();
    await expect (this.page.locator(this.logout)).toBeVisible();
    await this.page.locator(this.logout).click();
    await expect(this.page.locator(this.login)).toBeVisible();

}

async selectProduct(itemname){
    const itemList = await this.page.$$(this.itemList);

    for(const item of itemList){

        if(itemname === await item.textContent()){
            await item.click();
            break;
        }


    }
    
};

}