/// <reference types="cypress" />

describe('Cenários de Login Positivos e Negativos', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login com sucesso', () => {
    cy.get('#username').type('student')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()
    cy.get('.post-title').should('contain', 'Logged In Successfully')
  })

  it('Login com usuário inválido', () => {
    cy.get('#username').type('usuario_inválido')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()
    cy.get('#error.show').should('contain', 'Your username is invalid!')
  })

  it('Login com senha inválida', () => {
    cy.get('#username').type('student')
    cy.get('#password').type('senha_inválida')
    cy.get('#submit').click()
    cy.get('#error.show').should('contain', 'Your password is invalid!')
  })

  it('Login com usuário em branco', () => {
    cy.get('#password').type('Password123')
    cy.get('#submit').click()
    cy.get('#error.show').should('contain', 'Your username is invalid!')
  })

  it('Login com senha em branco', () => {
    cy.get('#username').type('student')
    cy.get('#submit').click()
    cy.get('#error.show').should('contain', 'Your password is invalid!')
  })
})