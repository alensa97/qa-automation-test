export class ShoppingCart {
	selectHeadingCounter() {
		return cy.get('.heading-counter')
	}
	selectHeaderText() {
		return cy.get('#summary_products_quantity');
}
}