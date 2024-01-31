import {Page} from "playwright";
export default class HeaderPage {

private page: Page;

    constructor (page: Page){
       this.page = page

    }

    //locators

    public get eleLoginBtn () {
        const loginBtn = this.page.$("text=Log in");
        if (loginBtn != null) {
            return loginBtn;
         } else  throw new Error ("Login button not found")
    }

    public get eleSignOutBtn() {
        const
    }
}