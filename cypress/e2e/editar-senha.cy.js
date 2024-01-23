/// <reference types= "cypress"/>
const faker = require('faker');



describe('Validar funcionalidade Editar senha', () => {
    const gerarSenha = senhaAleatoria()
    //elementos da tela de editar senha
    const msgErro = '#mat-mdc-error-3'
    const senhaAtual = '#mat-input-2'
    const novaSenha = '#mat-input-3'
    const confSenha = '#mat-input-4'
    const continuar = '.cont-btn > .mat-button'

    // funcao para gerar senha alatoria
    function senhaAleatoria() {
        const senha = faker.internet.password(8, false, /[A-Z]/, /[0-9]/, /[\W_]/);
        return senha;
    }

    beforeEach(() => {
        cy.alterarSenha()
    })


    it('acessar menu de edicao de senha', () => {
        cy.get('.modal > h1').should('have.text', 'Defina uma senha, para sua segurança não compartilhe com ninguém')
        cy.get(senhaAtual).should('be.visible')
        cy.get(novaSenha).should('be.visible')
        cy.get(confSenha).should('be.visible')
        cy.get(continuar).should('be.visible')

    })

    it('campos de preenchimento obrigatorio', () => {
        cy.get(senhaAtual).click()
        cy.get(novaSenha).click()
        cy.get(confSenha).click()
        cy.get(novaSenha).click()
        cy.get('#mat-mdc-error-2').should('have.text', 'Campo de preenchimento obrigatório ')
        cy.get('#mat-mdc-error-3').should('have.text', 'Campo de preenchimento obrigatório ')
        cy.get('#mat-mdc-error-4').should('have.text', 'Campo de preenchimento obrigatório ')

    })

    it('senhas diferentes', () => {
        cy.get(senhaAtual).type('P@ssw0rd')
        cy.get(novaSenha).type(gerarSenha + '${@}')
        cy.get(confSenha).type(gerarSenha + '${#}')
        cy.get(novaSenha).click()
        cy.get('#mat-mdc-error-4').should('have.text', 'Senhas não correspondem ')

    })

    it('senha antiga invalida', () => {
        cy.get(senhaAtual).type('P@ssw0rd123')
        cy.get(novaSenha).type('Teste123$')
        cy.get(confSenha).type('Teste123$')
        cy.get(continuar).click()
        cy.get('.content > p').should('have.text', 'Senha Inválida')

    })

    it('senha antiga e nova senha igual', () => {
        cy.get(senhaAtual).type('P@ssw0rd')
        cy.get(novaSenha).type('P@ssw0rd')
        cy.get(confSenha).type('P@ssw0rd')
        cy.get(continuar).click().wait(1000)
        cy.get('.content > p').should('have.text', 'Nova senha não pode ser igual a senha atual')

    })

    it('senha sem 8 digitos', () => {
        cy.get(senhaAtual).type('P@ssw0rd')
        cy.get(novaSenha).type('P@ssw0r')
        cy.get(confSenha).type('P@ssw0r')
        cy.get(msgErro).should('have.text', 'Número mínimo de caracteres 8 ')
        cy.get('.incorrect').should('not.be.checked')

    })

    it('senha sem letra maiuscula', () => {
        cy.get(senhaAtual).type('P@ssw0rd')
        cy.get(novaSenha).type('teste!123')
        cy.get(confSenha).type('teste!123')
        cy.get(msgErro).should('have.text', 'Digite ao menos uma letra maiúscula ')
        cy.get('.incorrect').should('not.be.checked')

    })

    it('senha sem numeral', () => {
        cy.get(senhaAtual).type('P@ssw0rd')
        cy.get(novaSenha).type('teste!Teste')
        cy.get(confSenha).type('teste!Teste')
        cy.get(msgErro).should('have.text', 'Digite um número ')
        cy.get('.incorrect').should('not.be.checked')

    })

    it('senha sem um caractere especial', () => {
        cy.get(senhaAtual).type('P@ssw0rd')
        cy.get(novaSenha).type('teste1Teste')
        cy.get(confSenha).type('teste1Teste')
        cy.get(msgErro).should('have.text', 'Digite ao menos um caracter especial ')
        cy.get('.incorrect').should('not.be.checked')

    })


})