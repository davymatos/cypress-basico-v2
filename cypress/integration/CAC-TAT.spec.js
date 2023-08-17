// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    it('preenche os campos obrigatórios e envia o formulário', function() {
        cy.get('#firstName').should('be.visible').type('Renato').should('have.value', 'Renato')
        cy.get('#lastName').should('be.visible').type('Augusto').should('have.value', 'Augusto')
        cy.get('#email').should('be.visible').type('ra8@email.com').should('have.value', 'ra8@email.com')
        cy.get('#phone').should('be.visible').type('11988888888').should('have.value', '11988888888')
        cy.get('#open-text-area').should('be.visible').type('Teste').should('have.value', 'Teste')
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })
  }) 