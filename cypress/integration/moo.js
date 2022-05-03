/// <reference types="Cypress" />

describe('Zenhe Automation Task', () => {

    it("log on cyress", function() {
    
    
        cy.visit('https://zenhr-master.staging2.devops.zenhr.com/en/users/sign_in');
        cy.get('[name="user[login]"]').type('tillawy@hotmail.com', {force: true} );
        cy.get('[name="user[password]"]').type('password', {force: true} );
        cy.get('[type="submit"]').click({force: true});
        cy.get('.am-toggle-left-sidebar .am-toggle-left-sidebar__icon-bar').click({force: true});
        cy.on('window:confirm', cy.stub().as('confirm'))
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
        return false
        })
 
        cy.wrap('passed').as('ctrl')
        cy.get("a:not([href*='mailto:]']").each($el => {
 
                if ($el.prop('href').length > 0) {
                    const message = $el.text()
                    expect($el, message).to.have.attr("href").not.contain("undefined")
                    cy.log($el.attr('href'))                       
                }
            })

        
        
    });
    })
    