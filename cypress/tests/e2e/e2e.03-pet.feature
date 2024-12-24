Feature: Owner Page
  Details - Page where users can add pets.

  Background:
    Given the Page Object Model configuration for "owner" has been initialized
    Given the user enters the owner page
  
  Scenario Outline: <T-C> - [Pet] | Validate add new pet | <type>
    When the user should clic in the link "findOwners"
    When the user should type in the field "lastName" with value "Reaño automation"
    When the user should clic in the button "findOwner"
    When the user should clic in the result 1
    When the user should clic in the button "addNewPet"
    Given the Page Object Model configuration for "pet" has been initialized
    When the user should type in the field "name" with value "<name>"
    When the user should type in the field "birthDate" with value "<birthDate>"
    When the user should clic in the select "type" with value "<type>"
    When the user should clic in the button "addPet"
    Then the element "successMessage" should "contain text" "New Pet has been Added"
    Then the element "listPet" should "contain text" "<name>"
    Examples:
      | T-C   | type  | name     | birthDate  |
      | TC001 | cat   | Pets uno | 2000-12-12 |
      | TC002 | dog   | Pets dos | 2001-10-10 |
  
  Scenario: TC003 - [Pet] | Validate add visit
    When the user should clic in the link "findOwners"
    When the user should type in the field "lastName" with value "Reaño automation"
    When the user should clic in the button "findOwner"
    When the user should clic in the result 1
    Given the Page Object Model configuration for "pet" has been initialized
    When the user should clic in the result 1
    When the user should type in the field "description" with value "test visit"
    When the user should type in the field "date" with value "2024-12-26"
    When the user should clic in the button "addVisit"
    Then the element "successMessage" should "contain text" "Your visit has been booked" 
    When the user should clic in the result 1
    Then the element "listVisit" should "contain text" "test visit"
  
  Scenario: TC003 - [Pet] | Validate edit pet
    When the user should clic in the link "findOwners"
    When the user should type in the field "lastName" with value "Reaño automation"
    When the user should clic in the button "findOwner"
    When the user should clic in the result 1
    Given the Page Object Model configuration for "pet" has been initialized
    When the user should clic in the button "editPet"
    When the user should type in the field "name" with value "Pet edit qa"
    When the user should type in the field "birthDate" with value "2011-11-12"
    When the user should clic in the select "type" with value "cat"
    When the user should clic in the button "updatePet"
    Then the element "successMessage" should "contain text" "Pet details has been edited"
    # When the user wait 1 seconds
    # Then the element "listPet" should "contain text" "Pet edit qa"    