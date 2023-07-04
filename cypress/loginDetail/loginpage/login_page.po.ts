import { I_Login_page } from "./login_page.in"
export class LoginPage{
    private userName: string = '[data-test="username"]'
    private password: string = '[data-test="password"]'
    private loginbutton: string = '[data-test="login-button"]'

    UserName(user_name: string){
        cy.get(this.userName).type(user_name)
    }
    typePassword(password:string){
        cy.get(this.password).type(password)
    }
    clickLoginButton(){
        cy.get(this.loginbutton).click()
    }
}