import { ProductPage } from "../ProductPage/ProductDetail.po";
import { IShoppingCart } from "./ShoppingCart.in";
export class ShoppingCart extends ProductPage{
    private shoppingCart: string = '.shopping_cart_link';
    private cartProductName: string = '.inventory_item_name';
    private QuantityOfProduct: string = '.cart_quantity';
    private RemoveItem: string = '[data-test="remove-sauce-labs-bolt-t-shirt"]';
    private ItemExist:string = '.removed_cart_item'

    clickOnShoppingCart(){
        cy.get(this.shoppingCart).click();
    }
    getNameOfCartProduct(){
        cy.get(this.cartProductName).invoke("text").as("cartProductName")
    }
    isNameMatch(){
        this.getProduct()
        cy.get("@productName").then((cardProductName)=>{
            this.getNameOfCartProduct()
            cy.get("@cartProductName").then((addToCartProductName)=>{
                expect(cardProductName).to.deep.eq(addToCartProductName)
            })
        })
    }
    isQuantityMatch(){
        cy.get(this.QuantityOfProduct).should("have.text","1");
    }
    clickOnRemoveButton(){
        cy.get(this.RemoveItem).click();
    }
    ItemRemovalVerification(){
        cy.get(this.RemoveItem).should('not.exist');

    }
}