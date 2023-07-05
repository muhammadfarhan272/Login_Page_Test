import { ILoginPage } from "./loginPage.in";

export class LoginPage implements ILoginPage {

    private userName: string = '[data-test="username"]'
    private password: string = '[data-test="password"]'
    private loginButton: string = '[data-test="login-button"]'

    typeUserName(userName: string){
        cy.get(this.userName).type(userName)
    }
    typePassword(password:string){
        cy.get(this.password).type(password)
    }
    pressLoginButton(){
        cy.get(this.loginButton).click()
    }
}