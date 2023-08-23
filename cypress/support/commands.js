Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Renato')
    cy.get('#lastName').type('Augusto')
    cy.get('#email').type('ra8@email.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
})
