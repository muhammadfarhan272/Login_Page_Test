///<reference types="cypress"/>
import { LoginPage } from "../loginDetail/loginpage/login_page.po";
import { Product_Page } from "../loginDetail/ProductPage/Product_detail.po";
import { ShoppingCart } from "../loginDetail/shoppingCart/Shopping_cart.po";

let login_page : LoginPage;
let product_page: Product_Page;
let shoppingCart: ShoppingCart;

describe('Login page', () => {
  beforeEach(()=>{
    cy.visit(Cypress.env("base_url"));
  })

  login_page = new LoginPage();
  product_page = new Product_Page();
  shoppingCart = new ShoppingCart();

  it('login test case', () => {
    
    login_page.UserName("standard_user");
    login_page.typePassword("secret_sauce");
    login_page.clickLoginButton();
    cy.log("Login page successfully ");
    cy.get(".title").should("have.text","Products");

    product_page.clickProduct();
    product_page.assertionForBackButton();
    product_page.clickOnAddToCard();

    shoppingCart.clickOnShoppingCart();
    shoppingCart.isNameMatch();
    shoppingCart.isQuantityMatch();
    shoppingCart.clickOnRemoveProduct();
    shoppingCart.itemVarification();

  })
})