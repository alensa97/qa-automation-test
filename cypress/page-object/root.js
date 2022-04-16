export class RootPage {

	visitRoot() {
		cy.visit("http://automationpractice.com/index.php")
	}

	selectSearchInput() {
		return cy.get('#search_query_top')
	}

	selectSearchButton() {
		return cy.get('#searchbox > .btn')
	}

	selectSignInButton() {
		return cy.get('.login')
	}

	selectSignOutButton() {
		return cy.get('.logout');
	}
}
