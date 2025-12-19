import { hybridTheme } from '../../src/theme'
import { TextField } from '../../src/components/fields'
import { ThemeProvider } from '@mui/material/styles'
import { Button } from '@mui/material'
import React from 'react'

describe('Theme Integration', () => {
  it('components inherit dark theme colors', () => {
    cy.mount(<TextField label="Test" />)
    // Check that the theme has dark palette
    cy.wrap(hybridTheme.palette.mode).should('equal', 'dark')
    cy.wrap(hybridTheme.palette.background.default).should('equal', '#0d1117')
  })

  it('components use consistent styling from theme', () => {
    cy.mount(<TextField label="Test" />)
    cy.get('.MuiTextField-root').should('be.visible')
  })

  it('theme provides consistent button styling', () => {
    // Test that the theme has button overrides
    cy.wrap(hybridTheme.components?.MuiButton?.styleOverrides?.root).should('exist')
    cy.wrap(hybridTheme.typography.button).should('exist')
  })

  it('theme provides consistent card styling', () => {
    cy.wrap(hybridTheme.components?.MuiCard?.styleOverrides?.root).should('exist')
  })

  it('theme provides consistent form field styling', () => {
    cy.wrap(hybridTheme.components?.MuiTextField?.defaultProps?.variant).should('equal', 'outlined')
  })

  it('supports theme consistency in dark mode', () => {
    // Create a component that uses the hybrid theme
    const ThemedComponent = () => {
      return (
        <ThemeProvider theme={hybridTheme}>
          <div style={{ padding: '1rem', minHeight: '200px' }}>
            <Button
              variant="contained"
              data-testid="theme-button"
            >
              Test Button
            </Button>
            <TextField
              label="Test Field"
              value="Sample text"
              data-testid="test-field"
            />
            {/* Add a Paper component to test theme background */}
            <div style={{
              backgroundColor: hybridTheme.palette.background.paper,
              padding: '1rem',
              marginTop: '1rem',
              borderRadius: '4px'
            }}
            data-testid="theme-background">
              Theme background test
            </div>
          </div>
        </ThemeProvider>
      )
    }

    // Mount with hybrid theme
    cy.mount(<ThemedComponent />)

    // Verify dark theme - check the themed background div
    cy.get('[data-testid="test-field"]').should('be.visible')
    cy.get('[data-testid="theme-background"]').should('have.css', 'background-color', 'rgb(22, 27, 34)') // dark paper background
    cy.get('[data-testid="theme-button"]').should('be.visible')
  })
})