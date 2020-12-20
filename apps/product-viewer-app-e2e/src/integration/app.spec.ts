import { getGreeting, getGreetingDescription, getProductsLink } from '../support/app.po';

describe('product-viewer-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome!');
    getGreetingDescription().contains('Product View');
  });

  it('should display Products page', () => {
    getProductsLink().click();
    cy.get('h1').should('exist');
    cy.get('#search').should('exist');
    cy.get('#vendors-select').should('exist');
    cy.get('.products').should('exist');
  });
});
