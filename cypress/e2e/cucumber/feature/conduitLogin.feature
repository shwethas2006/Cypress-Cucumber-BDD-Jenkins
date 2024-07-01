Feature: Conduit Login Function

Scenario: Login & logout with valid credentials
Given User is on the login page
When User login with valid credentials
|Email            |Password        |
|shwetha.s25@gmail.com | cypress123$|
And User click on the settings button
And User click on the logout button
Then User should be routed back to login page



