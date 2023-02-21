describe('First test in cypress', () => {
  it('cypress runs correctly', () => {
    cy.visit('https://example.cypress.io')
    cy.contains("Kitchen Sink")
    cy.contains("children").click();
    cy.url().should('contains' , 'traversal')/* dans le page de url de children que j'ai click contient le mots */
  })
  xit('app runs correctly', () => {
    cy.visit('http://localhost:3000')
    cy.get('#add-todo').type('lorem')
  })

})