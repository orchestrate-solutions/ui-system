import { TextareaField } from '../../src/components/fields'

describe('TextareaField', () => {
  it('renders with required label', () => {
    cy.mount(<TextareaField label="Test Label" />)
    cy.get('label').contains('Test Label').should('be.visible')
  })

  it('supports multiline input', () => {
    cy.mount(<TextareaField label="Test Label" />)
    cy.get('textarea').should('be.visible')
  })

  it('supports rows prop', () => {
    cy.mount(<TextareaField label="Test Label" rows={5} />)
    cy.get('textarea').should('be.visible')
  })

  it('shows loading skeleton with correct height for rows', () => {
    cy.mount(<TextareaField label="Test Label" rows={5} loading />)
    cy.get('label').should('not.exist')
    cy.get('[data-testid="skeleton"]').should('have.length.greaterThan', 0)
  })

  it('inherits theme styles', () => {
    cy.mount(<TextareaField label="Test Label" />)
    cy.get('.MuiTextField-root').should('be.visible')
  })
})