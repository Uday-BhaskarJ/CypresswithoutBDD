import loginLocators from '../../../cypress/cypress/fixtures/LoginLocoators/repository.json'
import config from '../../../cypress/cypress/fixtures/config.json'
describe('cura make Appointment',function(){
  it('visit the URL',function(){
     cy.visit(config.baseUrl)
  })

  it('Click on Make Appointment',function(){

    cy.get('#btn-make-appointment').click();

  })

  it('Verify Login',function(){

    cy.get(loginLocators.Login_Page.username).type('John Doe');
    cy.get(loginLocators.Login_Page.password).type('ThisIsNotAPassword');
    cy.get(loginLocators.Login_Page.sign_in).click();


  })
  
  it('Make Appointment',function(){
  cy.get('select').select('Hongkong CURA Healthcare Center')
  cy.get('#chk_hospotal_readmission').click();
  cy.get('#radio_program_medicaid').click();
  cy.get('#txt_visit_date').type('30/03/2023');
  cy.get('#radio_program_medicaid').click();
  cy.get('#txt_comment').type('Making an Appointment');
  cy.get('#btn-book-appointment').click();

  })

  it('Verify Appointment',function(){

    cy.get('h2').contains('Appointment Confirmation');
    cy.get('#comment').contains('Making an Appointment')
  })

  
})