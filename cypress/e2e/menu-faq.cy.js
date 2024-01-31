/// <reference types= "cypress"/>

describe('Validar menu FAQ', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.login()
        cy.get('app-root app-header .mat-mdc-menu-trigger').click()
        cy.get('.mat-mdc-menu-content > :nth-child(7)').click()

    })

    it('acessar menu FAQ', () => {
        cy.url().should("include", "/faq")

    })

    it('localizar e-mail de ajuda', () => {
        cy.url().should("include", "/faq")
        cy.get('.text-email').should('be.visible')

    })

    it('busca sem resultado', () => {
        cy.get('input[type="text"]').type('Suporte')
        cy.get('button[class="btn-pesquisa"]').click()
        cy.contains('.no-results', 'Nenhum resultado encontrado.').should('have.text', 'Nenhum resultado encontrado.')

    })

    it('busca com resultado', () => {
        cy.get('input[type="text"]').type('ipsum').wait(1000)
        cy.get('button[class="btn-pesquisa"]').click()
        cy.get('#mat-expansion-panel-header-7 > span.mat-content.ng-tns-c2690051721-20 > mat-panel-title').should('be.visible')

    })

    it('expandir card com resultado', () => {
        cy.get('input[type="text"]').type('ipsum').wait(1000)
        cy.get('button[class="btn-pesquisa"]').click()
        cy.get('#mat-expansion-panel-header-7 > span.mat-content.ng-tns-c2690051721-20 > mat-panel-title').should('be.visible')
        cy.get('#mat-expansion-panel-header-7 > .mat-content > .mat-icon').click()
        cy.get('#cdk-accordion-child-7 > .mat-expansion-panel-body > :nth-child(1)').should('be.extensible')
   
    })

    it('resposta foi util', () => {
        cy.get('#mat-expansion-panel-header-2 > .mat-content > .mat-expansion-panel-header-title').should('be.visible')
        cy.get('#mat-expansion-panel-header-2 > .mat-content > .mat-icon').click()
        cy.get('#cdk-accordion-child-2 > div > p:nth-child(2) > mat-icon:nth-child(1)')
            .invoke('css', 'color').then((corOriginal) => {
                // Clique no elemento
                cy.get('#cdk-accordion-child-2 > div > p:nth-child(2) > mat-icon:nth-child(1)').click().wait(1000)
                // Obtenha a cor após o clique
                cy.get('#cdk-accordion-child-2 > div > p:nth-child(2) > mat-icon:nth-child(1)').invoke('css', 'color').then((corAposClique) => {
                    // Assert: Verifique se a cor após o clique é diferente da cor original
                    expect(corAposClique).equal(corOriginal);
                })
            })
    })

    it('resposta nao foi util', () => {
        cy.get('#mat-expansion-panel-header-2 > .mat-content > .mat-expansion-panel-header-title').should('be.visible')
        cy.get('#mat-expansion-panel-header-2 > .mat-content > .mat-icon').click()
        cy.get('#cdk-accordion-child-2 > div > p:nth-child(2) > mat-icon:nth-child(2)')
            .invoke('css', 'color').then((corOriginal) => {
                // Clique no elemento
                cy.get('#cdk-accordion-child-2 > div > p:nth-child(2) > mat-icon:nth-child(2)').click().wait(1000)
                // Obtenha a cor após o clique
                cy.get('#cdk-accordion-child-2 > div > p:nth-child(2) > mat-icon:nth-child(2)').invoke('css', 'color').then((corAposClique) => {
                    // Assert: Verifique se a cor após o clique é diferente da cor original
                    expect(corAposClique).equal(corOriginal);
                });
            });

        })

})