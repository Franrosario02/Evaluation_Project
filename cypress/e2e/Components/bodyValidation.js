import PageElements from "../../fixtures/enums/PageElements"


const titleVal = () => {
    return cy.get('h1')
}

const bodyText = () => {
    return cy.get('body > :nth-child(2)')
}

const bodyText2 = () => {
    return cy.get('body > :nth-child(3)')
}

const loginText = () => {
    return cy.get('body > :nth-child(3)')
}

const noUserText = () => {
    return cy.get('.main-content > :nth-child(4)')
}

const singUpButton = () => {
    return cy.get('#signup')
}

const bodyVal = () => {
    cy.hasText(titleVal(), PageElements.texts.titleVal)
    cy.hasText(bodyText(), PageElements.texts.textBody)
    cy.hasText(bodyText2(), PageElements.texts.textoBody2)
    cy.hasText(loginText(), PageElements.texts.textLogin)
    cy.hasText(noUserText(), PageElements.texts.textBody3)
}

export default {
    bodyVal
}