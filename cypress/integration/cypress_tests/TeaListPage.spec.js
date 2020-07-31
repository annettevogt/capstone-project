describe('Test TeaListPage Page', () => {
  it('visits TeaListPage', () => {
    cy.visit('http://localhost:3000/tealistpage')
  })
  it('scans InputNewTea Page', () => {
    cy.contains('TasTEA').should('be.visible')
    cy.contains('Hier gekauft:').should('be.visible')
  })
  it('clicks the button', () => {
    cy.get('[data-cy="submit"]').click()
  })
})
