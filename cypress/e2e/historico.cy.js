describe('Validar tela historico', () => {

    beforeEach(()=>{
        cy.visit('/');
        
    })
   
    it('acessar historico', ()=> {
        cy.login()
        cy.historico()
        
        cy.get('.historico > h1').should('have.text', 'Histórico')
    })

    it('filtro vazio', ()=> {
        cy.get('#mat-input-0').type('jicag74409@tsderp.com')
        cy.get('#mat-input-1').type('P@ssw0rd')
        cy.contains('button', 'Entrar').click()
        cy.historico()
        cy.get('.historico > h1').should('have.text', 'Histórico')
        cy.get('#mat-select-value-3').click()
        cy.get('#mat-option-1').click()
        cy.get('.content-no-analisys > p').should('have.text', 'Você ainda não tem análises disponíveis. Faça a sua primeira análise grátis agora mesmo!')

    })
    

    it('historico vazio', ()=> {
        cy.loginNewUser()
        cy.historico()
        cy.get('.content-no-analisys > p').should('have.text', 'Você ainda não tem análises disponíveis. Faça a sua primeira análise grátis agora mesmo!')
       

    })

    it('iniciar analise a partir do historico', ()=>{
        const titulo = '.box-title > h1'
        cy.login()
        cy.historico()
        cy.get('.mat-button').click()
        cy.get(titulo).should('have.text', 'Faça agora a análise grátis com o questionário Freemium!')


    })
    
    it('modal nome da analise', ()=>{
        const titulo = '.box-title > h1'
        cy.login()
        cy.historico()
        cy.get('.mat-button').click()
        cy.get(titulo).should('have.text', 'Faça agora a análise grátis com o questionário Freemium!')
        cy.get('h2').should('have.text', 'Antes de começar, dê um nome à sua análise.')

    })

   




})