import * as Fields from '../../src/components/fields'

describe('fields index exports', () => {
  it('exports FieldSkeleton', () => {
    cy.wrap(Fields.FieldSkeleton).should('exist')
  })

  it('can render FieldSkeleton from the index', () => {
    cy.mount(Fields.FieldSkeleton({}))
    cy.get('[data-testid="skeleton"]').should('be.visible')
  })

  it('exports all 10 micro components', () => {
    cy.wrap(Fields.TextField).should('exist')
    cy.wrap(Fields.SelectField).should('exist')
    cy.wrap(Fields.DateField).should('exist')
    cy.wrap(Fields.CheckboxField).should('exist')
    cy.wrap(Fields.TextareaField).should('exist')
    cy.wrap(Fields.FileField).should('exist')
    cy.wrap(Fields.PasswordField).should('exist')
    cy.wrap(Fields.NumberField).should('exist')
    cy.wrap(Fields.RadioGroup).should('exist')
    cy.wrap(Fields.ThemeToggle).should('exist')
  })

  it('can render TextField from the index', () => {
    cy.mount(Fields.TextField({ label: 'Test' }))
  })

  it('can render SelectField from the index', () => {
    cy.mount(Fields.SelectField({ label: 'Test', options: [] }))
  })

  it('can render DateField from the index', () => {
    cy.mount(Fields.DateField({ label: 'Test' }))
  })

  it('can render CheckboxField from the index', () => {
    cy.mount(Fields.CheckboxField({ label: 'Test' }))
  })

  it('can render TextareaField from the index', () => {
    cy.mount(Fields.TextareaField({ label: 'Test' }))
  })

  it('can render NumberField from the index', () => {
    cy.mount(Fields.NumberField({ label: 'Test' }))
  })

  it('can render RadioGroup from the index', () => {
    cy.mount(Fields.RadioGroup({ label: 'Test', options: [] }))
  })
})