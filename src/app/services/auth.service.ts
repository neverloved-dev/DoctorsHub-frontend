import { Injectable } from "@angular/core";
import { UserLoginDTO } from "../auth/shared_DTOs/user-login.dto";
import { UserRegisterDTO } from "../auth/shared_DTOs/user-register.dto";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn:'root'})
export class AuthService{
    protected baseUrl = "";
    constructor(private http: HttpClient){
        
    }
    logIn(userLoginDTO:UserLoginDTO){
        return this.http.post(this.baseUrl+"/login",userLoginDTO);
    }

    signup(userRegisterDTO:UserRegisterDTO){
        return this.http.post(this.baseUrl+"/register",userRegisterDTO);
    }
}