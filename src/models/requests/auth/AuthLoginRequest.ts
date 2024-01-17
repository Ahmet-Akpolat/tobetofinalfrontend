export interface AuthLoginRequest{
    email:string;
    password:string;
    authenticatorCode?:string;
}