import { Injectable } from "@angular/core";
import { UserLoginDTO } from "../auth/shared_DTOs/user-login.dto";
import { UserRegisterDTO } from "../auth/shared_DTOs/user-register.dto";

@Injectable({providedIn:'root'})
export class AuthService{
    protected baseUrl = "";
    constructor(private http: HttpClient){
        
    }
    logIn(userLoginDTO:UserLoginDTO){
        
    }

    signup(userRegisterDTO:UserRegisterDTO){

    }
}