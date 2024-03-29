/// <reference types= "cypress"/>

describe('Validar tela de boas vindas', ()=> {
  
    beforeEach(() => {
        cy.visit('/')
        cy.login()

    })

    it('validar presenca de texto explicativo', ()=> {
        cy.get('.cont-bemvindo > p')
        .should('have.text', ' Escolha a melhor análise com base em suas necessidades e obtenha orientações claras do que fazer. Você está a um passo de destravar todo potencial de gestão da sua empresa! ')
        
    })
    
    it('validar presenca de botoes para analise agil', ()=> {
        cy.contains('p', 'Análise Guia').should('have.text', 'Análise Guia')
        cy.contains('span', 'Faça grátis sua Análise Guia').should('have.text', 'Faça grátis sua Análise Guia')
        cy.contains('button', ' Fazer analise ').should('have.text', ' Fazer analise ')
        cy.contains('button','Faça grátis sua Análise Guia ').should('have.text', 'Faça grátis sua Análise Guia ')


    })

    it('validar presenca de planos na tela', ()=> {
        cy.get('.planos').children().its('length').should('be.gt', 0)
        cy.get(':nth-child(1) > .sub-title > h1').scrollIntoView()
        .should('be.visible')
        cy.get(':nth-child(2) > .sub-title > h1').should('be.visible')
        cy.get(':nth-child(3) > .sub-title > h1').should('be.visible')
        cy.get(':nth-child(4) > .sub-title > h1').should('be.visible')
        

    })

    it('validar info do plano operacional', () => {
        cy.scrollPLanos()
        cy.get('#plan-0 > .sub-title > h1').should('have.text', ' Plano Operacional ')
        cy.get('#plan-0 > .sub-title > .value > h3').should('have.text', ' R$ 97.9 ')
        cy.get('#plan-0 > .sub-title > .benefits > :nth-child(1) > span').should('have.text', ' Análise Guia ')
        cy.get('#plan-0 > .sub-title > .benefits > :nth-child(2) > span').should('have.text', ' Usuários Ilimitados ')
        cy.get('#plan-0 > .sub-title > .benefits > :nth-child(3) > span').should('have.text', ' Análises Ilimitadas ')
        cy.get('#plan-0 > .sub-title > .benefits > :nth-child(4) > span').should('have.text', ' Análise Processual ')

    })

    it('validar info do plano tatico', () => {
        cy.scrollPLanos()
        cy.get('#plan-1 > .sub-title > h1').should('have.text', ' Plano Tático ')
        cy.get('#plan-1 > .sub-title > .value > h3').should('have.text', ' R$ 197.9 ')
        cy.get('#plan-1 > .sub-title > .benefits > :nth-child(1) > span').should('have.text', ' Análise Guia ')
        cy.get('#plan-1 > .sub-title > .benefits > :nth-child(2) > span').should('have.text', ' Usuários Ilimitados ')
        cy.get('#plan-1 > .sub-title > .benefits > :nth-child(3) > span').should('have.text', ' Análises Ilimitadas ')
        cy.get('#plan-1 > .sub-title > .benefits > :nth-child(4) > span').should('have.text', ' Análise Operacional ')
        cy.get('#plan-1 > .sub-title > .benefits > :nth-child(5) > span').should('have.text', ' Análise Processual ')

    })

    it('validar info do plano estrategico', () => {
        cy.scrollPLanos()
        cy.get('#plan-2 > .sub-title > h1').should('have.text', ' Plano Estratégico ')
        cy.get('#plan-2 > .sub-title > .value > h3').should('have.text', ' R$ 297.9 ')
        cy.get('#plan-2 > .sub-title > .benefits > :nth-child(1) > span').should('have.text', ' Análise Guia ')
        cy.get('#plan-2 > .sub-title > .benefits > :nth-child(2) > span').should('have.text', ' Usuários Ilimitados ')
        cy.get('#plan-2 > .sub-title > .benefits > :nth-child(3) > span').should('have.text', ' Análises Ilimitadas ')
        cy.get('#plan-2 > .sub-title > .benefits > :nth-child(4) > span').should('have.text', ' Análise Operacional ')
        cy.get('#plan-2 > .sub-title > .benefits > :nth-child(5) > span').should('have.text', ' Análise Processual ')
        cy.get('#plan-2 > .sub-title > .benefits > :nth-child(6) > span').should('have.text', ' Acesso Histórico de Análises ')

    })

    it('validar info do plano 360', () => {
        cy.scrollPLanos()
        cy.get('#plan-3 > .sub-title > h1').should('have.text', ' Plano 360º ')
        cy.get('#plan-3 > .sub-title > .value > h3').should('have.text', ' R$ 397.9 ')
        cy.get('#plan-3 > .sub-title > .benefits > :nth-child(1) > span').should('have.text', ' Usuários Ilimitados ')
        cy.get('#plan-3 > .sub-title > .benefits > :nth-child(2) > span').should('have.text', ' Análises Ilimitadas ')
        cy.get('#plan-3 > .sub-title > .benefits > :nth-child(3) > span').should('have.text', ' Análise Operacional ')
        cy.get('#plan-3 > .sub-title > .benefits > :nth-child(4) > span').should('have.text', ' Análise Processual ')
        cy.get('#plan-3 > .sub-title > .benefits > :nth-child(5) > span').should('have.text', ' Análise Setorial ')
        cy.get('#plan-3 > .sub-title > .benefits > :nth-child(6) > span').should('have.text', ' Painel Competitividade ')
        cy.get('#plan-3 > .sub-title > .benefits > :nth-child(7) > span').should('have.text', ' Acesso Histórico de Análises ')
        cy.get('#plan-3 > .sub-title > .benefits > :nth-child(8) > span').should('have.text', ' Análise Guia ')          

    })


})



