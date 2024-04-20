import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {

  constructor(private service :AuthService) { }

  ngOnInit(): void {
  }

  signUp(){
    let userSignUpDTO = new UserSignUpDTO()
    this.service.signup()
  }

}
