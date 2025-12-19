import { TextField } from '../../src/components/fields'

describe('TextField', () => {
  it('renders with required label', () => {
    cy.mount(<TextField label="Test Label" />)
    cy.get('label').contains('Test Label').should('be.visible')
  })

  it('shows loading skeleton when loading prop is true', () => {
    cy.mount(<TextField label="Test Label" loading />)
    // Should show skeleton instead of input
    cy.get('label').should('not.exist')
    cy.get('[data-testid="skeleton"]').should('have.length.greaterThan', 0)
  })

  it('accepts and displays value', () => {
    cy.mount(<TextField label="Test Label" value="test value" />)
    cy.get('input').should('have.value', 'test value')
  })

  it('calls onChange when input changes', () => {
    const onChange = cy.stub().as('onChange')
    cy.mount(<TextField label="Test Label" onChange={onChange} />)
    cy.get('input').type('new value')
    cy.get('@onChange').should('have.been.called')
  })

  it('shows error state', () => {
    cy.mount(<TextField label="Test Label" error helperText="Error message" />)
    cy.contains('Error message').should('be.visible')
  })

  it('is disabled when disabled prop is true', () => {
    cy.mount(<TextField label="Test Label" disabled />)
    cy.get('input').should('be.disabled')
  })

  it('is required when required prop is true', () => {
    cy.mount(<TextField label="Test Label" required />)
    cy.get('input').should('have.attr', 'required')
  })

  it('supports multiline', () => {
    cy.mount(<TextField label="Test Label" multiline rows={3} />)
    cy.get('textarea').should('be.visible')
  })

  it('has correct default props', () => {
    cy.mount(<TextField label="Test Label" />)
    cy.get('input').should('have.attr', 'type', 'text')
  })

  it('inherits theme styles', () => {
    cy.mount(<TextField label="Test Label" />)
    cy.get('.MuiTextField-root').should('be.visible')
  })
})