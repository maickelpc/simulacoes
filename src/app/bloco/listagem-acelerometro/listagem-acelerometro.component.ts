import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlocoService } from '../../services/bloco.service';
import { Acelerometro} from '../../model/bloco.model';
import { NotificationService } from '../../shared/messages/notification.service';
// import { ConfirmDialogService } from '../../shared/confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-listagem-acelerometro',
  templateUrl: './listagem-acelerometro.component.html',
  styleUrls: ['./listagem-acelerometro.component.css']
})
export class ListagemAcelerometroComponent implements OnInit {

  constructor(private blocoService: BlocoService,
    private notification: NotificationService,
    private router: Router) { }

  public popoverTitle: string = 'Confirmação';
  public popoverMessage: string = 'Tem Certeza que deseja remover o registro?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;

  acelerometros: Acelerometro[];
  search: string;

  ngOnInit() {
    this.buscaAcelerometros('');
  }

  novo(){
    this.router.navigate(['/blocos/acelerometros/cadastro']);
  }

  editar(acelerometro: Acelerometro){
    this.router.navigate(['/blocos/acelerometros/cadastro/'+acelerometro.id]);
  }

  excluir(acelerometro: Acelerometro){
    this.blocoService.excluirAcelerometro(acelerometro).subscribe(
      dados => {
        this.notification.notify("O acelerometro foi excluido com sucesso");
        this.acelerometros.splice(this.acelerometros.indexOf(acelerometro),1);
      },
      erros => {
        console.log(erros);
        this.notification.notify("Erro ao excluir o Acelerometro");
      }
    )
  }

  buscaAcelerometros(parametro: string){
    this.acelerometros = null;
    this.blocoService.buscaAcelerometros(parametro).subscribe(
      dados => {
        console.log(dados);
        this.acelerometros = dados.results;
      },
      erros => {
        console.log(erros);
        this.notification.notify("Erro ao buscar os Acelerometros");
      }
    )
  }

}
