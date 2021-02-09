Feature: Google home page


Scenario: Displaying google home page

Given I navigate to the Google home page
When  The google home page has loaded
Then  I see the google home page     

 

Scenario: display of google search results
Given I am on the google homepage site
When  I type the keyword "PUBLICIS SAPIENT" into the Google search field
And   I click on "Google search button"
Then  the result of the google search is displayed


