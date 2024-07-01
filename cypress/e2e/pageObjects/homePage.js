import BaseClass from "../utilities/baseClass"
//import settingsPage from "./settingsPage"

class HomePage extends BaseClass{

    getYourFeed(){return 'Your Feed'}

    getGlobalFeed(){return 'Global Feed'}

    getHome(){return 'Home'}

    getNewPost(){return 'New Post'}

    getSettings(){return 'Settings'}

    checkYourFeedIsVisible(){
        this.isElementVisible(this.getYourFeed(),true);
        //return this;
    }

    clickSettingsButton(){
        this.clickElement(this.getSettings(),true);
        //return settingsPage;
    }
}

const homePage = new HomePage();
export default homePage