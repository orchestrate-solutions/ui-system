import { mount } from 'cypress/react'
import { ThemeProvider } from '@mui/material/styles'
import { hybridTheme } from '../../src/theme'
import React from 'react'

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component.d.ts" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

Cypress.Commands.add('mount', (component, options = {}) => {
  // Check if component already has a ThemeProvider
  const hasThemeProvider = React.isValidElement(component) &&
    (component.type === ThemeProvider ||
     (component.props?.children && React.isValidElement(component.props.children) &&
      component.props.children.type === ThemeProvider))

  // Only wrap with ThemeProvider if not already present
  const wrapped = hasThemeProvider ? component : <ThemeProvider theme={hybridTheme}>{component}</ThemeProvider>
  return mount(wrapped, options)
})