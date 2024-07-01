import BaseClass from "../utilities/baseClass"
import settingPage from "./settingPage"
import homePage from "./homePage"

class LoginPage extends BaseClass{

    getEmail(){
     return 'input[type="email"]'
    }
    getPassword(){
      return 'input[type="password"]'
    }
    getSignInButton(){
      return 'button[type="submit"]'
    }

    enterEmail(email){
     //cy.get(this.getEmail()).type(email)
     this.fillText(this.getEmail(),email,false)
     return this
    }

    enterPassword(password){
        //cy.get(this.getPassword()).type(password)
        this.fillText(this.getPassword(),password,false)
        return this
       }

       clickSignInButton(){
        //cy.get(this.getSignInButton()).click()
        this.clickElement(this.getSignInButton(),false)
        return settingPage
       }
}
const loginPage = new LoginPage();
export default loginPage