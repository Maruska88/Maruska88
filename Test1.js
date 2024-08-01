/// <reference types="Cypress" />

describe('Contact us', () => {
    it('Get in touch', () => {

cy.visit("https://wearenotch.com/contact/");
cy.wait(2000)

cy.get('#firstname').type('abc')

cy.get('#email').type('example@example.com')

cy.get('#lastname').type('cba')

cy.wait(1000)

cy.get(':nth-child(6) > .e-checkboxButton__label').click(//label[normalize-space()='Quality Assurance']),

cy.get('.color-space-gray').click(//label[for='pp']),

cy.get('.e-btn')
.should('be.visible')

    ))
    })})
