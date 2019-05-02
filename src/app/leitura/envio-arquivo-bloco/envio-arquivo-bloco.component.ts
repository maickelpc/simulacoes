import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlocoService } from '../../services/bloco.service';
import { Acelerometro} from '../../model/bloco.model';
import { NotificationService } from '../../shared/messages/notification.service';

@Component({
  selector: 'app-envio-arquivo-bloco',
  templateUrl: './envio-arquivo-bloco.component.html',
  styleUrls: ['./envio-arquivo-bloco.component.css']
})
export class EnvioArquivoBlocoComponent implements OnInit {

  constructor(private blocoService: BlocoService,
    private notification: NotificationService,
    private router: Router) { }

  ngOnInit() {
  }



  item:any;

  keyword = 'name';
  dataAcelerometro = [];
  dataBloco = [];
  //notFound = "Nenhum item encontrado"
  envio = {
    acelerometroId: null,
    blocoId: null,
    arquivo : null,
    dataHoraInicio: null,
  }

  enviaArquivo(){
    this.blocoService.enviaArquivo(this.envio).subscribe();

  }

  enviarArquivo(event){
    if(event.target.files && event.target.files[0]){
      this.envio.arquivo = event.target.files[0];
    }
    console.log(this.envio.arquivo);
  }

  selectEventAcelerometro(item) {
    this.envio.acelerometroId = item.id;
    console.log(item);
  }

  limpaAcelerometro(){
    this.envio.acelerometroId = null;
  }

  onChangeSearchAcelerometro(val: string) {
    this.envio.acelerometroId = null;
    this.blocoService.buscaAcelerometros(val).subscribe(
      dados => {
        let lista = dados.results.map(function(x){
          return {id: x.id, name: x.codigo + ' - ' + x.descricao + ' - '+ x.localizacao}
        });
        this.dataAcelerometro = lista;
        console.log(this.dataAcelerometro);
      },
      erro => {
        console.log(erro);
        this.notification.notify("Erro ao consultar os acelerometro")
      }
    );
  }

  selectEventBloco(item) {
    this.envio.blocoId = item.id;
  }

  limpaBloco(){
    this.envio.blocoId = null;
  }

  onChangeSearchBloco(val: string) {
    this.envio.blocoId = null;
    this.blocoService.buscaBlocos(val).subscribe(
      dados => {
        let lista = dados.results.map(function(x){
          return {id: x.id, name: x.codigo + ' - ' + x.descricao}
        });
        this.dataBloco = lista;
        console.log(this.dataBloco);
      },
      erro => {
        console.log(erro);
        this.notification.notify("Erro ao consultar os Blocos")
      }
    );
  }

  formularioInvalido(): boolean{
    if(this.envio.blocoId === null)
      return true;

    if(this.envio.acelerometroId === null)
      return true;

    if(this.envio.arquivo === null)
      return true;

    if(this.envio.dataHoraInicio === null)
      return true;
    return false;
  }
}
