import { describe } from "node:test";
import Env from "../utils/envirement";
import {Browser, BrowserContext, Page, chromium} from "playwright"
import LoginPage from "../page/Login.page";
describe("TC001", () =>{

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    // my pages
    let header: LoginPage;
    let commen: commonFunctios;

    beforeAll (async() => {
        // code to run before all tests in this block
        browser = await chromium.launch({
            headless : true,
          //  slowMo   : 500 / 60
            });
            context = await browser.newContext()
            page = await context.newPage();
            await  page.goto(Env.test)
    })


    test("login positive_JIRA101", () => {
        
    })

}
    function beforeAll(arg0: () => Promise<void>) {
        throw new Error("Function not implemented.");

    }
)
