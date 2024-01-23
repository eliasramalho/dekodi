describe('validar funcionalidade login', ()=> {

    beforeEach(() => {
        cy.visit('/')
    })

    it('web esta on line', ()=> {
        cy.title().should('eq', 'Dekodi')
    })

    it('acessar pagina de cadastro', ()=> {
        cy.contains('span', 'Cadastre-se gratuitamente').click()
        cy.get('p').should('have.text', ' Informe seu email para continuar ')
    })
 
    it('acessar esqueci senha', ()=> {
        cy.contains('a', 'Esqueci minha senha').click()
    cy.contains('button', 'Continuar').should('be.visible')
    cy.get('p').should('have.text', ' Informe seu email para continuar ')

    })

    it('login com dados em branco', ()=> {
        cy.contains('button', 'Entrar').click()
        cy.get('#mat-mdc-error-0').should('have.text', 'Campo de preenchimento obrigatório ')
        cy.get('#mat-mdc-error-1').should('have.text', 'Campo de preenchimento obrigatório ')

    })

    it('login com email invalido', ()=> {
        cy.get('#mat-input-0').type('test2.com')
        cy.get('#mat-input-1').type('P@ssw0rd123')
        cy.contains('button', 'Entrar').click()
        cy.get('#mat-mdc-error-0').should('have.text', 'E-mail inválido ')
       

    })

    it('login com senha invalida', ()=> {
        cy.get('#mat-input-0').type('dekodiglobal@gmail.com')
        cy.get('#mat-input-1').type('P@ssw0rd123456')
        cy.contains('button', 'Entrar').click()
        cy.get('#mat-mdc-error-1').should('have.text', 'Senha inválida ')
        

    })

    it('login com sucesso', ()=> {
       cy.login()
        
    })


  
    

})