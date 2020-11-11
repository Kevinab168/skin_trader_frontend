// https://docs.cypress.io/api/introduction/api.html


describe('Registration Page', () => {
  it('Visits the registration page', () => {
    cy.visit('/accounts/signup')
    cy.get('[data-test="username"]').should('exist')
    cy.get('[data-test="password"]').should('exist')
    cy.get('[data-test="email"]').should('exist')
    cy.get('[data-test="first-name"]').should('exist')
    cy.get('[data-test="last-name"]').should('exist')
    cy.get('[data-test="submit-btn"]').should('exist')
  })

})

describe('Login Page', () => {
  it('Visits the login  page', () => {
    cy.visit('/accounts/login')
    cy.get('[data-test="username"]').should('exist')
    cy.get('[data-test="password"]').should('exist')
    cy.get('[data-test="loginBtn"]').should('exist')
  })
})