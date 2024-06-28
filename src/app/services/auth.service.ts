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
         this.http.post<{ token: string }>(`${this.baseUrl}/login`, userLoginDTO)
            .subscribe(response => {
                const key = response.token;
                this.localStorageService.set("Bearer", key);
            }, error => {
                console.error('Login failed', error);
            });var key = this.http.post(this.baseUrl+"/login",userLoginDTO);
       
    }

    signup(userRegisterDTO:UserRegisterDTO){
        return this.http.post(this.baseUrl+"/register",userRegisterDTO);
    }

    getJwtToken():string{
     return "";
    }
}
