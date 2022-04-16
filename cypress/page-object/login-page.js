export class LoginPage {
	selectEmailInput() {
		return cy.get('#email');
	}

	selectPasswordInput() {
		return cy.get('#passwd')
	}

	selectLoginButton() {
		return cy.get('#SubmitLogin > span')
	}

	selectHeaderText() {
		return cy.get('.page-heading')
	}
}