import LoginPage from "../e2e/Components/LoginPage"

Cypress.Commands.add('login', (email, password) => {
    LoginPage.emailInput().should('be.empty').type(email)
    LoginPage.passwordInput().should('be.empty').type(password)
    LoginPage.submitButton().should('be.visible').click()
})

Cypress.Commands.add('hasText', (element, text) => {
    element.should('have.text', text);
})