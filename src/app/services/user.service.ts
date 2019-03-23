import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'

import { User } from '../model/user.model'
import { LoginService } from './login.service'

import { API } from '../app.config'

@Injectable()
export class UserService{

  private headers : HttpHeaders;

  private getHeaders():HttpHeaders{

    if (this.headers === undefined){
      this.headers = new HttpHeaders();
      this.headers = this.headers.append('Content-type', 'application/json');
      this.headers = this.headers.append('Authorization', 'Bearer '+ this.login.user().access);
    }

    return this.headers;
  }

  constructor(private http:HttpClient, private router: Router, private login:LoginService){

    console.log(login.user().access);

  }


  getUser (id: number): Observable<User>{

    let headers = new HttpHeaders();
    headers = headers.append('Content-type', 'application/json');

    return this.http.get<User>(
      `${API}/user/${id}/`,      {headers: this.getHeaders()});
    }


  }
