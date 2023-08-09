import ContactFiles from "./Components/ContactFiles"

describe (('Add a New Contact'), () => {
    
    
    beforeEach(() => {
        cy.visit('/login')
        cy.fixture('users').then((user) =>{
          globalThis.email = user[0].email
          globalThis.password = user[0].password
          cy.login(email,password)
          ContactFiles.goToCreateContact().click()
        })
    }) 

    it(('Create a new contact'), () => {
        cy.fixture('contactData').then(contactD => {
            ContactFiles.fistName().type(contactD.name)
            ContactFiles.lastName().type(contactD.lastNam)
            ContactFiles.dateOfBirth().type(contactD.birth)
            ContactFiles.emailContact().type(contactD.cEmail)
            ContactFiles.phoneContact().type(contactD.phone)
            ContactFiles.streetAddress().type(contactD.street1)
            ContactFiles.streetAddress2().type(contactD.street2)
            ContactFiles.cityContact().type(contactD.city)
            ContactFiles.stateOfProvince().type(contactD.state)
            ContactFiles.postalCode().type(contactD.pcode)
            ContactFiles.countryContact().type(contactD.country)
            ContactFiles.cancelContactButton().should('exist')
            ContactFiles.submitContactButton().click()

        })
    })













})