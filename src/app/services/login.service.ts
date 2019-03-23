import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'

import { User } from '../model/user.model'

import { API } from '../app.config'

@Injectable()
export class LoginService{

  private loggedUser: User;

  user():User{
    this.loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'));
    var agora = Date.now() / 1000;
    if(agora < this.loggedUser.tokenExpire){
      return this.loggedUser;
    }else{
      this.logout();
    }

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
        this.loggedUser.id = userTemp.user_id;
        this.loggedUser.username = userTemp.username;
        this.loggedUser.first_name = userTemp.first_name;
        this.loggedUser.last_name = userTemp.last_name;
        this.loggedUser.email = userTemp.email;
        this.loggedUser.tokenExpire = userTemp.exp;

        window.localStorage.setItem('loggedUser', JSON.stringify(user));
        //window.sessionStorage.setItem('loggedUser', JSON.stringify(user))

        this.imageUser(this.loggedUser.id, this.loggedUser.access).subscribe();

      });
    }

  refreshToken (accessToken: string, refreshToken:string): Observable<User>{

    let headers = new HttpHeaders();
    headers = headers.append('Content-type', 'application/json');
    headers = headers.append('refresh', refreshToken);

    return this.http.post<User>(
      `${API}/CAMINHODOREFRESH/`,
      {access: accessToken},
      {headers: headers})
      .do(user => {

        //recupera os claims do payload do token
        let data = user.access.toString().split('.');
        let userTemp = JSON.parse(atob(data[1]));
        console.log("Tratar");
        this.loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'));
        // this.loggedUser.id = userTemp.user_id;
        // this.loggedUser.username = userTemp.username;
        // this.loggedUser.first_name = userTemp.first_name;
        // this.loggedUser.last_name = userTemp.last_name;
        // this.loggedUser.email = userTemp.email;
        // this.loggedUser.tokenExpire = userTemp.exp;

        window.localStorage.setItem('loggedUser', JSON.stringify(user));
        //window.sessionStorage.setItem('loggedUser', JSON.stringify(user))

        this.imageUser(this.loggedUser.id, this.loggedUser.access).subscribe();

      });
    }

    imageUser (id: number, token: string): Observable<any>{

      let headers = new HttpHeaders();
      headers = headers.append('Content-type', 'application/json');
      headers = headers.append('Authorization', 'Bearer '+token);

      return this.http.get<any>(
        `${API}/profile/${id}/`,
        {headers: headers})
        .do(retorno => {

          this.loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'));
         this.loggedUser.image = retorno.image;

          window.localStorage.setItem('loggedUser', JSON.stringify(this.loggedUser));
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
