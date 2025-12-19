import { Button } from '../../src/components/fields'

describe('Button', () => {
  it('renders with children text', () => {
    cy.mount(<Button>Click me</Button>)
    cy.contains('Click me').should('be.visible')
  })

  it('calls onClick when clicked', () => {
    const onClick = cy.stub().as('onClick')
    cy.mount(<Button onClick={onClick}>Click me</Button>)
    cy.get('button').click()
    cy.get('@onClick').should('have.been.calledOnce')
  })

  it('shows loading skeleton when loading is true and no loadingText', () => {
    cy.mount(<Button loading>Click me</Button>)
    cy.get('button').should('not.exist')
    cy.get('[data-testid="skeleton"]').should('have.length.greaterThan', 0)
  })

  it('shows loading text with spinner when loadingText is provided', () => {
    cy.mount(<Button loading loadingText="Saving...">Save</Button>)
    cy.contains('Saving...').should('be.visible')
    cy.get('.MuiCircularProgress-root').should('be.visible')
  })

  it('is disabled when disabled prop is true', () => {
    cy.mount(<Button disabled>Click me</Button>)
    cy.get('button').should('be.disabled')
  })

  it('is disabled when loading is true', () => {
    cy.mount(<Button loading loadingText="Loading...">Click me</Button>)
    cy.get('button').should('be.disabled')
  })

  it('supports different variants', () => {
    cy.mount(<Button variant="contained">Contained</Button>)
    cy.get('.MuiButton-contained').should('exist')
    
    cy.mount(<Button variant="outlined">Outlined</Button>)
    cy.get('.MuiButton-outlined').should('exist')
    
    cy.mount(<Button variant="text">Text</Button>)
    cy.get('.MuiButton-text').should('exist')
  })

  it('supports different sizes', () => {
    cy.mount(<Button size="small">Small</Button>)
    cy.get('.MuiButton-sizeSmall').should('exist')
    
    cy.mount(<Button size="medium">Medium</Button>)
    cy.get('.MuiButton-sizeMedium').should('exist')
    
    cy.mount(<Button size="large">Large</Button>)
    cy.get('.MuiButton-sizeLarge').should('exist')
  })

  it('supports different colors', () => {
    cy.mount(<Button color="primary">Primary</Button>)
    cy.get('.MuiButton-colorPrimary').should('exist')
    
    cy.mount(<Button color="secondary">Secondary</Button>)
    cy.get('.MuiButton-colorSecondary').should('exist')
    
    cy.mount(<Button color="success">Success</Button>)
    cy.get('.MuiButton-colorSuccess').should('exist')
  })

  it('supports fullWidth', () => {
    cy.mount(<Button fullWidth>Full Width</Button>)
    cy.get('button').should('have.class', 'MuiButton-fullWidth')
  })

  it('supports startIcon and endIcon', () => {
    cy.mount(
      <Button startIcon={<span>🚀</span>} endIcon={<span>⭐</span>}>
        With Icons
      </Button>
    )
    cy.contains('🚀').should('be.visible')
    cy.contains('⭐').should('be.visible')
    cy.contains('With Icons').should('be.visible')
  })

  it('inherits theme styles', () => {
    cy.mount(<Button>Click me</Button>)
    cy.get('.MuiButton-root').should('be.visible')
  })

  it('supports custom className', () => {
    cy.mount(<Button className="custom-button">Custom</Button>)
    cy.get('.custom-button').should('exist')
  })

  it('supports custom sx prop', () => {
    cy.mount(<Button sx={{ backgroundColor: 'red' }}>Styled</Button>)
    cy.get('button').should('have.css', 'background-color', 'rgb(255, 0, 0)')
  })
})
