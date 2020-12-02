// https://docs.cypress.io/api/introduction/api.html



describe('Home Page', () => {
  it('Goes to the Welcome', () => {
    cy.visit('/welcome')
    cy.get('[data-test="welcome-message"]').should('exist')
    cy.get('[data-test="welcome-message-subtitle"]').should('exist')
    cy.get('[data-test="welcome-signup"]').should('exist')
    cy.get('[data-test="welcome-message-image"]').should('exist')
    cy.get('[data-test="service-description"]').should('exist')
    cy.get('[data-test="license-information"]').should('exist')
    cy.get('[data-test="contact-information"]').should('exist')
    cy.get('[data-test="highlighted-feature"]').should('exist')
  }), 

  it('Goes to the HomePage and clicks the signup button', () => {
    cy.visit('/welcome')
    cy.get('[data-test="welcome-signup"]').click()
    cy.url().should('eq', 'http://localhost:8080/accounts/signup')
  })
})



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
    cy.registerTestUser()
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
    cy.registerTestUser()
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
    cy.registerTestUser()
    cy.login()
    cy.visit('/')
    cy.get('[data-test="register-link"]').should('not.exist')
    cy.get('[data-test="login-link"]').should('not.exist')
    cy.get('[data-test="logout"]').should('exist')
    cy.get('[data-test="userLoginStatus"]').should('exist')
  })
})