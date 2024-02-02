// Comandos customizados


Cypress.Commands.add('login', () => {
  cy.get('#mat-input-0').type('migex21134@tsderp.com')
  cy.get('#mat-input-1').type('P@ssw0rd')
  cy.contains('button', 'Entrar').click()
  cy.title().should('eq', 'Dekodi')

})

Cypress.Commands.add('loginNewUser', () => {
  cy.get('#mat-input-0').type('dafocox592@wuzak.com')
  cy.get('#mat-input-1').type('P@ssw0rd')
  cy.contains('button', 'Entrar').click()
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
  cy.get('label[for="mat-radio-214-input"]').click().wait(1000)
  cy.get(finalizar).click().wait(1000)

})

Cypress.Commands.add('questionarioSetorial', () => {
  const finalizar = 'button:contains(" Finalizar ")';

  cy.get('.cont-bemvindo > .mat-button').click()
  cy.gerarNomeAnalise()
  cy.get('label[for="mat-radio-37-input"]').click()
  cy.get('label[for="mat-radio-42-input"]').click()
  cy.get('label[for="mat-radio-49-input"]').click()
  cy.get('label[for="mat-radio-52-input"]').click()
  cy.get('label[for="mat-radio-60-input"]').click()
  cy.get('label[for="mat-radio-67-input"]').click()
  cy.get('label[for="mat-radio-73-input"]').click()
  cy.get('label[for="mat-radio-79-input"]').click()
  cy.get('label[for="mat-radio-80-input"]').click()
  cy.get('label[for="mat-radio-91-input"]').click()
  cy.get('label[for="mat-radio-97-input"]').click()
  cy.get('label[for="mat-radio-103-input"]').click()
  cy.get('label[for="mat-radio-109-input"]').click()
  cy.get('label[for="mat-radio-115-input"]').click()
  cy.get('label[for="mat-radio-121-input"]').click()
  cy.get('label[for="mat-radio-127-input"]').click()
  cy.get('label[for="mat-radio-133-input"]').click()
  cy.get('label[for="mat-radio-138-input"]').click()
  cy.get('label[for="mat-radio-140-input"]').click()
  cy.get('label[for="mat-radio-151-input"]').click()
  cy.get('label[for="mat-radio-157-input"]').click()
  cy.get('label[for="mat-radio-163-input"]').click()
  cy.get('label[for="mat-radio-169-input"]').click()
  cy.get('label[for="mat-radio-175-input"]').click()
  cy.get('label[for="mat-radio-179-input"]').click()
  cy.get('label[for="mat-radio-187-input"]').click()
  cy.get('label[for="mat-radio-193-input"]').click()
  cy.get('label[for="mat-radio-196-input"]').click()
  cy.get('label[for="mat-radio-201-input"]').click()
  cy.get('label[for="mat-radio-211-input"]').click()
  cy.get('label[for="mat-radio-213-input"]').click().wait(1000)
  cy.get(finalizar).click().wait(2000)

})

Cypress.Commands.add('questionarioOperacional', () => {
  const finalizar = 'button:contains(" Finalizar ")';

  cy.get('.cont-bemvindo > .mat-button').click()
  cy.gerarNomeAnalise()
  cy.get('label[for="mat-radio-32-input"]').click()
  cy.get('label[for="mat-radio-42-input"]').click()
  cy.get('label[for="mat-radio-49-input"]').click()
  cy.get('label[for="mat-radio-55-input"]').click()
  cy.get('label[for="mat-radio-60-input"]').click()
  cy.get('label[for="mat-radio-67-input"]').click()
  cy.get('label[for="mat-radio-73-input"]').click()
  cy.get('label[for="mat-radio-79-input"]').click()
  cy.get('label[for="mat-radio-85-input"]').click()
  cy.get('label[for="mat-radio-91-input"]').click()
  cy.get('label[for="mat-radio-97-input"]').click()
  cy.get('label[for="mat-radio-103-input"]').click()
  cy.get('label[for="mat-radio-109-input"]').click()
  cy.get('label[for="mat-radio-115-input"]').click()
  cy.get('label[for="mat-radio-121-input"]').click()
  cy.get('label[for="mat-radio-127-input"]').click()
  cy.get('label[for="mat-radio-133-input"]').click()
  cy.get('label[for="mat-radio-138-input"]').click()
  cy.get('label[for="mat-radio-145-input"]').click()
  cy.get('label[for="mat-radio-151-input"]').click()
  cy.get('label[for="mat-radio-157-input"]').click()
  cy.get('label[for="mat-radio-163-input"]').click()
  cy.get('label[for="mat-radio-169-input"]').click()
  cy.get('label[for="mat-radio-175-input"]').click()
  cy.get('label[for="mat-radio-179-input"]').click()
  cy.get('label[for="mat-radio-187-input"]').click()
  cy.get('label[for="mat-radio-193-input"]').click()
  cy.get('label[for="mat-radio-194-input"]').click()
  cy.get('label[for="mat-radio-201-input"]').click()
  cy.get('label[for="mat-radio-211-input"]').click()
  cy.get('label[for="mat-radio-217-input"]').click().wait(1000)
  cy.get(finalizar).click().wait(1000)

})

Cypress.Commands.add('questionarioProcessual', () => {
  const finalizar = 'button:contains(" Finalizar ")';

  cy.get('.cont-bemvindo > .mat-button').click()
  cy.gerarNomeAnalise()
  cy.get('label[for="mat-radio-37-input"]').click()
  cy.get('label[for="mat-radio-38-input"]').click()
  cy.get('label[for="mat-radio-44-input"]').click()
  cy.get('label[for="mat-radio-55-input"]').click()
  cy.get('label[for="mat-radio-60-input"]').click()
  cy.get('label[for="mat-radio-67-input"]').click()
  cy.get('label[for="mat-radio-73-input"]').click()
  cy.get('label[for="mat-radio-79-input"]').click()
  cy.get('label[for="mat-radio-85-input"]').click()
  cy.get('label[for="mat-radio-91-input"]').click()
  cy.get('label[for="mat-radio-97-input"]').click()
  cy.get('label[for="mat-radio-103-input"]').click()
  cy.get('label[for="mat-radio-109-input"]').click()
  cy.get('label[for="mat-radio-115-input"]').click()
  cy.get('label[for="mat-radio-121-input"]').click()
  cy.get('label[for="mat-radio-127-input"]').click()
  cy.get('label[for="mat-radio-133-input"]').click()
  cy.get('label[for="mat-radio-138-input"]').click()
  cy.get('label[for="mat-radio-145-input"]').click()
  cy.get('label[for="mat-radio-151-input"]').click()
  cy.get('label[for="mat-radio-157-input"]').click()
  cy.get('label[for="mat-radio-163-input"]').click()
  cy.get('label[for="mat-radio-169-input"]').click()
  cy.get('label[for="mat-radio-175-input"]').click()
  cy.get('label[for="mat-radio-179-input"]').click()
  cy.get('label[for="mat-radio-187-input"]').click()
  cy.get('label[for="mat-radio-193-input"]').click()
  cy.get('label[for="mat-radio-194-input"]').click()
  cy.get('label[for="mat-radio-201-input"]').click()
  cy.get('label[for="mat-radio-211-input"]').click()
  cy.get('label[for="mat-radio-213-input"]').click().wait(1000)
  cy.get(finalizar).click().wait(1000)

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

Cypress.Commands.add('deslogar', () => {
  const sair = 'p:contains("Sair")';
  cy.get('.name.flex').click()
  cy.get(sair).click()
  cy.title().should('eq', 'Dekodi')

})

Cypress.Commands.add('alterarSenha', () => {
  const alterarSenha = 'p:contains("Alterar senha")'
  cy.visit('/')  //abre a pagina principal do site
  cy.get('#mat-input-0').type('raniyi3735@wuzak.com')
  cy.get('#mat-input-1').type('P@ssw0rd')
  cy.contains('button', 'Entrar').click()
  cy.get('app-root app-header .mat-mdc-menu-trigger').click()
  cy.get(alterarSenha).should('be.visible').click()

})
