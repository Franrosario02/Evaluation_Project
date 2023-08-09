const fistName = () => {
    return cy.get('#firstName')
}
const lastName = () => {
    return cy.get('#lastName')
}
const dateOfBirth = () => {
    return cy.get('#birthdate')
}
const emailContact = () => {
    return cy.get('#email')
}
const phoneContact = () => {
    return cy.get('#phone')
}
const streetAddress = () => {
    return cy.get('#street1')
}
const streetAddress2 = () => {
    return cy.get('#street2')
}
const cityContact = () => {
    return cy.get('#city')
}
const stateOfProvince = () => {
    return cy.get('#stateProvince')
}
const postalCode = () => {
    return cy.get('#postalCode')
}
const countryContact = () => {
    return cy.get('#country')
}
const submitContactButton = () => {
    return cy.get('#submit')
}
const cancelContactButton = () => {
    return cy.get('#cancel')
}

const goToCreateContact = () => {
    return cy.get('#add-contact')
}

export default {
    fistName,
    lastName,
    dateOfBirth,
    emailContact,
    phoneContact,
    streetAddress,
    streetAddress2,
    cityContact,
    stateOfProvince,
    postalCode,
    countryContact,
    submitContactButton,
    cancelContactButton,
    goToCreateContact
}