// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach(function () {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function () {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {
        cy.get('#firstName').type('Danilo')
        cy.get('#lastName').type('Costa')
        cy.get('#email').type('danilodscosta1@gmail.com')
        cy.get('#open-text-area').type('Teste')
        cy.get('button[type="submit"]').click
    })
})