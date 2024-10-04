/// <reference types ="cypress"/>
describe ('Google Search',function()
{

    it('Google',()=>
    {
        cy.visit('https://www.google.co.in/');
    })
    it('Google Search',()=>{
        cy.get('#APjFqb').type('Cypress{Enter}');
    })
    
})