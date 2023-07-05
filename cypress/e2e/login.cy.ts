///<reference types="cypress"/>
import { LoginPage } from "../loginDetail/loginPage/loginPage.po";
import { ProductPage } from "../loginDetail/ProductPage/ProductDetail.po";
import { ShoppingCart } from "../loginDetail/shoppingCart/ShoppingCart.po";

let loginPage : LoginPage;
let productPage: ProductPage;
let shoppingCart: ShoppingCart;

describe('Login page', () => {
  beforeEach(()=>{
    cy.visit(Cypress.env("base_url"));
  })

  loginPage = new LoginPage();
  productPage = new ProductPage();
  shoppingCart = new ShoppingCart();

  it('login test case', () => {
    
    loginPage.typeUserName("standard_user");
    loginPage.typePassword("secret_sauce");
    loginPage.pressLoginButton();
    cy.log("Login page successfully ");
    cy.get(".title").should("have.text","Products");

    productPage.clickProduct();
    productPage.assertionForBackToProductsButton();
    productPage.pressAddToCardButton();

    shoppingCart.clickOnShoppingCart();
    shoppingCart.isNameMatch();
    shoppingCart.isQuantityMatch();
    shoppingCart.clickOnRemoveButton();
    shoppingCart.ItemRemovalVerification();

  })
})