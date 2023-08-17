// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    it('preenche os campos obrigatórios e envia o formulário', function() {
        cy.get('#firstName').type('Renato')
        cy.get('#lastName').type('Augusto')
        cy.get('#email').type('ra8@email.com')
        cy.get('#phone').type('11988888888')
        cy.get('#open-text-area').type('Teste', { deley: 0 })
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })
    it.only('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })
  }) 