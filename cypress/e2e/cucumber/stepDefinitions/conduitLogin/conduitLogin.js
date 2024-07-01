import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import landingPage from "../../../pageObjects/landingPage"
import loginPage from "../../../pageObjects/loginPage"
import settingPage from "../../../pageObjects/settingPage"


///<reference types="cypress" />

beforeEach('Load teh data',function(){
  cy.fixture('conduitLogin').as('data')
})


Given('User is on the login page', function() {
    cy.visit("https://react-redux.realworld.io/#/?_k=9ticfv")
    landingPage.clickSignInButton()

})

Given('User login with valid credentials',  function(dataTable) {
    loginPage.enterEmail(this.data.validEmail)
    loginPage.enterPassword(this.data.validPassword)
    loginPage.clickSignInButton()
})

When('User click on the settings button', () => {
   // cy.get('a[href="#settings"]').click()
    settingPage.clickSignInTab()
})
When('User click on the logout button', () => {
    //cy.get('.btn-outline-danger').click()
    settingPage.clickSignOut();
})

And('User should be routed back to login page', () => {
    cy.title().should('eq', 'Conduit')
})

