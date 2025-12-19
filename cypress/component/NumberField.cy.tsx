import { NumberField } from '../../src/components/fields'

describe('NumberField', () => {
  it('renders with required label', () => {
    cy.mount(<NumberField label="Test Label" />)
    cy.get('label').contains('Test Label').should('be.visible')
  })

  it('has number input type', () => {
    cy.mount(<NumberField label="Test Label" />)
    cy.get('input').should('have.attr', 'type', 'number')
  })

  it('supports min, max, and step props', () => {
    cy.mount(<NumberField label="Test Label" min={0} max={100} step={5} />)
    cy.get('input').should('have.attr', 'min', '0')
      .and('have.attr', 'max', '100')
      .and('have.attr', 'step', '5')
  })

  it('shows loading skeleton when loading prop is true', () => {
    cy.mount(<NumberField label="Test Label" loading />)
    cy.get('label').should('not.exist')
    cy.get('[data-testid="skeleton"]').should('have.length.greaterThan', 0)
  })
})