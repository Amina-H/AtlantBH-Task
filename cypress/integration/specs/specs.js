/// <reference types="cypress" />


Describe('E-commerce API', function() {
    let testData;
  
    this.beforeEach(function() {
      cy.fixture('user').then(function(dataJson) {
        testData = dataJson;
        return testData;
      })
    })

  
it('Verify that user can place an order', () => {

    cy.visit('http://automationpractice.com')

    cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
    cy.get('.columns-container').find('#center_column')
    cy.get('.product-container').each(($el, index, $list) => {

        if ($el.text().includes('Chiffon')) {
              
           cy.get('[title="Add to cart"]').eq(index).click({ force: true })
           
        }
    })

    
    cy.get('#layer_cart', {timeout: 20000 }).should('be.visible')
    cy.get('#layer_cart a[title="Proceed to checkout"').click()

    cy.get('.cart_navigation > .button > span').click()
    cy.get('#login_form').find('#email').type(testData.email)
    cy.get('#passwd').type(testData.password)
    cy.get('#SubmitLogin > span').click() 
    cy.get('.cart_navigation > .button > span').click()
    cy.get('[type="checkbox"]').check() 
    cy.get('.cart_navigation > .button > span').click()
    cy.get('.bankwire').click()
    cy.get('#cart_navigation > .button > span').click()
    cy.get('.box').should('include.text', 'Your order on My Store is complete.')



})

})

