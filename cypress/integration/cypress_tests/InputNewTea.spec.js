describe('My First Test', () => {
  it('Visits InputNewTea Page via Button on InputNewTea', () => {
    cy.visit('http://localhost:3000/inputnewtea')
    cy.contains('TasTEA')
    cy.get('.name').type('Lieblingstee-Test')
    cy.get('.pointPurchase').type('Bioladen Macis, Leipzig')
    cy.get('.description').type('Teebeschreibung von Lieblingstee-Test')
    cy.get('.button').contains('Add').should('be.visible').click()
    cy.contains('Hier gekauft')
  })
})

// Ich könnte testen, ob etwas in der teas.json ankommt,
// also auf der Seite TeaListPage, wenn ich etwas in die Eingabefelder eingebe.
