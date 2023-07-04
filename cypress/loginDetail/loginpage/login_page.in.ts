export interface I_Login_page{
    UserName: (user_name: string) => any,
    typePassword: (password:string) => any,
    clickLoginButton() : any
}