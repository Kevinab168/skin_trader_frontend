// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => { 
    cy.request({
      method: 'POST',
      url: 'http://localhost:80/api/token-auth/',
      body: {
          username: 'test',
          password: 'test',
      }
    })
    .then((resp) => {
        window.localStorage.setItem('credentials', JSON.stringify({
            username: 'test',
            token: resp.body.token,
        }))
    })
  
  })

  Cypress.Commands.add('registerTestUser', () => {
      cy.request({
          method: 'POST',
          url: 'http://localhost:80/api/users/',
          body: {
              username: 'test',
              password: 'test',
          }
      })
  })