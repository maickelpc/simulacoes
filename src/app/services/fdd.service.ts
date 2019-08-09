import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'

import { LoginService } from './login.service'

import { API } from '../app.config'
import { identifierModuleUrl } from '@angular/compiler';

@Injectable()
export class FddService{

  private headers : HttpHeaders;

  private getHeaders():HttpHeaders{

    if (this.headers === undefined){
      this.headers = new HttpHeaders();
      this.headers = this.headers.append('Content-type', 'application/json');
      this.headers = this.headers.append('Authorization', 'Bearer '+ this.login.user().access);
    }

    return this.headers;
  }

  constructor(private http:HttpClient, private login:LoginService){}


  listarArquivos(): Observable<any>{

    let url = `${API}/fdd/arquivo/`;
    return this.http.get<any>(url, {headers: this.getHeaders()} );

  }

  listarDadosGrafico(grafico): Observable<any>{

    let url = `${API}/fdd/arquivo/grafico/`;
    const formData = new FormData();
    formData.append('id', grafico.id);
    formData.append('fourier', grafico.fourier);
    formData.append('graus', grafico.graus);
    formData.append('dominio', grafico.dominio);

    return this.http.post<any>(url, grafico ,{headers: this.getHeaders()} );

  }

  enviaArquivo(dados : any): Observable<any>{
    let url = `${API}/bloco/upload/`;

    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer '+ this.login.user().access);
    // headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    console.log(dados);
    const formData = new FormData();
    formData.append('arquivo', dados.arquivo);
    formData.append('data', dados.data.toString());
    formData.append('descricao', dados.descricao);

    return this.http.post(url, formData, {headers : headers})
  }

}
