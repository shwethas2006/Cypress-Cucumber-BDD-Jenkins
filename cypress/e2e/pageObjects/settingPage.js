import BaseClass from "../utilities/baseClass"
import landingPage from "./landingPage"
//import settingPage from "./settingPage"

class SettingPage extends BaseClass{

    getsignInTab(){
        return 'a[href="#settings"]'
    }
    getSignOutElement(){
        return '.btn-outline-danger'
    }

    clickSignInTab(){
        this.clickElement(this.getsignInTab(),false)
        //cy.get(this.getsignInTab()).click()
        return this
    }
    clickSignOut(){
        //cy.get(this.getSignOutElement()).click()
        this.clickElement(this.getSignOutElement(),false)
        return this
    }


}

const settingPage = new SettingPage();
export default settingPage