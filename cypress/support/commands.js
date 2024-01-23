// ***********************************************


Cypress.Commands.add('login', () => {
    cy.get('#mat-input-0').type('joyedak421@rentaen.com')
    cy.get('#mat-input-1').type('P@ssw0rd')
    cy.contains('button', 'Entrar').click()
    cy.get('a > .ng-star-inserted').should('be.visible')
    cy.title().should('eq', 'Dekodi')
})

Cypress.Commands.add('loginNewUser', () => {
    cy.get('#mat-input-0').type('dafocox592@wuzak.com')
    cy.get('#mat-input-1').type('P@ssw0rd')
    cy.contains('button', 'Entrar').click()
    cy.get('a > .ng-star-inserted').should('be.visible')
    cy.title().should('eq', 'Dekodi')
})


Cypress.Commands.add('scrollPLanos', () => {
    cy.get(':nth-child(1) > .sub-title > h1').scrollIntoView()
        .should('be.visible')
})

Cypress.Commands.add('editarDados', () => {
    cy.get('app-root app-header .mat-mdc-menu-trigger').click()
    cy.get('.mat-mdc-menu-content > :nth-child(4)').click()
    

})

Cypress.Commands.add('scrollSalvar', () => {
    cy.get('.justify-end > .mat-button').scrollIntoView()
        .should('be.visible')
})



Cypress.Commands.add('historico', () => {
    const historico = 'p:contains("Histórico")'
    cy.get(historico).click()
    cy.get('.historico > h1').should('have.text', 'Histórico')
})

Cypress.Commands.add('responderAleatorio', () => {
    const finalizar = 'button:contains(" Finalizar ")';
    cy.get('.cont-bemvindo > .mat-button').click()
    cy.gerarNomeAnalise()
    cy.get('label[for="mat-radio-32-input"]').click()
    cy.get('label[for="mat-radio-38-input"]').click()
    cy.get('label[for="mat-radio-44-input"]').click()
    cy.get('label[for="mat-radio-51-input"]').click()
    cy.get('label[for="mat-radio-57-input"]').click()
    cy.get('label[for="mat-radio-64-input"]').click()
    cy.get('label[for="mat-radio-72-input"]').click()
    cy.get('label[for="mat-radio-74-input"]').click()
    cy.get('label[for="mat-radio-80-input"]').click()
    cy.get('label[for="mat-radio-90-input"]').click()
    cy.get('label[for="mat-radio-95-input"]').click()
    cy.get('label[for="mat-radio-100-input"]').click()
    cy.get('label[for="mat-radio-104-input"]').click()
    cy.get('label[for="mat-radio-112-input"]').click()
    cy.get('label[for="mat-radio-117-input"]').click()
    cy.get('label[for="mat-radio-123-input"]').click()
    cy.get('label[for="mat-radio-128-input"]').click()
    cy.get('label[for="mat-radio-137-input"]').click()
    cy.get('label[for="mat-radio-142-input"]').click()
    cy.get('label[for="mat-radio-147-input"]').click()
    cy.get('label[for="mat-radio-152-input"]').click()
    cy.get('label[for="mat-radio-159-input"]').click()
    cy.get('label[for="mat-radio-165-input"]').click()
    cy.get('label[for="mat-radio-173-input"]').click()
    cy.get('label[for="mat-radio-180-input"]').click()
    cy.get('label[for="mat-radio-185-input"]').click()
    cy.get('label[for="mat-radio-188-input"]').click()
    cy.get('label[for="mat-radio-194-input"]').click()
    cy.get('label[for="mat-radio-202-input"]').click()
    cy.get('label[for="mat-radio-206-input"]').click()
    cy.get('label[for="mat-radio-214-input"]').click()
    cy.get(finalizar).click().wait(2000)
    
})

Cypress.Commands.add('questionarioSetorial', () => {
    const finalizar = 'button:contains(" Finalizar ")';
    cy.get('.cont-bemvindo > .mat-button').click()
    cy.gerarNomeAnalise()
    //pergunta 1
    cy.get('#mat-radio-254 > .mdc-form-field').click()
    //pergunta 2
    cy.get('#mat-radio-259 > .mdc-form-field').click()
    //pergunta 3
    cy.get('#mat-radio-266 > .mdc-form-field').click()
    //pergunta 4
    cy.get('#mat-radio-269 > .mdc-form-field').click()
    //pergunta 5
    cy.get('#mat-radio-277 > .mdc-form-field').click()
    //pergunta 6
    cy.get('#mat-radio-284 > .mdc-form-field').click()
    //pergunta 7
    cy.get('#mat-radio-290 > .mdc-form-field').click()
    //pergunta 8
    cy.get('#mat-radio-296 > .mdc-form-field').click()
    //pergunta 9
    cy.get('#mat-radio-297 > .mdc-form-field').click()
    //pergunta 10
    cy.get('#mat-radio-308 > .mdc-form-field').click()
    //pergunta 11
    cy.get('#mat-radio-314 > .mdc-form-field').click()
    //pergunta 12
    cy.get('#mat-radio-320 > .mdc-form-field').click()
    //pergunta 13
    cy.get('#mat-radio-326 > .mdc-form-field').click()
    //pergunta 14
    cy.get('#mat-radio-332 > .mdc-form-field').click()
    //pergunta 15
    cy.get('#mat-radio-338 > .mdc-form-field').click()
    //pergunta 16
    cy.get('#mat-radio-344 > .mdc-form-field').click()
    //pergunta 17
    cy.get('#mat-radio-350 > .mdc-form-field').click()
    //pergunta 18
    cy.get('#mat-radio-355 > .mdc-form-field').click()
    //pergunta 19
    cy.get('#mat-radio-357 > .mdc-form-field').click()
    //pergunta 20
    cy.get('#mat-radio-368 > .mdc-form-field').click()
    //pergunta 21
    cy.get('#mat-radio-374 > .mdc-form-field').click()
    //pergunta 22
    cy.get('#mat-radio-380 > .mdc-form-field').click()
    //pergunta 23
    cy.get('#mat-radio-386 > .mdc-form-field').click()
    //pergunta 24
    cy.get('#mat-radio-392 > .mdc-form-field').click()
    //pergunta 25
    cy.get('#mat-radio-396 > .mdc-form-field').click()
    //pergunta 26
    cy.get('#mat-radio-404 > .mdc-form-field').click()
    //pergunta 27
    cy.get('#mat-radio-410 > .mdc-form-field').click()
    //pergunta 28
    cy.get('#mat-radio-413 > .mdc-form-field').click()
    //pergunta 29
    cy.get('#mat-radio-418 > .mdc-form-field').click()
    //pergunta 30
    cy.get('#mat-radio-428 > .mdc-form-field').click()
    //pergunta 31
    cy.get('#mat-radio-430 > .mdc-form-field').click()
    cy.get(finalizar).click().wait(2000)
    
})



  Cypress.Commands.add('gerarCEPSP', () => {
    const faker = require('faker');
      const primeiroDigito = '0'; // Primeiro dígito não pode ser zero
      const segundoDigito = '2';
      const terceiroDigito = '7';
      const quartoDigito = '6';
      const quintoDigito = '0';
      const sextoDigito = '0';
      const setimoDigito = '6';
      const demaisDigitos = Cypress._.random(1000000, 9999999).toString().padStart(7, '0');
      const cepCompleto = `${primeiroDigito}${segundoDigito}${terceiroDigito}${quartoDigito}${quintoDigito}${sextoDigito}${setimoDigito}${demaisDigitos.substr(5, 3)}`;

      cy.get('input[placeholder="CEP"][id="mat-input-7"]').type(cepCompleto)
      return undefined;
      
    })

    Cypress.Commands.add('gerarNomeAnalise', () => {
        const faker = require('faker');
        // Utilizar Faker.js para gerar um nome fictício
        const nomeAnalise = faker.random.word();
        cy.get('#mat-input-2').wait(1000)
        .type(nomeAnalise)
        cy.get('.actions > .mat-button').should('be.visible')
        .click()
        // Retornar o nome gerado
        return undefined;
      })

      Cypress.Commands.add('deslogar', ()=> {
        const sair = 'p:contains("Sair")';
        cy.get('.name.flex').click()
        cy.get(sair).click()
        cy.title().should('eq', 'Dekodi')
      })

      Cypress.Commands.add('alterarSenha', () => {
        const alterarSenha = 'p:contains("Alterar senha")'
        cy.visit('/')  //abre a pagina principal do site
        cy.login()
        cy.get('app-root app-header .mat-mdc-menu-trigger').click()
        cy.get(alterarSenha).should('be.visible').click()
      })

     

      

   
      
      
      

