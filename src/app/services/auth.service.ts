import {Inject, Injectable} from "@angular/core";
import { UserLoginDTO } from "../auth/shared_DTOs/user-login.dto";
import { UserRegisterDTO } from "../auth/shared_DTOs/user-register.dto";
import { HttpClient } from "@angular/common/http";
import {LocalStorageService} from "./localStorageService.service";

@Injectable({providedIn:'root'})
export class AuthService{
    @Injectable()
    protected baseUrl = "localhost://5632";
    constructor(private http: HttpClient,private localStorageService:LocalStorageService){
        
    }
    logIn(userLoginDTO:UserLoginDTO){
        var key = this.http.post(this.baseUrl+"/login",userLoginDTO);
        this.localStorageService.set("Bearer",key)
    }

    signup(userRegisterDTO:UserRegisterDTO){
        return this.http.post(this.baseUrl+"/register",userRegisterDTO);
    }

    getJwtToken():string{
     return "";
    }
}
