import { Injectable } from "@angular/core";
import { UserLoginDTO } from "../auth/DTOs/user-login.dto";
import { UserRegisterDTO } from "../auth/DTOs/user-register.dto";

@Injectable({providedIn:'root'})
export class AuthService{
    protected baseUrl = "";
    
    logIn(userLoginDTO:UserLoginDTO){

    }

    signup(userRegisterDTO:UserRegisterDTO){
        
    }
}