Feature: Owner Page
  Details - Page where users can add and edit owners.

  Background:
    Given the Page Object Model configuration for "owner" has been initialized
    Given the user enters the owner page

  Scenario: TC001 - [Owner] | Validate add new owner
    When the user should clic in the button "addNewOwner"
    Then the element "title" should "have text" "Owner"
    When the user should type in the field "firstName" with value "Jheiner"
    When the user should type in the field "lastName" with value "Reaño"
    When the user should type in the field "address" with value "Av 123"
    When the user should type in the field "city" with value "Lima"
    When the user should type in the field "telephone" with value "9726262233"
    When the user should clic in the button "addOwner"
    When the user wait 1 seconds
    Then the element "successMessage" should "contain text" "New Owner Created"
    Then the element "title" should "have text" "Owner Information"
    When the user should clic in the link "findOwners"
    When the user should type in the field "lastName" with value "Reaño"
    When the user should clic in the button "findOwner"
    Then the table "owners" should contain at least one row or display message "no hay data"
  
  Scenario: TC002 - [Owner] | Validate find and edit owner
    When the user should clic in the link "findOwners"
    When the user should type in the field "lastName" with value "Reaño"
    When the user should clic in the button "findOwner"
    Then the table "owners" should contain at least one row or display message "no hay data"
    Then the table "owners" in column "Name" and row 1 should "contain text" "Reaño"
    When the user should clic in the result 1
    When the user should clic in the button "editOwner"
    When the user should type in the field "lastName" with value "Reaño automation"
    When the user should clic in the button "updateOwner"
    Then the element "successMessage" should "contain text" "Owner Values Updated"
  
  Scenario: TC003 - [Owner] | Validate updated owner search
    When the user should clic in the link "findOwners"
    When the user should type in the field "lastName" with value "Reaño automation"
    When the user should clic in the button "findOwner"
    Then the table "owners" should contain at least one row or display message "no hay data"
    Then the table "owners" in column "Name" and row 1 should "contain text" "Reaño automation"

