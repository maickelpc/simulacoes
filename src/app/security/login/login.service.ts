import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'

import { User } from './user.model'

import { API } from '../../app.config'

@Injectable()
export class LoginService{

  user: User;

  constructor(private http:HttpClient){}

  isLoggedIn():boolean{
    return this.user !== undefined;
  }

  login (login: string, password:string): Observable<User>{

    let headers = new HttpHeaders();
     // headers = headers.append('Access-Control-Allow-Origin', '*');
     // headers = headers.append('Access-Control-Allow-Methods', '*');
     // headers = headers.append('Access-Control-Allow-Headers', '*');
     headers = headers.append('Content-type', 'application/json');

      return this.http.post<User>(
        `${API}/api-token-auth/`,
        {username: login, password:password, grant_type: 'password'},
        {headers: headers})
        .do(user => this.user = user);
  }

}
