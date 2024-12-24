import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import pom from '../pom';
let pageObject = null;

Given('the Page Object Model configuration for {string} has been initialized', (name) => {
    pageObject = pom[name];
    pageObject._loadEndPoint(name);
});

//add steps API
/** ------------------------------------------- **/
/** Steps definitions for the E2E .feature file **/
/** ------------------------------------------- **/

Given('the user enters the {word} page', (endPoint) => {
    pageObject._open(endPoint);
});

When(/^the user should (clic|type|select|actions|...) in the (button|field|link|fields|elements|select|...) "([^"]*)"?(?: with value "([^"]*)")?$/, (action, elementType, elementId, content) => {
    pageObject._sendAction(action, elementType, elementId, content);
});

Then(/^the (element|section|field|button|list|image|...) "([^"]*)" should "([^"]*)"?(?: "([^"]*)")?$/, (elementType, elementId, condition, content) => {
    pageObject._validate(elementType, elementId, condition, content);
});

Then('the table {string} should contain at least one row or display message {string}', (tableName, message) => {
	pageObject._tableHasContent(tableName, message);
});

When('the user wait {int} seconds',(seconds)=>{
    pageObject._waitForSeconds(seconds);
});

Then ('the table {string} in column {string} and row {int} should {string} {string}',(table, column, row, conditional, value) => {
	pageObject.validateCell(table, column, row, conditional, value)
});

When('the user should clic in the result {int}',(row)=>{
    pageObject.clicRow(row);
});