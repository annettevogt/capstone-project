describe('My First Test', () => {
  it('Visits InputNewTea Page via Button on tealistpage', () => {
    cy.visit('http://localhost:3000/tealistpage')
    cy.contains('TasTEA')
    cy.contains('Hier gekauft')
  })
})

// Ich könnte testen, ob etwas in der teas.json ankommt,
// also auf der Seite TeaListPage, wenn ich etwas in die Eingabefelder eingebe.
