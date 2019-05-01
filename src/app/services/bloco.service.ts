import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'

import { LoginService } from './login.service'

import { API } from '../app.config'
import { identifierModuleUrl } from '@angular/compiler';
import { Bloco, Acelerometro } from '../model/bloco.model';

@Injectable()
export class BlocoService{

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


  buscaBlocos (parametro: string): Observable<any>{

    let url = `${API}/bloco/`;
    if(parametro.length > 0)
      url += "?search="+parametro
    return this.http.get<any>(url, {headers: this.getHeaders()} );

  }

  buscaPorId (parametro: number): Observable<Bloco>{

    let url = `${API}/bloco/${parametro}/`;
    return this.http.get<any>(url, {headers: this.getHeaders()} );

  }

  salvar (bloco : Bloco): Observable<any>{
    let url = `${API}/bloco/`;
    return this.http.post<Bloco>(url, bloco ,{headers: this.getHeaders()} );
  }

  atualizar (bloco : Bloco): Observable<any>{
    let url = `${API}/bloco/${bloco.id}/`;
    return this.http.put<Bloco>(url, bloco ,{headers: this.getHeaders()} );
  }

  excluir (bloco : Bloco): Observable<any>{
    let url = `${API}/bloco/${bloco.id}/`;
    return this.http.delete<any>(url, {headers: this.getHeaders()} );
  }


  buscaAcelerometros (parametro: string): Observable<any>{

    let url = `${API}/acelerometro/`;
    if(parametro.length > 0)
      url += "?search="+parametro
    return this.http.get<any>(url, {headers: this.getHeaders()} );

  }

  buscaAcelerometroPorId (parametro: number): Observable<Acelerometro>{

    let url = `${API}/acelerometro/${parametro}/`;
    return this.http.get<any>(url, {headers: this.getHeaders()} );

  }

  salvarAcelerometro (acelerometro : Acelerometro): Observable<any>{
    let url = `${API}/acelerometro/`;
    console.log(acelerometro);
    return this.http.post<Acelerometro>(url, acelerometro ,{headers: this.getHeaders()} );
  }

  atualizarAcelerometro (acelerometro : Acelerometro): Observable<any>{
    let url = `${API}/acelerometro/${acelerometro.id}/`;
    return this.http.put<Acelerometro>(url, acelerometro ,{headers: this.getHeaders()} );
  }

  excluirAcelerometro (acelerometro : Acelerometro): Observable<any>{
    let url = `${API}/acelerometro/${acelerometro.id}/`;
    return this.http.delete<any>(url, {headers: this.getHeaders()} );
  }




  //
  // buscaLeituras (idArquivo: number): Observable<any>{
  //
  //   let url = `${API}/dados/arquivo/${idArquivo.toString()}/leituras/`;
  //   console.log(url)    ;
  //
  //   return this.http.get<any>(url, {headers: this.getHeaders()} )
  //
  // }

  // enviarArquivo(arquivo : any, idAcelerometro:number):Observable<any>{
  //
  //   let url = `${API}/dados/arquivo/upload/`
  //
  //   let headers = new HttpHeaders();
  //   //headers = headers.append('Content-type', 'application/multipart-formdata');
  //   headers = headers.append('Authorization', 'Bearer '+ this.login.user().access);
  //
  //   const formData = new FormData();
  //   formData.append('file', arquivo);
  //   formData.append('acelerometro', idAcelerometro.toString());
  //
  //   return this.http.post(url, formData, {headers : headers})
  //
  // }

}
