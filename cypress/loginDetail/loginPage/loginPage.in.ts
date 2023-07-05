export interface ILoginPage{
    typeUserName: (user_name: string) => any,
    typePassword: (password:string) => any,
    pressLoginButton() : any
}