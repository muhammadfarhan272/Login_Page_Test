import { I_Product_detail } from "./Product_detail.in";
export class Product_Page{
    private product: string = "#item_1_title_link";
    private backButon: string = '[data-test="back-to-products"]';
    private addToCardButton: string  = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'
    

    getProduct(){
        cy.get(this.product).invoke("text").as("productName");
    }
    clickProduct(){
        cy.get(this.product).click();
    }
    assertionForBackButton(){
        cy.get(this.backButon).should("have.text","Back to products")
    }
    clickOnAddToCard(){
        cy.get(this.addToCardButton).click();
    }
    

}