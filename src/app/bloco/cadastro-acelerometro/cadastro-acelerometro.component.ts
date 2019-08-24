import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router} from '@angular/router';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { BlocoService } from '../../services/bloco.service';
import {Bloco, Acelerometro} from '../../model/bloco.model';
import { NotificationService } from '../../shared/messages/notification.service';

@Component({
  selector: 'app-cadastro-acelerometro',
  templateUrl: './cadastro-acelerometro.component.html',
  styleUrls: ['./cadastro-acelerometro.component.css']
})
export class CadastroAcelerometroComponent implements OnInit {

  constructor(private blocoService: BlocoService,
    private notification: NotificationService,
    private route : ActivatedRoute,
    private router : Router) { }

  acelerometro :Acelerometro;
  edicao :boolean;

  ngOnInit() {
    let idAceletrometro: number = this.route.snapshot.params['id'];
    if (idAceletrometro === undefined){
      this.acelerometro = new Acelerometro();
      this.edicao = false;
    }else{
      this.edicao = true;
      this.blocoService.buscaAcelerometroPorId(idAceletrometro).subscribe(
        dados => this.acelerometro = dados,
        erro => {
          console.log(erro);
          this.notification.notify("Erro ao recuperar o bloco para edição!");
          this.acelerometro = null;
        }
      );
    }
  }

  cancelar(){
    this.router.navigate(['/blocos/acelerometros']);
  }

  salvar(){
    let obs : any;
    if(this.acelerometro.id !== undefined){
      console.log("Atualizar");
      obs = this.blocoService.atualizarAcelerometro(this.acelerometro);

    }else{
      console.log("Salvar novo");
      obs = this.blocoService.salvarAcelerometro(this.acelerometro);
    }
    obs.subscribe(
      dados => {
        console.log(dados);
        this.acelerometro = dados;
        this.notification.notify('Dados salvos com sucesso!');
      },
      erro => {
        console.log(erro);
        this.notification.notify('Erro ao salvar os dados!');
      }
    );

  }

}
