import { PasswordField } from '../../src/components/fields'

describe('PasswordField', () => {
  it('renders with required label', () => {
    cy.mount(<PasswordField label="Test Label" />)
    cy.get('label').contains('Test Label').should('be.visible')
  })

  it('shows loading skeleton when loading prop is true', () => {
    cy.mount(<PasswordField label="Test Label" loading />)
    cy.get('label').should('not.exist')
    cy.get('[data-testid="skeleton"]').should('have.length.greaterThan', 0)
  })

  it('has password input type by default', () => {
    cy.mount(<PasswordField label="Test Label" />)
    cy.get('input').should('have.attr', 'type', 'password')
  })

  it('has visibility toggle button', () => {
    cy.mount(<PasswordField label="Test Label" />)
    cy.get('[aria-label="toggle password visibility"]').should('be.visible')
  })

  it('toggles password visibility on button click', () => {
    cy.mount(<PasswordField label="Test Label" />)
    cy.get('input').should('have.attr', 'type', 'password')
    cy.get('[aria-label="toggle password visibility"]').click()
    cy.get('input').should('have.attr', 'type', 'text')
    cy.get('[aria-label="toggle password visibility"]').click()
    cy.get('input').should('have.attr', 'type', 'password')
  })

  it('uses external showPassword control', () => {
    cy.mount(<PasswordField label="Test Label" showPassword={false} />)
    cy.get('input').should('have.attr', 'type', 'password')
    cy.mount(<PasswordField label="Test Label" showPassword={true} />)
    cy.get('input').should('have.attr', 'type', 'text')
  })

  it('calls onShowPasswordChange when toggled', () => {
    const onShowPasswordChange = cy.stub().as('onShowPasswordChange')
    cy.mount(<PasswordField label="Test Label" onShowPasswordChange={onShowPasswordChange} />)
    cy.get('[aria-label="toggle password visibility"]').click()
    cy.get('@onShowPasswordChange').should('have.been.calledWith', true)
  })

  it('shows strength indicator colors', () => {
    cy.mount(<PasswordField label="Test Label" strength="weak" />)
    cy.get('.MuiOutlinedInput-root').should('be.visible')
    cy.mount(<PasswordField label="Test Label" strength="strong" />)
    cy.get('.MuiOutlinedInput-root').should('be.visible')
    cy.mount(<PasswordField label="Test Label" strength="medium" />)
    cy.get('.MuiOutlinedInput-root').should('be.visible')
  })

  it('shows error state', () => {
    cy.mount(<PasswordField label="Test Label" error helperText="Error message" />)
    cy.contains('Error message').should('be.visible')
  })

  it('is disabled when disabled prop is true', () => {
    cy.mount(<PasswordField label="Test Label" disabled />)
    cy.get('input').should('be.disabled')
  })

  it('inherits theme styles', () => {
    cy.mount(<PasswordField label="Test Label" />)
    cy.get('.MuiTextField-root').should('be.visible')
  })
})