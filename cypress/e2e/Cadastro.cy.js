import { faker, fakerPT_BR } from '@faker-js/faker'
import { cpf } from 'cpf-cnpj-validator';

describe('Cadastro de usuário - AESOP', () => {
  it('Preenchimento de todos os campos', () => {
    // Navega para a URL da Aesop
    cy.visit('https://www.aesop.com.br/')
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get('.natds5 > .MuiButtonBase-root > .MuiIconButton-label > .material-icons').click();
    cy.wait(2000)
    cy.get('.natds112 > .MuiTypography-body2 > .MuiTypography-root').click();
    cy.wait(2000)
    // Primeiro Nome
    cy.get(':nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(faker.name.firstName());
    // Segundo Nome
    cy.get(':nth-child(1) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(faker.name.lastName());
    // E-mail
    cy.get('.natds269 > :nth-child(2) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(faker.person.gender())
    // Colocar Senha
    cy.get('#password-field').type(faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/, prefix: 'Hello ' }))
    // Repetir a Senha
    cy.get('#confirmPassword-field').type(faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/, prefix: 'Hello ' }))
    // CPF
    cy.get(':nth-child(3) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('795.808.980-57');
    cy.get('.MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .natds315').click();
    // Data de nascimento
    cy.get(':nth-child(4) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(faker.date.past().toLocaleDateString());
    // Numero de Telefone
    cy.get(':nth-child(4) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(faker.phone.number());
    cy.get('#receiveNewsLetter').click();
    cy.get('#infContOptIn').click();
    cy.get('#acceptedterms').click();
    cy.get('.natds324 > .MuiButtonBase-root > .MuiButton-label').click();
  
  });

describe('Cadastro de usuário - Natura', () => {
  it('Preenchimento de todos os campos', () => {
    // Navega para a URL da Natura
    cy.visit('https://www.natura.com.br/')
    cy.wait(2000)
    cy.get('#onetrust-accept-btn-handler').click()
    cy.wait(2000)
    cy.get('.natds5 > .MuiButtonBase-root > .MuiIconButton-label > .material-icons').click()
    cy.wait(2000)
    cy.get('.natds156.MuiTypography-body2 > .MuiTypography-root').click()
    // Primeiro Nome
    cy.get('.natds156.MuiTypography-body2 > .MuiTypography-root').type(faker.name.firstName());
    // Segundo Nome
    cy.get('.natds575 > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(faker.name.lastName());
    // Email
    cy.get('.natds580 > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(faker.person.gender())
    // Inserir a senha
    cy.get('#password-field').type(faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/, prefix: 'Hello ' }))
    // Repetir a senha
    cy.get('#confirmPassword-field').type(faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/, prefix: 'Hello ' }))
    // CPF
    cy.get('.natds619 > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('087.681.820-31')
    // Data de Nascimento
    cy.get('.natds623 > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(faker.date.past().toLocaleDateString());
    cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .natds588').click()
    // Telefone
    cy.get('.natds642 > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(faker.phone.number());
    // Whatsapp
    cy.get('.natds648 > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(faker.phone.number());
    cy.get('#acceptedterms').click()

  });
 });
});