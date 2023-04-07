describe('phonebook app', () => {
  it('displays data from server', () => {
    cy.visit('http://localhost:3001')
    cy.contains('Michael Nguyen').should('be.visible')
    // cy.get('.contact-info').should('be.visible')
  })
})