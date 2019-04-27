import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlocoService } from '../../services/bloco.service';
import {Bloco} from '../../model/bloco.model';
import { NotificationService } from '../../shared/messages/notification.service';
import { ConfirmDialogService } from '../../shared/confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  constructor( private blocoService: BlocoService,
    private notification: NotificationService,
    private router: Router,
    private confirmService: ConfirmDialogService) { }


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
    this.confirmService.confirm('Confirmação de exclusão',`Tem certeza que deseja remover o bloco ${bloco.codigo} ?`, 'Excluir','Voltar','lg')
    .then((confirmed) => {
      console.log('User confirmed:', confirmed);
      alert("FODEU");
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
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
