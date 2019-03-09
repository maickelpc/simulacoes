import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms'

import { LoginService } from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private fb: FormBuilder, private loginService : LoginService) {

   }

  ngOnInit() {
    //this.fb =   new FormBuilder();

    this.loginForm = this.fb.group({
      login: this.fb.control('',[Validators.required]),
      password: this.fb.control('',[Validators.required]),

    })
  }

  login(){
    this.loginService.login(
      this.loginForm.value.login,
      this.loginForm.value.password)
      .subscribe(token => console.log(token));

  }

}
