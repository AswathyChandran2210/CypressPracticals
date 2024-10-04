/// <reference types ="cypress"/>
it('WriteUserInfo',() => {

   
    //writing the login information
    cy.writeFile('C:\\CY_Project\\cypress\\fixtures\\UserDetails.json',{

        UserName:'Heera11',
        Password:'Heera33',
    })
})
function MyLogin()
    {
     
    //visiting the website
     cy.visit('https://petstore.octoperf.com/actions/Catalog.action');
     cy.wait(500);
    //Reading 5000the information from the UserDetails.json and assign
    //Logging in
    //cy.get('[href="/actions/Account.action;jsessionid=D656719C60CDC4F5B41C1E81E004C033?signonForm="]').click()
    cy.contains('Sign In').click();
    //Loading the file and reading information
    cy.fixture('UserDetails').then((LoginInfo)=>
    {
            
           //waiting the element to get visisble
            //cy.wait(1000);
            //Assigning the username to the input fields
            cy.wait(500);
            cy.get('[name="username"]').clear();
            cy.get('[name="username"]').type(LoginInfo.UserName);
            //Assigining password 
            cy.wait(500);
            cy.get('[name="password"]').clear();
            cy.get('[name="password"]').type(LoginInfo.Password);
            //Signing in
            cy.wait(500);
            cy.get('[name="signon"]').click();
            cy.wait(500);
            cy.contains('My Account').click();
           cy.wait(500);
           cy.get(':nth-child(1) > :nth-child(2) > input').invoke('text').then((text1)=>
           {
                expect(text1).eq('Heera');
            })
           
            cy.contains('Sign Out').click();
        
})

    }
it('Login',() => 
{
    
    MyLogin();
   
})
it('Search',() =>{
      
    //calling login function
    MyLogin();
    //Clicking the search text box
    cy.get('[size="14"]').type('Angel{Enter}');
    //back to home page
    cy.get('#BackLink > a').click();
    cy.wait(500);
    //clicking the cat lists
    cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=CATS"] > img').click();
    cy.screenshot();
    cy.scrollTo("bottom");

    
    
   
})

    

