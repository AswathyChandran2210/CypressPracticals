/// <reference types ="cypress"/>
it('WriteFile', () => {
//creating file and writing the lines to the file
cy.writeFile('FirstFile.txt','First Line\n');
//adding morethan one lines
cy.writeFile('FirstFile.txt','Second Line\n',{flag:'a+'});
//setting the flag to to append the two lines
cy.writeFile('FirstFile.txt','Lengthy Line kjkkkjkjkjkjkjkkjuuyuyuoioiooiioidfddfdrtrtrtrtsdtffhhyddjadgggdtswhsdjssjssjssjsj\t\t ',{flag:'a+'})
cy.writeFile('FirstFile.txt', 'Fourth Line',{flag:'a+'})
//writing the file to the fixtures json file
cy.writeFile('C:\\CY_Project\\cypress\\fixtures\\example.json',{

    student_name:'Sneha',
    class:2,
    mark:50,
    flower:'lotus',

})

}
)
//reading the FirstFile.txt
it('ReadFile', () => 
{

    cy.readFile('FirstFile.txt').should('exist').and('contain','Second');
    //reading the file
    //loading the fixture file
    cy.fixture('example.json').then((studentdetils)=>{
        expect(studentdetils.student_name).eq('Sneha');
        expect(studentdetils.class).eq(2);
        expect(studentdetils.mark).eq(50);
    })


}
)
it('Googlefile', () =>
{

//launching the site
cy.visit('https://www.google.co.in/');
//loading the json file file and reading the data from the file
cy.fixture('example.json').then((studentdetils)=>{
    //waiting for some times
    cy.wait(30000)
    cy.get('#APjFqb').type(studentdetils.flower);
    cy.writeFile('Destinationfile.json',{
       
        Flower1:studentdetils.flower,

    })

})
})
it('Webscrapping', () =>
{
        
})