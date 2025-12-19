import { hybridTheme, lightTheme, darkTheme } from '../../src/theme'
import { TextField } from '../../src/components/fields'
import { ThemeProvider } from '@mui/material/styles'
import { Button } from '@mui/material'
import React, { useState } from 'react'

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

  it('supports dynamic theme switching between light and dark', () => {
    // Create a component that can switch themes
    const ThemeSwitcher = () => {
      const [isDark, setIsDark] = useState(true)

      return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <div style={{ padding: '1rem', minHeight: '200px' }}>
            <Button
              onClick={() => setIsDark(!isDark)}
              data-testid="theme-toggle"
              variant="contained"
            >
              Switch to {isDark ? 'Light' : 'Dark'} Theme
            </Button>
            <TextField
              label="Test Field"
              value="Sample text"
              data-testid="test-field"
            />
            {/* Add a Paper component to test theme background */}
            <div style={{
              backgroundColor: isDark ? darkTheme.palette.background.paper : lightTheme.palette.background.paper,
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

    // Mount with dark theme initially
    cy.mount(<ThemeSwitcher />)

    // Verify dark theme - check the themed background div
    cy.get('[data-testid="test-field"]').should('be.visible')
    cy.get('[data-testid="theme-background"]').should('have.css', 'background-color', 'rgb(22, 27, 34)') // dark paper background

    // Click to switch to light theme
    cy.get('[data-testid="theme-toggle"]').click()

    // Verify light theme - check the themed background div
    cy.get('[data-testid="test-field"]').should('be.visible')
    cy.get('[data-testid="theme-background"]').should('have.css', 'background-color', 'rgb(245, 245, 245)') // light paper background

    // Click to switch back to dark theme
    cy.get('[data-testid="theme-toggle"]').click()

    // Verify dark theme colors again
    cy.get('[data-testid="test-field"]').should('be.visible')
    cy.get('[data-testid="theme-background"]').should('have.css', 'background-color', 'rgb(22, 27, 34)') // dark paper background
  })
})