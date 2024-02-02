const faker = require('faker');

describe('Grenciamentos de usuarios', () => {
    var name = faker.name.firstName();
    var name2 = faker.name.lastName();
    var email = faker.internet.email();

    beforeEach(() => {
        cy.visit('/')  //Acessa a página inicial do site
        cy.get('#mat-input-0').type('gisakof781@cubene.com')
        cy.get('#mat-input-1').type('P@ssw0rd')
        cy.contains('button', 'Entrar').click()
        cy.get('.name').click()
        cy.contains('p', 'Gerenciar usuários').click().wait(1000)

    })

    it('acessar tela de gerenciamento', () => {
        cy.get('.gerenciamento > h1').should('have.text', 'Gerenciamento de Usuários')

    })

    it('Validar perfil de usuario adm', () => {
        cy.get('.btn-tag-name').should('be.visible')
            .should('have.text', 'PERFIL ADMIN ')

    })

    it('acessar menu de cadastro de usuario', () => {
        const btnVoltar = 'button:contains("Voltar")'
        cy.contains('button', 'Adicionar usuário').click()
        cy.get('#mat-input-2').should('be.visible')
        cy.get('#mat-input-3').should('be.visible')
        cy.get('#mat-mdc-checkbox-1-input').should('not.be.checked')
        cy.get(btnVoltar).should('be.visible')
        cy.get('[disabled=""]').should('be.disabled')

    })

    it('cadastro com campos em branco', () => {
        cy.contains('button', 'Adicionar usuário').click()
        cy.get('#mat-input-3').click()
        cy.get('#mat-input-2').click()
        cy.get('#mat-input-3').click()
        cy.get('#mat-mdc-error-2').should('have.text', 'Campo de preenchimento obrigatório ')
        cy.get('#mat-mdc-error-3').should('have.text', 'Campo de preenchimento obrigatório ')

    })

    it('cadastro com e-mail invalido', () => {
        cy.contains('button', 'Adicionar usuário').click()
        cy.get('#mat-input-2').type(name + '  ' + name2)
        cy.get('#mat-input-3').type('123.com;')
        cy.get('#mat-input-2').click()
        cy.get('#mat-mdc-error-3').should('have.text', 'E-mail inválido ')

    })

    it('usuario ja cadastrado', () => {
        cy.contains('button', 'Adicionar usuário').click()
        cy.get('#mat-input-2').type(name + '  ' + name2)
        cy.get('#mat-input-3').type('hexemax133@cubene.com')
        cy.contains('button', 'Salvar').click()
        cy.contains('app-alert-info', 'Email já registrado')
            .should('have.text', 'Email já registrado Fechar')

    })

    describe('CRUD de usuarios', () => {



        it('adicionar usuario', () => {
            cy.contains('button', 'Adicionar usuário').click()
            cy.get('#mat-input-2').type(name + '  ' + name2)
            cy.get('#mat-input-3').type(email)
            cy.contains('button', 'Salvar').click()
            cy.get('.mat-mdc-simple-snack-bar > .mat-mdc-snack-bar-label')
                .should('have.text', ' Colaborador adicionado com sucesso\n')

        })

        it('editar nome do usuario', () => {
            cy.contains('button', 'Editar').click()
            cy.get('#mat-input-2').wait(1000).clear()
                .type(name + '  ' + name2)
            cy.contains('button', 'Salvar').click()
            cy.get('.mat-mdc-simple-snack-bar > .mat-mdc-snack-bar-label')
                .should('have.text', ' Colaborador alterado com sucesso\n')

        })

        it('editar email do usuario', () => {
            cy.contains('button', 'Editar').click()
            cy.get('#mat-input-3').wait(1000).clear()
                .type(email)
            cy.contains('button', 'Salvar').click()
            cy.get('.mat-mdc-simple-snack-bar > .mat-mdc-snack-bar-label')
                .should('have.text', ' Colaborador alterado com sucesso\n')

        })

        it('inativar usuario', () => {
            const msgSucesso = 'div:contains(" Alteração realizada com sucesso")'
            cy.contains('button', 'Inativar').click().wait(1000)
            cy.contains('button', ' Inativar').click()
            cy.get(msgSucesso).should('be.visible')
            //.should('have.text', '  Alteração realizada com sucesso\n')

        })

        it('conceder permissao de adm', () => {
            cy.contains('button', 'Editar').click()
            cy.get('input[type="checkbox"]').click()
            cy.contains('button', 'Salvar').click()
            cy.get('.mat-mdc-simple-snack-bar > .mat-mdc-snack-bar-label')
                .should('have.text', ' Colaborador alterado com sucesso\n')

        })

        it('excluir usuario', () => {
            cy.contains('button', 'Excluir').click()
            cy.contains('button', ' Excluir').click()
            cy.get('.mat-mdc-simple-snack-bar > .mat-mdc-snack-bar-label')
                .should('have.text', ' Usuario excluido com sucesso\n')

        })
    })
})
