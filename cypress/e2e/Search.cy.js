/// <reference types ="cypress"/>
it('Google Search', () => {
    cy.visit('https://bsscommerce.com/blog/luma-theme/')
    cy.get('#search-4 > .pc-searchform > .pc-searchform-inner > .search-input').type("Magneto{Enter}");
    cy.wait(5000);
    cy.get('#menu-item-39434 > a').click()
    cy.wait(2000);
    //Navigating to the cypress site
    //cy.visit('https://example.cypress.io/');
    /*cy.origin('https://example.com', () => 
    {
      // Commands to run on the external origin
      cy.visit('https://example.cypress.io/');
      cy.wait(5000);
      cy.contains('get').click();
      // Additional commands for the external origin
    });*/

    //cy.wait(5000);
    //cy.contains('get').click();
    //cy.get('#query-btn', { timeout: 5000 }).should('be.visible');
    //cy.get('#query-btn').should('contain','Button');
    
    //cy.get('#APjFqb').type("Selenium Tutorial{Enter}")
    //Should assertion
    cy.visit('https://bsscommerce.com/blog/luma-theme/')
    cy.screenshot("FirstScreenshot")
    //keyboard actions
    //type
    cy.get('#top-search > :nth-child(1) > .penciicon-magnifiying-glass').type("Shopify Apps{Enter}");

    cy.wait(40000)
    cy.scrollTo('right')
   
    //cy.wait(60000)
    cy.get('.penciicon-close-button').should('exist');
    //cy.get('#top-search > :nth-child(1) > .penciicon-magnifiying-glass').type("Services{Enter}");
    cy.get('.penciicon-close-button').click();
    cy.wait(30000);

  }
  )
  
it('Global site', () => {
    cy.visit('https://bsscommerce.com/blog/luma-theme/');
    cy.get('#menu-item-39437 > [href="https://bsscommerce.com/extensions-apps"]').should('contain','Extension');
    cy.wait(20000);


  }
  )
  it('Global site', () => {

   cy.visit('https://bsscommerce.com/contact')
   cy.get('.btn-consent-deny').should('contain','Deny');
   cy.get('.btn-consent-deny').click;
    
  }
  )