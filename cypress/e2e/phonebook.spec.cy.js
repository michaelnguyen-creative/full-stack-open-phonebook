describe('phonebook app', () => {
  it('displays data from server', () => {
    cy.visit('https://damp-morning-4577.fly.dev/')
    cy.contains('Michael Nguyen').should('be.visible')
    // cy.get('.contact-info').should('be.visible')
  })
})