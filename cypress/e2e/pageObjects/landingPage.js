import BaseClass from "../utilities/baseClass"
import loginPage from "./loginPage";

class LandingPage extends BaseClass{

    getSignIn(){
        return 'a[href="#login"]'
    }

    clickSignInButton(){
     this.clickElement(this.getSignIn(),false);
     return loginPage;
    }
}


const landingPage = new LandingPage();
export default landingPage