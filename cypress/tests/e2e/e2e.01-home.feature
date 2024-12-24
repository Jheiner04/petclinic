Feature: Home Page
  Details - Page where users can see the complete list of available pet owners.

  Background:
    Given the Page Object Model configuration for "home" has been initialized
    Given the user enters the home page

  Scenario: TC001 - [Home] | Validate main access and show list of owners
    Then the element "title" should "have text" "Welcome"
    Then the element "url" should "have url" "https://petclinic-production.up.railway.app/"
    When the user should clic in the link "findOwners"
    When the user should clic in the button "findOwner"
    Then the element "title" should "have text" "Owners"
    Then the table "owners" should contain at least one row or display message "no hay data"


