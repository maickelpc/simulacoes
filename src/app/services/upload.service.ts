import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'

import { LoginService } from './login.service'

import { API } from '../app.config'

@Injectable()
export class UploadService{

  private headers : HttpHeaders;

    constructor(private http:HttpClient, private router: Router, private login:LoginService){
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Content-type', 'application/json');
    this.headers = this.headers.append('Authorization', 'Bearer '+login.user().access);

  }




  }
