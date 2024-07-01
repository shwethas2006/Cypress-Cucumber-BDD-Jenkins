
const report = require("multiple-cucumber-html-reporter");
report.generate({
jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
reportPath: "./reports/cucumber-htmlreport.html",
metadata: {
browser: {
name: "chrome",
version: "81",
},
device: "Local test machine",
platform: {
name: "windows",
version: "10",
},
},
customData:{
    title:" Cypress cuucmber BDD Report",
    data:[
        {label: 'Projectname',value:'Cypress cucumber project'}
    ]
}
});