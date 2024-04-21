import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLoginDTO } from '../shared_DTOs/user-login.dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  _authService:AuthService;
  constructor(authService:AuthService) { 
    this._authService = authService;
  }

  ngOnInit(): void {
  }

  formGroupLogin = new FormGroup({
    emailField : new FormControl('',Validators.required),
    passwordField : new FormControl('',Validators.required)
  });

  logIn(){
    let userLoginDTO = new UserLoginDTO("","");
    let userEmail = this.formGroupLogin.get("emailField")?.value;
    if(userEmail === null || userEmail === undefined){
      alert("Email field is undefined!");
    }
    let userPassword = this.formGroupLogin.get("password")?.value;
    userLoginDTO.email = userEmail;
    userLoginDTO.password = userPassword;
    this._authService.logIn(userLoginDTO);
  }

}
