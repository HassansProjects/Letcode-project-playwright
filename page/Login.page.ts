import {Page} from "playwright" ;
export default class LoginPage{

    private page: Page
    constructor(page: Page){
        this.page =page;
    }

// Login Page web elements

    // Email field
    public get eleEmailTextField(){
       return this.page.$("input[name='email']")    
    }

    // Password field
    public get elePasswordTextField() {
        return this.page.$("input[name='password']")
     }

    // Log in Button
     public get eleLoginBtn(){
        return this.page.$("//button[text()='LOGIN']")
        
     }

// The function

     // Method to fill the username field
     public async enterUserName (name: string){
        const ele = await this.eleEmailTextField;
        await  ele?.fill(name);
     }
     
     // Method to fill the password field
     public async enterUserPassword (password: string){
        const ele = await this.elePasswordTextField;
        await ele?.fill(password)
     }   

     // Method  to click on login button
     public async  clickOnLoginButton () {
          const ele =await this.eleLoginBtn
          await ele?.click();

     }

}