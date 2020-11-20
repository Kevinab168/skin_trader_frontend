// https://docs.cypress.io/api/introduction/api.html


describe('Registration Page', () => {
  it('Visits the registration page', () => {
    cy.visit('/accounts/signup')
    cy.get('[data-test="username"]').should('exist')
    cy.get('[data-test="password"]').should('exist')
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

  it('Logs in the user', () => {
    cy.visit('/accounts/login')
    cy.get('[data-test="username"]').type('test')
    cy.get('[data-test="password"]').type('test')
    cy.get('[data-test="loginBtn"]').click()
    cy.get('[data-test="logout"]').should('exist')
    cy.get('[data-test="userLoginStatus"]').should('exist')
  })
})

describe('Logout', () => {
  it('Logs out the User', () => {
    cy.login()
    cy.visit('/')
    cy.get('[data-test="logout"]').click()
    cy.get('[data-test="logoutMsg"]').contains('logged out')
  })
})

describe('Navigation', () => {
  it('Checks the existence of links to unregistered user', () => {
    cy.visit('/')
    cy.get('[data-test="home-link"]').should('exist')
    cy.get('[data-test="register-link"]').should('exist')
    cy.get('[data-test="login-link"]').should('exist')
  })

  it ('Checks the existence of links to registered user', () => {
    cy.login()
    cy.visit('/')
    cy.get('[data-test="register-link"]').should('not.exist')
    cy.get('[data-test="login-link"]').should('not.exist')
    cy.get('[data-test="logout"]').should('exist')
    cy.get('[data-test="userLoginStatus"]').should('exist')
  })
})