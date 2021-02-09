             // SCENARIO 1//
Given('I navigate to the Google home page', ()=>{
    cy.visit('https://www.google.com/')
    cy.get('#cnsm').click({force:true})
})

When('The google home page has loaded', () =>{
cy.get('#viewport').should('be.visible');
});

Then('I see the google home page' , () =>{
    cy.get('#hplogo').should('be.visible')
    cy.get('.gLFyf.gsfi').should('be.visible')
    cy.get('#main').should('be.visible')
    cy.get('.FPdoLc.tfB0Bf').should('be.visible')


});
               // SCENARIO 2 //
Given('I am on the google homepage site', ()=>{
    cy.visit('https://www.google.com/')
   
});

When('I type the keyword "PUBLICIS SAPIENT" into the Google search field', () =>{
    cy.get('[name=q]').type('PUBLICIS SAPIENT',{force:true}).should('have.value','PUBLICIS SAPIENT')

});

And('I click on "Google search button"', () => {
    cy.contains("Recherche Google").click({force:true})    

});

Then('the result of the google search is displayed' , () =>{
    cy.get('#rso').should('be.visible');
    cy.get('#wp-tabs-container').should('be.visible');
    cy.contains("www.publicisgroupe.com").should('be.visible');
    cy.contains("www.publicissapient.fr").should('be.visible');
    cy.contains("www.publicissapient.com").should('be.visible');

    
});

   