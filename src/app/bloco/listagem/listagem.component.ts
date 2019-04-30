import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlocoService } from '../../services/bloco.service';
import {Bloco} from '../../model/bloco.model';
import { NotificationService } from '../../shared/messages/notification.service';
// import { ConfirmDialogService } from '../../shared/confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  constructor( private blocoService: BlocoService,
    private notification: NotificationService,
    private router: Router) { }

    public popoverTitle: string = 'Confirmação';
    public popoverMessage: string = 'Tem Certeza que deseja remover o registro?';
    public confirmClicked: boolean = false;
    public cancelClicked: boolean = false;

  private blocos: Bloco[];
  public search: string;

  ngOnInit() {
    this.buscaBlocos('');
  }

  novo(){
    this.router.navigate(['/blocos/cadastro']);
  }

  editar(bloco: Bloco){
    this.router.navigate(['/blocos/cadastro/'+bloco.id]);
  }

  excluir(bloco: Bloco){
    this.blocoService.excluir(bloco).subscribe(
      dados => {
        this.notification.notify("O bloco foi excluido com sucesso");
        this.blocos.splice(this.blocos.indexOf(bloco),1);
      },
      erros => {
        console.log(erros);
        this.notification.notify("Erro ao excluir o Bloco");
      }
    )
  }

  buscaBlocos(parametro: string){
    this.blocos = null;
    this.blocoService.buscaBlocos(parametro).subscribe(
      dados => {
        console.log(dados);
        this.blocos = dados.results;
      },
      erros => {
        console.log(erros);
        this.notification.notify("Erro ao buscar os Blocos");
      }
    )
  }

}
