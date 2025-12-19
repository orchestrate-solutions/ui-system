import { CheckboxField } from '../../src/components/fields'

describe('CheckboxField', () => {
  it('renders with required label', () => {
    cy.mount(<CheckboxField label="Test Label" />)
    cy.contains('Test Label').should('be.visible')
  })

  it('shows loading skeleton when loading prop is true', () => {
    cy.mount(<CheckboxField label="Test Label" loading />)
    cy.get('label').should('not.exist')
    cy.get('[data-testid="skeleton"]').should('have.length.greaterThan', 0)
  })

  it('is checked when checked prop is true', () => {
    cy.mount(<CheckboxField label="Test Label" checked />)
    cy.get('input[type="checkbox"]').should('be.checked')
  })

  it('is checked when checked prop is string "true"', () => {
    cy.mount(<CheckboxField label="Test Label" checked="true" />)
    cy.get('input[type="checkbox"]').should('be.checked')
  })

  it('is checked when checked prop is string "on"', () => {
    cy.mount(<CheckboxField label="Test Label" checked="on" />)
    cy.get('input[type="checkbox"]').should('be.checked')
  })

  it('is not checked when checked prop is false', () => {
    cy.mount(<CheckboxField label="Test Label" checked={false} />)
    cy.get('input[type="checkbox"]').should('not.be.checked')
  })

  it('calls onChange when clicked', () => {
    const onChange = cy.stub().as('onChange')
    cy.mount(<CheckboxField label="Test Label" onChange={onChange} />)
    cy.get('input[type="checkbox"]').click()
    cy.get('@onChange').should('have.been.calledOnce')
  })

  it('shows error state', () => {
    cy.mount(<CheckboxField label="Test Label" error helperText="Error message" />)
    cy.contains('Error message').should('be.visible')
  })

  it('is disabled when disabled prop is true', () => {
    cy.mount(<CheckboxField label="Test Label" disabled />)
    cy.get('input[type="checkbox"]').should('be.disabled')
  })

  it('inherits theme styles', () => {
    cy.mount(<CheckboxField label="Test Label" />)
    cy.get('.MuiCheckbox-root').should('be.visible')
  })
})