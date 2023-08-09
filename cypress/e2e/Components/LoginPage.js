const emailInput = () => {
   return cy.get('#email')
}

const passwordInput = () => {
   return cy.get('#password')
}

const submitButton = () => {
   return cy.get('#submit')
}

export default {
    emailInput,
    passwordInput,
    submitButton
}