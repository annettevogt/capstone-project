describe('Test InputNewTea Page', () => {
  it('visits InputNewTea Page', () => {
    cy.visit('http://localhost:3000/inputnewtea')
  })
  it('scans InputNewTea Page', () => {
    cy.contains('TasTEA').should('be.visible')
    cy.contains('Name des Tees:').should('be.visible')
    cy.contains('Hier gekauft:').should('be.visible')
    cy.contains('Beschreibe Deinen Lieblingstee:').should('be.visible')
  })
  it('enters a new tea and clicks the button', () => {
    cy.get('.name').type('Lieblingstee-Test')
    cy.get('.pointPurchase').type('Bioladen Macis, Leipzig')
    cy.get('.description').type('Teebeschreibung von Lieblingstee-Test')
    cy.get('.button').contains('Add').should('be.visible').click()
  })
})
