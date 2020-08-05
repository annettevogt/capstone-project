describe('Test TeaList Path', () => {
  it('visits TeaList Path', () => {
    cy.visit('http://localhost:3000/tealistpage')
  })
  it('scans TeaList Path', () => {
    cy.contains('TasTEA').should('be.visible')
    cy.contains('Hier gekauft:').should('be.visible')
  })
  it('clicks the button', () => {
    cy.get('[data-cy="submit"]').click()
  })
})
