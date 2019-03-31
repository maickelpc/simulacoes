import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'

import { LoginService } from './login.service'

import { API } from '../app.config'
import { identifierModuleUrl } from '@angular/compiler';
import { UserService } from './user.service';
import { User } from '../model/user.model';

@Injectable()
export class ArquivoService{

  private headers : HttpHeaders;

  private getHeaders():HttpHeaders{

    if (this.headers === undefined){
      this.headers = new HttpHeaders();
      this.headers = this.headers.append('Content-type', 'application/json');
      this.headers = this.headers.append('Authorization', 'Bearer '+ this.login.user().access);
    }

    return this.headers;
  }

    constructor(private http:HttpClient, private login:LoginService){

  }


  

  buscaArquivos (idUsuario: number): Observable<any>{

      let url = `${API}/dados/arquivo/`;

      if(idUsuario > 0)    
        url += '?usuario__id='+idUsuario;
    
      return this.http.get<any>(url, {headers: this.getHeaders()} )

    }

    buscaLeituras (idArquivo: number): Observable<any>{

      let url = `${API}/dados/arquivo/${idArquivo.toString()}/leituras/`;  
      console.log(url)    ;
    
      return this.http.get<any>(url, {headers: this.getHeaders()} )

    }

    enviarArquivo(arquivo : any, idAcelerometro:number):Observable<any>{

      let url = `${API}/dados/arquivo/upload/`

      let headers = new HttpHeaders();
      //headers = headers.append('Content-type', 'application/multipart-formdata');
      headers = headers.append('Authorization', 'Bearer '+ this.login.user().access);

      const formData = new FormData();
      formData.append('file', arquivo);
      formData.append('acelerometro', idAcelerometro.toString());

      return this.http.post(url, formData, {headers : headers})

    }
 
  }
