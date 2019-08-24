import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FddService } from '../../services/fdd.service'
import { NotificationService } from '../../shared/messages/notification.service';
import { NgbTimeStruct, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-fdd-form',
  templateUrl: './fdd-form.component.html',
  styleUrls: ['./fdd-form.component.css']
})
export class FddFormComponent implements OnInit {

  constructor(
    private fddService : FddService,
    private router: Router,
    private notification: NotificationService,
    private route : ActivatedRoute,) { }

    registro : any = {}
    edicao = true;

  ngOnInit() {
    let id: number = this.route.snapshot.params['id'];
    if (id === undefined){
      this.registro = {}
      this.edicao = false;
    }else{
      this.edicao = true;
      this.fddService.buscarArquivoPorId(id).subscribe(
        dados => {
          console.log(dados);
          alert("Certo");
        },

        erro => {
          console.log(erro);
          this.notification.notify("Erro ao recuperar o registro para edição!");
          this.registro = null;
        }
      );
    }
  }

  cancelar(){
    this.router.navigate(['/fdd']);
  }

  carregarArquivo(event){

    console.log(event.target.files[0]);
    this.registro.arquivo = event.target.files[0];
    console.log(this.registro.arquivo);

    if(event.target.files && event.target.files[0]){

      console.log("ENTROU");
      // this.registro.arquivo = event.target.files[0];

    }


  }

  salvar(){
    let obs : any;
    if(this.registro.id !== undefined){
      console.log("Atualizar");
      obs = this.fddService.enviaArquivo(this.registro);

    }else{
      console.log("Salvar novo");
      obs = this.fddService.enviaArquivo(this.registro);
    }
    obs.subscribe(
      dados => {

        this.registro = dados;
        this.notification.notify('Dados salvos com sucesso!');
        this.cancelar();
      },
      erro => {
        console.log(erro);
        this.notification.notify('Erro ao salvar os dados!');
      }
    );
  }





}
