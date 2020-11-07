// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })
})


describe('Registration Page', () => {
  it('Visits the registration page', () => {
    cy.visit('/accounts/signup')
    cy.get('[data-test="username"]').should('exist')
    cy.get('[data-test="password"]').should('exist')
    cy.get('[data-test="email"]').should('exist')
    cy.get('[data-test="first-name"]').should('exist')
    cy.get('[data-test="last-name"]').should('exist')
  })
})