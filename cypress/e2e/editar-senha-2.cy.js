/// <reference types= "cypress"/>
const faker = require('faker');

describe('fluxo de sucesso', () => {
    
    //elementos da tela de editar senha
    const msgErro = '#mat-mdc-error-3'
    const senhaAtual = '#mat-input-2'
    const novaSenha = '#mat-input-3'
    const confSenha = '#mat-input-4'
    const continuar = '.cont-btn > .mat-button'

    it('alterar senha com sucesso', () => {
        cy.visit('/')  //abre a pagina principal do site
        cy.get('#mat-input-0').type('lafotoh133@wuzak.com')
        cy.get('#mat-input-1').type('P@ssw0rd')
        cy.contains('.mat-button', 'Entrar').click()
        cy.get('.name').click()
        cy.contains('.mat-mdc-menu-content > :nth-child(3)', 'Alterar senha').wait(1000).should('be.visible').click()
        cy.get(senhaAtual).type('P@ssw0rd')
        cy.get(novaSenha).type('P@ssw0rd123')
        cy.get(confSenha).type('P@ssw0rd123')
        cy.get(continuar).click().wait(1000)
        cy.get('.mat-mdc-simple-snack-bar > .mat-mdc-snack-bar-label').should('be.visible').wait(1000)
        cy.get('.name').click()
        cy.get('p:contains("Sair")').click()
        cy.get('#mat-input-5').should('be.visible')
            .type('lafotoh133@wuzak.com')
        cy.get('#mat-input-6').type('P@ssw0rd123')
        cy.get('.mat-button').click().wait(1000)
        cy.title().wait(2000).should('eq', 'Dekodi')

    })

    it('confirmar alteracao de senha', () => {
        cy.visit('/')  //abre a pagina principal do site
        cy.get('#mat-input-0').type('lafotoh133@wuzak.com')
        cy.get('#mat-input-1').type('P@ssw0rd123')
        cy.contains('.mat-button', 'Entrar').click()
        cy.get('.name').click()
        cy.contains('.mat-mdc-menu-content > :nth-child(3)', 'Alterar senha').wait(1000).should('be.visible').click()
        cy.get(senhaAtual).type('P@ssw0rd123')
        cy.get(novaSenha).type('P@ssw0rd')
        cy.get(confSenha).type('P@ssw0rd')
        cy.get(continuar).click().wait(1000)
        cy.get('.mat-mdc-simple-snack-bar > .mat-mdc-snack-bar-label').should('be.visible').wait(2000)

    })

})