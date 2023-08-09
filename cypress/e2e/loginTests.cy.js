import bodyValidation from "./Components/bodyValidation"

describe('Login Tests', () => {
  beforeEach(() => {
      cy.visit('/login')
      cy.fixture('users').then((user) =>{
        globalThis.email = user[0].email
        globalThis.password = user[0].password
      })
  })

  it('Login - Successfully', () => {
      cy.login(email,password)
  })
})