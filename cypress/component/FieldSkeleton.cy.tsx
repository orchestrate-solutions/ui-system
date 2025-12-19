import { FieldSkeleton } from '../../src/components/fields'

describe('FieldSkeleton', () => {
  it('renders main skeleton rectangle', () => {
    cy.mount(<FieldSkeleton />)
    cy.get('[data-testid="skeleton"]').should('have.length', 1)
      .and('have.class', 'MuiSkeleton-rectangular')
  })

  it('renders label and helper text when requested', () => {
    cy.mount(<FieldSkeleton showLabel showHelperText />)
    cy.get('[data-testid="skeleton"]').should('have.length', 3)
    cy.get('[data-testid="skeleton"]').first().should('have.class', 'MuiSkeleton-text')
    cy.get('[data-testid="skeleton"]').eq(1).should('have.class', 'MuiSkeleton-rectangular')
    cy.get('[data-testid="skeleton"]').last().should('have.class', 'MuiSkeleton-text')
  })
})