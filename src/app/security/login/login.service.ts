import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'

import { User } from './user.model'

import { API } from '../../app.config'

@Injectable()
export class LoginService{

  public loggedUser: User;

  user():User{
    return this.loggedUser;
  }

  constructor(private http:HttpClient, private router: Router){}

  isLoggedIn():boolean{
    this.loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'));
    // this.loggedUser = JSON.parse(window.sessionStorage.getItem('loggedUser'));
    return this.loggedUser !== (undefined || null);
  }

  login (login: string, password:string): Observable<User>{

    let headers = new HttpHeaders();
    headers = headers.append('Content-type', 'application/json');

    return this.http.post<User>(
      `${API}/token/`,
      {username: login, password:password, grant_type: 'password'},
      {headers: headers})
      .do(user => {

        //recupera os claims do payload do token
        let data = user.access.toString().split('.');
        let userTemp = JSON.parse(atob(data[1]));

        this.loggedUser = user;
        this.loggedUser.username = userTemp.username;
        this.loggedUser.firstName = userTemp.firstName;
        this.loggedUser.lastName = userTemp.lastName;
        this.loggedUser.email = userTemp.email;

        window.localStorage.setItem('loggedUser', JSON.stringify(user));
        //window.sessionStorage.setItem('loggedUser', JSON.stringify(user))
      });
    }

    handleLogin(path?: string){
      this.router.navigate(['/login', btoa(path)])
    }

    logout(){
      // window.sessionStorage.removeItem('usuario');
      window.localStorage.removeItem('loggedUser');
      this.loggedUser = null;

      this.handleLogin();
    }

  }
