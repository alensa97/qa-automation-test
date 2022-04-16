export class HomePage {
	selectAddtoCart() {
		return cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span');
	}

	selectAddtoCartButton(){
		return cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span');
	}

	selectProceedtoCheckoutButton(){
		return cy.get('.button-medium > span');
	}

}