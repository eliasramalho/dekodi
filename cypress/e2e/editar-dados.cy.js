/// <reference types= "cypress"/>

import faker from 'faker-br';

describe('Validar funcionalidade Edicao de Dados', () => {
    faker.locale = 'pt_BR';
    const numero = faker.random.number({ min: 1, max: 999 })
    const telefone = faker.phone.phoneNumber('(11) 9####-####')
    const msgSucesso = 'div:contains("Cadastro alterado com sucesso")'
    const resultado = ' Cadastro alterado com sucesso\n Cadastro alterado com sucesso\n Cadastro alterado com sucesso\n Cadastro alterado com sucesso\n Cadastro alterado com sucesso\n Cadastro alterado com sucesso\n Cadastro alterado com sucesso\n Cadastro alterado com sucesso\n'
    var name = faker.name.firstName();
    var name2 = faker.name.lastName();

    beforeEach(() => {
        cy.visit('/')
        cy.login()
        cy.editarDados()

    })

    it('acessar edicao de dados', () => {
        const meusDados = 'h1:contains("Meus dados")'

        cy.get(meusDados).should('be.visible')
            .should('have.text', 'Meus dados Preencha todos os seu dados e os dados da empresa.')

    })

    it('remover foto', () => {
        cy.get('.outline-light').click()
        cy.get('.box-avatar > .name').should('have.value', '')

    })

    it('editar foto', () => {
        const fileName = '/yoda.png';

        cy.contains('button',' Editar').click()
        cy.get('input[type=file]').attachFile(fileName).wait(1000);
        cy.get('.actions > .mat-button').click()
        cy.get('.info > .name').should('be.visible')

    })

    it('editar nome', () => {
        const msgSucesso = 'div:contains("Cadastro alterado com sucesso")'
        const resultado = ' Cadastro alterado com sucesso\n Cadastro alterado com sucesso\n Cadastro alterado com sucesso\n Cadastro alterado com sucesso\n Cadastro alterado com sucesso\n Cadastro alterado com sucesso\n Cadastro alterado com sucesso\n Cadastro alterado com sucesso\n'

        cy.wait(1000)
        cy.get('#usuarioForm_nome').wait(1000).type('{selectall}{backspace}').clear()
            .type(name + '  ' + name2)
        cy.get('.justify-end > .mat-button').click({force: true})
        cy.get('.content > p').should('be.visible')
        cy.scrollSalvar()
        cy.get('.actions > .mat-button').click()
        cy.get(msgSucesso).should('be.visible')
            .should('have.text', resultado)

    })

    it('editar telefone', () => {
        cy.get('#usuarioForm_telefone').wait(2000)
            .type('{selectall}').clear()
        cy.get('#usuarioForm_telefone').click().type(telefone)
        cy.get('.justify-end > .mat-button').click({force: true})
        cy.get('.content > p').should('be.visible')
        cy.scrollSalvar()
        cy.get('.actions > .mat-button').click()
        cy.get(msgSucesso).should('be.visible')
            .should('have.text', resultado)
        cy.get('#usuarioForm_telefone').should('be.visible')

    })


    it('editar cep da empresa', () => {
        cy.get('#empresaForm_cep').wait(1000).type('{selectall}').clear()
            .type('04533000')
        cy.get('#usuarioForm_telefone').wait(1000)
            .type('{selectall}').clear()
        cy.get('#usuarioForm_telefone').click().type(telefone)
        cy.get('#empresaForm_numero').wait(1000).click().type('{selectall}').clear()
            .type(numero)
        cy.get('.justify-end > .mat-button').click().wait(1000)
        cy.get('.content > p').should('be.visible')
        cy.scrollSalvar()
        cy.get('.actions > .mat-button').click().wait(1000)
        cy.get(msgSucesso).should('be.visible')
            .should('have.text', resultado)

    })

    it('editar nome da empresa', () => {
        const nomeEmpresa = faker.company.companyName();

        cy.get('#empresaForm_nome').type(nomeEmpresa)
        cy.get('#empresaForm_complemento').wait(1000).type('{selectall}').clear().type('teste')
        cy.get('.justify-end > .mat-button').click().wait(1000)
        cy.get('.content > p').should('be.visible')
        cy.scrollSalvar()
        cy.get('.actions > .mat-button').click().wait(1000)
        cy.get(msgSucesso).should('be.visible')
            .should('have.text', resultado)

    })

    describe('novo usuario', () => {

        beforeEach(() => {
            cy.visit('/')
        cy.get('#mat-input-0').type('hoyat96107@wentcity.com')
        cy.get('#mat-input-1').type('P@ssw0rd')
        cy.contains('button', 'Entrar').click()
        cy.editarDados()
    
        })

        it('empresa ja cadastrada', () => {
            cy.get('#mat-input-5').type('20802434000112')
            cy.get('#empresaForm_faturamento > .mat-mdc-select-trigger').wait(1000).click() 
            cy.get('#mat-mdc-error-5').should('be.visible')
            .should('have.text', 'Empresa já cadastrada. ')

        })
    })

})
