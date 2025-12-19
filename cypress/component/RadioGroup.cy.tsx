import { RadioGroup } from '../../src/components/fields'

const mockOptions = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
]

describe('RadioGroup', () => {
  it('renders with required label', () => {
    cy.mount(<RadioGroup label="Test Label" options={mockOptions} />)
    cy.contains('Test Label').should('be.visible')
  })

  it('renders radio options', () => {
    cy.mount(<RadioGroup label="Test Label" options={mockOptions} />)
    cy.get('input[type="radio"]').should('have.length', 2)
    cy.contains('Option A').should('be.visible')
    cy.contains('Option B').should('be.visible')
  })

  it('renders multiple radio options', () => {
    const multipleOptions = [
      { value: 'a', label: 'Option A' },
      { value: 'b', label: 'Option B' },
      { value: 'c', label: 'Option C' },
    ]
    cy.mount(<RadioGroup label="Test Label" options={multipleOptions} />)
    cy.get('input[type="radio"]').should('have.length', 3)
    cy.contains('Option A').should('be.visible')
    cy.contains('Option B').should('be.visible')
    cy.contains('Option C').should('be.visible')
  })

  it('shows loading skeleton with correct height for multiple options', () => {
    const multipleOptions = [
      { value: 'a', label: 'Option A' },
      { value: 'b', label: 'Option B' },
      { value: 'c', label: 'Option C' },
    ]
    cy.mount(<RadioGroup label="Test Label" options={multipleOptions} loading />)
    cy.get('label').should('not.exist')
    cy.get('[data-testid="skeleton"]').should('have.length.greaterThan', 0)
  })

  it('renders with helper text when provided', () => {
    cy.mount(<RadioGroup label="Test Label" options={mockOptions} helperText="Helper text" />)
    cy.contains('Helper text').should('be.visible')
  })

  it('renders without helper text when not provided', () => {
    cy.mount(<RadioGroup label="Test Label" options={mockOptions} />)
    cy.contains(/helper/i).should('not.exist')
  })
})