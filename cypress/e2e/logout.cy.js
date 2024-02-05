import faker from 'faker-br';

describe('Validar funcionalidade logout', () => {
    var name = faker.name.firstName();
    var name2 = faker.name.lastName();
    const numero = faker.random.number({ min: 1, max: 999 })

    beforeEach(() => {
        cy.visit('/')
        cy.get('#mat-input-0').type('vopowo6026@wentcity.com')
        cy.get('#mat-input-1').type('P@ssw0rd')
        cy.contains('button', 'Entrar').click()
        cy.get('a > .ng-star-inserted').should('be.visible')
        cy.title().should('eq', 'Dekodi')
    })

    it('realizar logout', () => {
        cy.deslogar()

    })

    it('redirecionamento apos logout', () => {
        cy.get('.cont-bemvindo > .mat-button').click().wait(2000)
        cy.gerarNomeAnalise()
        cy.get('#mat-radio-32-input').click()
        cy.get('#mat-radio-38-input').click().wait(1000)
        cy.deslogar()

    })

    it('logout com quesionario em andamento ', () => {
        cy.get('.cont-bemvindo > .mat-button').click().wait(2000)
        cy.gerarNomeAnalise()
        cy.get('label[for="mat-radio-32-input"]').click()
        cy.get('label[for="mat-radio-38-input"]').click().wait(1000)
        cy.deslogar().wait(1000)
        cy.get('#mat-input-3').type('vopowo6026@wentcity.com')
        cy.get('#mat-input-4').type('P@ssw0rd')
        cy.get('.mat-button').click().wait(1000)
        cy.historico()
        cy.get(':nth-child(1) > .btn-analise > .btn-analises').click()
        cy.get('#mat-radio-249-input').should('be.checked')
        cy.get('#mat-radio-255-input').should('be.checked')
        cy.get('#mat-radio-261-input').should('not.be.checked')


    })

    it('logout apos editar nome do usuario', () => {
        cy.editarDados()
        cy.get('#usuarioForm_nome').wait(1000).type('{selectall}{backspace}').clear()
            .type(name + '  ' + name2)
        cy.get('.justify-end > .mat-button').click()
        cy.get('.content > p').should('be.visible')
        cy.scrollSalvar()
        cy.get('.actions > .mat-button').click().wait(1000)
        cy.get('app-root app-header .mat-mdc-menu-trigger').click()
        cy.contains('p', 'Sair').click()
        cy.get('#mat-input-13').type('vopowo6026@wentcity.com')
        cy.get('#mat-input-14').type('P@ssw0rd')
        cy.get('.mat-button').click().wait(1000)
        cy.editarDados()
        cy.get('#usuarioForm_nome').should('have.value', name + '  ' + name2)


    })

    it('logout apos editar telefone do usuario', () => {
        const telefone = faker.phone.phoneNumber('(11) 9 ####-####');

        cy.editarDados()
        cy.get('#usuarioForm_telefone').wait(2000)
            .type('{selectall}').clear()
        cy.get('#usuarioForm_telefone').click().type(telefone)
        cy.get('.justify-end > .mat-button').click()
        cy.get('.content > p').should('be.visible')
        cy.scrollSalvar()
        cy.get('.actions > .mat-button').click()
<<<<<<< HEAD
        cy.get('div[aria-haspopup="menu"]').click()
=======
        cy.get('.mat-mdc-menu-trigger > .name').click()
>>>>>>> 987fdad0509ba6a2080d7cc1e05bcd28551a27a0
        cy.contains('p', 'Sair').click({ force: true })
        cy.get('#mat-input-13').type('vopowo6026@wentcity.com')
        cy.get('#mat-input-14').type('P@ssw0rd')
        cy.get('.mat-button').click().wait(2000)
        cy.editarDados()
        cy.get('#usuarioForm_telefone').should('have.value', telefone)

    })

    it('logout apos editar cep da empresa', () => {
        cy.editarDados()
        cy.get('#empresaForm_cep').wait(2000).type('{selectall}').clear().type('04533000').wait(1000)
        cy.get('#empresaForm_numero').click().type('{selectall}').clear().type(numero).wait(1000)
        cy.get('#empresaForm_numero').type(numero).wait(1000)
        cy.get('.justify-end > .mat-button').click()
        cy.get('.content > p').should('be.visible')
        cy.scrollSalvar()
        cy.get('.actions > .mat-button').click().wait(1000)
        cy.get('div[aria-haspopup="menu"]').click()
        cy.contains('p', 'Sair').click()
        cy.get('#mat-input-13').type('vopowo6026@wentcity.com')
        cy.get('#mat-input-14').type('P@ssw0rd')
        cy.get('.mat-button').click().wait(2000)
        cy.editarDados()
        cy.get('#empresaForm_cep').should('have.value', '04533-000')
        cy.get('#empresaForm_numero').should('have.value', numero)

    })

    it('logout apos editar nome da empresa', () => {
        const nomeEmpresa = faker.company.companyName();

        cy.editarDados()
        cy.get('#empresaForm_nome').wait(1000)
            .type('{selectall}{backspace}').clear().wait(2000)
            .type(nomeEmpresa)
        cy.get('.justify-end > .mat-button').click().wait(1000)
        cy.get('.content > p').should('be.visible')
        cy.scrollSalvar()
        cy.get('.actions > .mat-button').click().wait(2000)
        cy.get('div[aria-haspopup="menu"]').click()
        cy.contains('p', 'Sair').click()
        cy.get('#mat-input-13').type('vopowo6026@wentcity.com')
        cy.get('#mat-input-14').type('P@ssw0rd')
        cy.get('.mat-button').click().wait(2000)
        cy.editarDados()
        cy.get('#empresaForm_nome').should('have.value', nomeEmpresa)

    })

    describe('novo usuario', () => {

        beforeEach(() => {
            cy.visit('/')
            cy.get('#mat-input-0').type('cahogiv954@wuzak.com')
            cy.get('#mat-input-1').type('P@ssw0rd')
            cy.contains('button', 'Entrar').click().wait(2000)
            cy.editarDados()
        })

        it('empresa ja cadastrada', () => {
            cy.get('#mat-input-5').type('20802434000112').wait(1000)
            cy.get('#empresaForm_faturamento > .mat-mdc-select-trigger').click()
            cy.get('#mat-mdc-error-5').should('be.visible')
                .should('have.text', 'Empresa já cadastrada. ')
            cy.get('div[aria-haspopup="menu"]').scrollIntoView().wait(1000)
            cy.get('div[aria-haspopup="menu"]').click({ force: true })
            cy.contains('p', 'Sair').click()
            cy.get('#mat-input-13').type('cahogiv954@wuzak.com')
            cy.get('#mat-input-14').type('P@ssw0rd')
            cy.contains('button', 'Entrar').click().wait(2000)
            cy.editarDados()
            cy.get('#mat-input-18').type('20802434000112').wait(1000)
            cy.get('#empresaForm_faturamento > .mat-mdc-select-trigger').click()
            cy.get('#mat-mdc-error-20').should('be.visible')
                .should('have.text', 'Empresa já cadastrada. ')

        })
    })


})
