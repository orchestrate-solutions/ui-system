import { SelectField } from '../../src/components/fields'

const mockOptions = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
]

describe('SelectField', () => {
  it('renders with required label', () => {
    cy.mount(<SelectField label="Test Label" options={mockOptions} value="" />)
    cy.get('[role="combobox"]').should('be.visible')
  })

  it('shows loading skeleton when loading prop is true', () => {
    cy.mount(<SelectField label="Test Label" options={mockOptions} loading />)
    cy.contains('Test Label').should('not.exist')
    cy.get('[data-testid="skeleton"]').should('have.length.greaterThan', 0)
  })

  it('displays options correctly', () => {
    cy.mount(<SelectField label="Test Label" options={mockOptions} value="" />)
    cy.get('[role="combobox"]').click()
    cy.contains('Option A').should('be.visible')
    cy.contains('Option B').should('be.visible')
  })

  it('calls onChange when selection changes', () => {
    const onChange = cy.stub().as('onChange')
    cy.mount(<SelectField label="Test Label" options={mockOptions} onChange={onChange} value="" />)
    cy.get('[role="combobox"]').click()
    cy.contains('Option A').click()
    cy.get('@onChange').should('have.been.calledOnce')
  })

  it('shows selected value', () => {
    cy.mount(<SelectField label="Test Label" options={mockOptions} value="a" />)
    cy.contains('Option A').should('be.visible')
  })

  it('shows error state', () => {
    cy.mount(<SelectField label="Test Label" options={mockOptions} error helperText="Error message" value="" />)
    cy.contains('Error message').should('be.visible')
  })

  it('is disabled when disabled prop is true', () => {
    cy.mount(<SelectField label="Test Label" options={mockOptions} disabled value="" />)
    cy.get('[role="combobox"]').should('have.attr', 'aria-disabled', 'true')
  })

  it('inherits theme styles', () => {
    cy.mount(<SelectField label="Test Label" options={mockOptions} value="" />)
    cy.get('.MuiFormControl-root').should('be.visible')
  })
})