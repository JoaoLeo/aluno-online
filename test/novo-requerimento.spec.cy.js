describe('Teste de Requerimento', () => {
  it('Preenchimento do formulário', () => {
    cy.visit('http://localhost:3000/requerimentos/novo')
    cy.get('#inputDisciplina').select('ADS030 - Manutenção de Software e DevOps') 
    cy.get('#inputProva').select('A1')
    cy.get('#inputArgumentacao').type('Este é um requerimento de teste e2e.')
    cy.get('button[type="submit"]').click()
  })
})
