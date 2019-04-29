import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { BlocoService } from '../../services/bloco.service';
import {Bloco} from '../../model/bloco.model';
import { NotificationService } from '../../shared/messages/notification.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private blocoService: BlocoService,
    private notification: NotificationService,
    private route : ActivatedRoute,
    private router : Router) { }

    private bloco :Bloco;
    private edicao :boolean;


  ngOnInit() {

    let idBloco: number = this.route.snapshot.params['id'];
    if (idBloco === undefined){
      this.bloco = new Bloco();
      this.edicao = false;
    }else{
      this.edicao = true;
      this.blocoService.buscaPorId(idBloco).subscribe(
        dados => this.bloco = dados,
        erro => {
          console.log(erro);
          this.notification.notify("Erro ao recuperar o bloco para edição!");
          this.bloco = null;
        }
      );
    }


  }

  cancelar(){
    this.router.navigate(['/blocos/listagem']);
  }

  salvar(){
    let obs : any;
    if(this.bloco.id !== undefined){
      console.log("Atualizar");
      obs = this.blocoService.atualizar(this.bloco);

    }else{
      console.log("Salvar novo");
      obs = this.blocoService.salvar(this.bloco);
    }
    obs.subscribe(
      dados => {
        console.log(dados);
        this.bloco = dados;
        this.notification.notify('Dados salvos com sucesso!');
      },
      erro => {
        console.log(erro);
        this.notification.notify('Erro ao salvar os dados!');
      }
    );



  }

}
