/// <reference types= "cypress"/>

describe('landing page', () => {

    beforeEach (() => {
        cy.visit('https://dev.dekodi.com.br/')
    })

    it('acessar a landing page', () => {

        cy.request({
            url: '/'
          }).then(response => {
            expect(response.status).to.eq(200)
          })

          cy.title().should('eq', 'Dekodi')

    })

    it('validar redirecionamento do botao Entrar', () => {
        cy.contains('button', 'Entrar').wait(100).click()
        cy.url().should('include','/login')
        
    })

    it('validar redirecionamento do botao Crie um futuro de sucesso', () => {
        cy.contains('button', 'Crie um futuro de sucesso!').wait(100).click()
        cy.url().should('include','/cadastro')
        
    })

    it('validar redirecionamento do botao Faca uma analise gratuita', () => {
        cy.contains('button', 'Faça uma análise gratuita').wait(100).click()
        cy.url().should('include','/cadastro')
        
    })

    it('validar redirecionamento do botao Fazer analise guia e receber recomendações', () => {
        cy.get('#analise-guia').wait(100).click()
        cy.url().should('include','/cadastro')
        
    })

    it('validar redirecionamento do segundo botao para Fazer analise guia e recebr recomendacoes', () => {
        cy.get('#analise').wait(100).click()
        cy.url().should('include','/cadastro')
        
    })

    it('validar redirecionamento do botao Fazer login gratuito', () => {
        cy.contains('button', 'Crie um futuro de sucesso!').wait(100).click()
        cy.url().should('include','/cadastro')
        
    })

    it('validar redirecionamento do botao Solucoes', () => {
        const text01 = '.ajuste-texto-um';
        const text02 = '.ajuste-texto-dois';
        const text03 = '.ajuste-texto-tres';
        const text04 = '.ajuste-texto-quatro';

        cy.contains('button', 'Soluções').wait(100).click()
        cy.get(text01).should('have.text', '\n                                Finanças, Oferta, Pessoas e Produção e Estratégia. Itens que fazem toda diferença no seu negócio.\n                            ')
        cy.get(text02).should('have.text', '\n                                50% das empresas fecham até os 4 anos de vida\n                            ')
        cy.get(text03).should('have.text', '\n                                Só 9,5% das médias empresas ouvidas afirmaram que possuem ações voltadas à governança do\n                                nível\n                                operacional até o estratégico\n                            ')
        cy.get(text04).should('have.text', '\n                                Conhecimento de mercado, flexibilidade e análise para encontrar em resolver problemas\n                                são\n                                caracteristicas de negócios bem sucedidos pós Pandemia\n                            ')
        
    })

    it('validar redirecionamento do botao Nossos planos', () => {
        cy.contains('button', 'Nossos planos').wait(100).click()
        cy.contains('h1', 'Plano Cortesia').should('be.visible')
        cy.contains('h1', 'Plano Operacional').should('be.visible')
        cy.contains('h1', 'Plano Tático').should('be.visible')
        cy.contains('h1', 'Plano Estratégico').should('be.visible')
        cy.contains('h1', 'Plano 360º').should('be.visible')
        
    })

    it('validar presenca de depoimentos ', ()=>{
        cy.get(':nth-child(1) > h3').should('be.visible')
        cy.get(':nth-child(2) > h3').should('be.visible')
        cy.get(':nth-child(3) > h3').should('be.visible')

    })

  
  
})