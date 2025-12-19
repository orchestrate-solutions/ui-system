import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { hybridTheme } from '../../src/theme';
import { ThemeToggle } from '../../src/components/fields';

describe('ThemeToggle', () => {
  const mountWithTheme = (component: React.ReactElement) => {
    return cy.mount(
      <ThemeProvider theme={hybridTheme}>
        {component}
      </ThemeProvider>
    );
  };

  it('renders with default props', () => {
    mountWithTheme(<ThemeToggle />);
    cy.get('button').should('exist');
  });

  it('shows light mode icon by default', () => {
    mountWithTheme(<ThemeToggle />);
    cy.get('button').find('svg').should('have.attr', 'data-testid', 'Brightness7Icon');
  });

  it('shows dark mode icon when mode is light', () => {
    mountWithTheme(<ThemeToggle value="light" />);
    cy.get('button').find('svg').should('have.attr', 'data-testid', 'Brightness4Icon');
  });

  it('calls onChange when clicked', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy');
    mountWithTheme(<ThemeToggle onChange={onChangeSpy} />);

    cy.get('button').click();
    cy.get('@onChangeSpy').should('have.been.calledOnce');
  });

  it('toggles from dark to light when clicked', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy');
    mountWithTheme(<ThemeToggle value="dark" onChange={onChangeSpy} />);

    cy.get('button').click();
    cy.get('@onChangeSpy').should('have.been.calledWith', 'light');
  });

  it('toggles from light to dark when clicked', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy');
    mountWithTheme(<ThemeToggle value="light" onChange={onChangeSpy} />);

    cy.get('button').click();
    cy.get('@onChangeSpy').should('have.been.calledWith', 'dark');
  });

  it('supports small size', () => {
    mountWithTheme(<ThemeToggle size="small" />);
    cy.get('button').should('have.class', 'MuiButton-sizeSmall');
  });

  it('supports medium size', () => {
    mountWithTheme(<ThemeToggle size="medium" />);
    cy.get('button').should('have.class', 'MuiButton-sizeMedium');
  });

  it('supports large size', () => {
    mountWithTheme(<ThemeToggle size="large" />);
    cy.get('button').should('have.class', 'MuiButton-sizeLarge');
  });

  it('is disabled when disabled prop is true', () => {
    mountWithTheme(<ThemeToggle disabled />);
    cy.get('button').should('be.disabled');
  });

  it('shows loading skeleton when loading prop is true', () => {
    mountWithTheme(<ThemeToggle loading />);
    cy.get('[data-testid="skeleton"]').should('have.length.greaterThan', 0);
  });

  it('inherits theme styles', () => {
    mountWithTheme(<ThemeToggle />);
    cy.get('button').should('have.css', 'border-radius', '6px');
  });

  it('supports custom className', () => {
    mountWithTheme(<ThemeToggle className="custom-class" />);
    cy.get('.custom-class').should('exist');
  });

  it('supports custom sx prop', () => {
    mountWithTheme(<ThemeToggle sx={{ margin: 1 }} />);
    cy.get('.MuiFormControl-root').should('have.css', 'margin', '8px');
  });
});