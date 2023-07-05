import { I_Product_detail } from "./ProductDetail.in";
export class ProductPage{
    private product: string = "#item_1_title_link";
    private backButton: string = '[data-test="back-to-products"]';
    private addToCardButton: string  = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'
    

    getProduct(){
        cy.get(this.product).invoke("text").as("productName");
    }
    clickProduct(){
        cy.get(this.product).click();
    }
    assertionForBackToProductsButton(){
        cy.get(this.backButton).should("have.text","Back to products")
    }
    pressAddToCardButton(){
        cy.get(this.addToCardButton).click();
    }
    

}