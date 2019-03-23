import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { FormGroup,FormBuilder, Validators } from '@angular/forms'
import { NotificationService } from '../../shared/messages/notification.service'



import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  navigateTo: string

  constructor(
    private fb: FormBuilder,
    private loginService : LoginService,
    private notification: NotificationService,
    private activtedRoute: ActivatedRoute,
    private router : Router) {

   }

  ngOnInit() {
    //this.fb =   new FormBuilder();

    this.loginForm = this.fb.group({
      login: this.fb.control('',[Validators.required]),
      password: this.fb.control('',[Validators.required]),

    });
    this.navigateTo = this.activtedRoute.snapshot.params['to'] || btoa('/');

  }

  login(){
    this.loginService.login(
      this.loginForm.value.login,
      this.loginForm.value.password)
      .subscribe(() => { //then
        this.notification.notify(`Bem vindo`);


      }, response =>  { // catch
        this.notification.notify(`Credenciais inválidas!`);

        console.log(response);
      },() => { // finally
        this.router.navigate([atob(this.navigateTo)]);
      });

  }

}
