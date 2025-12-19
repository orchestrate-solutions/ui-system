import { DateField } from '../../src/components/fields'

describe('DateField', () => {
  it('renders with required label', () => {
    cy.mount(<DateField label="Test Label" />)
    cy.get('label').contains('Test Label').should('be.visible')
  })

  it('shows loading skeleton when loading prop is true', () => {
    cy.mount(<DateField label="Test Label" loading />)
    cy.get('label').should('not.exist')
    cy.get('[data-testid="skeleton"]').should('have.length.greaterThan', 0)
  })

  it('has date input type', () => {
    cy.mount(<DateField label="Test Label" />)
    cy.get('input').should('have.attr', 'type', 'date')
  })

  it('has shrink label for date input', () => {
    cy.mount(<DateField label="Test Label" />)
    cy.get('.MuiInputLabel-root').should('have.class', 'MuiInputLabel-shrink')
  })

  it('accepts and displays value', () => {
    cy.mount(<DateField label="Test Label" value="2023-12-18" />)
    cy.get('input').should('have.value', '2023-12-18')
  })

  it('shows error state', () => {
    cy.mount(<DateField label="Test Label" error helperText="Error message" />)
    cy.contains('Error message').should('be.visible')
  })

  it('inherits theme styles', () => {
    cy.mount(<DateField label="Test Label" />)
    cy.get('.MuiTextField-root').should('be.visible')
  })
})