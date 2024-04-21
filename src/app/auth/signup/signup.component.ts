import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import { FormControl, FormGroup } from '@angular/forms';
import { UserRegisterDTO } from '../shared_DTOs/user-register.dto';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {
  _authService:AuthService;


  constructor(private service :AuthService) { 
    this._authService = service;
  }

  formGroupSignUp = new FormGroup({
    firstName : new FormControl(""),
    lastName :new FormControl(""),
    email :new FormControl(""),
    phoneNumber : new FormControl(""),
    password: new FormControl(""),
    repeatedPassword : new FormControl(""),
    dateOfBirth:new FormControl("")
  });

  ngOnInit(): void {
  }

  signUp(){
    let registerUserDTO = new UserRegisterDTO("","","","","","");
    let userEmail = this.formGroupSignUp.get("email")?.value;
    let userFirstName = this.formGroupSignUp.get("firstName")?.value;
    let lastName = this.formGroupSignUp.get("lastName")?.value;
    let userPassword = this.formGroupSignUp.get("password")?.value;
    let repeatedPassword = this.formGroupSignUp.get("repeatedPassword")?.value;
    let phoneNumber = this.formGroupSignUp.get("phoneNumber")?.value;
    let dateOfBirth = this.formGroupSignUp.get("dateOfBirth")?.value;
    if(userPassword === repeatedPassword){
      registerUserDTO.email = userEmail;
      registerUserDTO.dateOfBirth = dateOfBirth
      registerUserDTO.name = userFirstName;
      registerUserDTO.surname = lastName;
      registerUserDTO.phoneNumber = phoneNumber
      this.service.signup(registerUserDTO)
    }
    return alert("Passwords did not match");
  }

}
