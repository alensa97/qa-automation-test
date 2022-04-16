import {RootPage} from '../page-object/root'
import {SearchPage} from '../page-object/search-page'
import {LoginPage} from '../page-object/login-page'
import {MyAccountPage} from '../page-object/my-account-page'
import {HomePage} from '../page-object/home-page'
import {ShoppingCart} from '../page-object/shopping-cart'
import { USERS } from '../constants/users'

describe("automation practice smoke tests", ()=>{
    const root = new RootPage();
    const search = new SearchPage();
    const login = new LoginPage();
    const myAccount = new MyAccountPage();
    const homePage = new HomePage();
    const shoppcart = new ShoppingCart();

    it("User can search keyword using the search bar and get proper result", ()=>{
        root.visitRoot();

        const searchInput = root.selectSearchInput();

        searchInput.type("dress")

        const searchButton = root.selectSearchButton();

        searchButton.click();

        const headingCounter = search.selectHeadingCounter();

        headingCounter.should('be.visible')

        headingCounter.should(($item) => {
            expect($item.first()).to.contain('results have been found')
        })
    })

    it('User can sign in with valid email address and valid password and sign out', () => {
        root.visitRoot();

        root.selectSignInButton().click();

        const emailInput = login.selectEmailInput();
        // When we do should.be.visible, we tell cypress to wait
        // until this element is visible before continuing
        emailInput.should('be.visible');

        emailInput.type(USERS.admin.email);
        login.selectPasswordInput().type(USERS.admin.password);

        login.selectLoginButton().click()

        myAccount.selectWelcomeText().should(($item) => {
            expect($item.first()).to.contain("Welcome to your account. Here you can manage all of your personal information and orders.")
        })

        root.selectSignOutButton().click()

        login.selectHeaderText().should(($item) => {
            expect($item.first()).to.contain('Authentication');
        })

        })

    it('User can add their desire product in cart', () => {
            root.visitRoot();

            homePage.selectAddtoCartButton().click();

            cy.contains('There is 1 item in your cart.').should('be.visible');
            const proceedtoCheckoutButton = homePage.selectProceedtoCheckoutButton();

            proceedtoCheckoutButton.should('be.visible');
            homePage.selectProceedtoCheckoutButton().click();

            const headingCounter = shoppcart.selectHeadingCounter();
            headingCounter.should('be.visible');
            headingCounter.should(($item) => {
                expect($item.first()).to.contain('1 Product');
                
            })


    })
})

