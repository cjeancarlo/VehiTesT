/// <reference types="Cypress" />

context('test list types of Vehicules', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200').wait(2000)
  })

  it('Header test', () => {
    cy.get('.mat-toolbar > :nth-child(2)')
    .contains('The Traffic Meister')
})

  it('Test List Vehicle Type ', () => {

    cy.get('[data-cy-id^=vehicle-type-]')
      .should('have.length', 3);
     
    cy.get('[data-cy-id=vehicle-type-0]')
      .click(); 

    // simulate click event on the drop down item (mat-option)
    cy.get('[data-cy-id=vehicle-type-0]')
      .contains('car');

      cy.get('[data-cy-id^=vehicle-brand-]')
      .should('have.length', 4);

    cy.get('[data-cy-id^=grid-card-]')
      .should('have.length', 4);

    cy.get('[data-cy-id=vehicle-brand-0]')
      .contains('Bugatti Veyron');

      
      //deselect type
      cy.get('[data-cy-id=vehicle-type-0]')
      .click().wait(500); 

      //select train
      cy.get('[data-cy-id=vehicle-type-2]')
      .click();

      
      cy.get('[data-cy-id^=vehicle-brand-]')
      .should('have.length', 4);

    cy.get('[data-cy-id^=grid-card-]')
      .should('have.length', 4);


      


  })

  it('Test List Vehicle Brand', () => {
    //emulate click on brand list
    cy.get('[data-cy-id=vehicle-brand-0]')
      .click(); 

    cy.get('[data-cy-id=vehicle-type-0]')
    .contains('car')

    cy.get('[data-cy-id^=vehicle-type-]')
      .should('have.length', 1);
    
      cy.get('[data-cy-id^=grid-card-]')
      .should('have.length', 1);

    cy.get('[data-cy-id=vehicle-brand-0]')
      .contains('Bugatti Veyron');
    
      //deselect brand
    cy.get('[data-cy-id=vehicle-brand-0]')
      .click(); 

      cy.get('[data-cy-id=vehicle-brand-3]')
      .click(); 

      cy.get('[data-cy-id^=vehicle-brand-]')
      .should('have.length', 1);

      cy.get('[data-cy-id^=grid-card-]')
      .should('have.length', 1);

      cy.get('[data-cy-id=vehicle-brand-0]')
      .contains('Porsche Carrera GT');

  })

  it('Test List Vehicle Color', () => {
    
    cy.get('[data-cy-id^=vehicle-color-]')
  .should('have.length', 8);

  cy.get('[data-cy-id=vehicle-color-7]').click();

  cy.get('[data-cy-id^=vehicle-brand-]')
  .should('have.length', 2);

  cy.get('[data-cy-id^=vehicle-type-]')
  .should('have.length', 1);

  cy.get('[data-cy-id^=grid-card-]')
  .should('have.length', 2);
  //deselect color
  cy.get('[data-cy-id=vehicle-color-0]').click();

  //select black color
  cy.get('[data-cy-id=vehicle-color-1]').click();

  cy.get('[data-cy-id=vehicle-color-0]')
  .contains('black');

  cy.get('[data-cy-id^=grid-card-]')
  .should('have.length', 6);
  
  cy.get('[data-cy-id^=vehicle-type-]')
  .should('have.length', 3);

  cy.get('[data-cy-id^=vehicle-brand-]')
  .should('have.length', 6);

  cy.get('[data-cy-id=vehicle-type-1]').click();

  cy.get('[data-cy-id=vehicle-type-0]')
  .contains('airplane');

  cy.get('[data-cy-id^=grid-card-]')
  .should('have.length', 1);

  })

  it('Test Mobile View', () => {

    cy.viewport('samsung-s10').wait(1000);
  
    cy.get('[data-cy-id=vehicle-filter]').then(e => {
//      console.log(e.css( "flex-direction" ))

      expect(e.css( "flex-direction" )).contain('column');
    })
  
});
  
})
