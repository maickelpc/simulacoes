import { Component, OnInit } from '@angular/core';
import { ArquivoService } from '../services/arquivo.service';
import { NotificationService } from '../shared/messages/notification.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-arquivo',
  templateUrl: './arquivo.component.html',
  styleUrls: ['./arquivo.component.css']
})


export class ArquivoComponent implements OnInit {

  constructor(
    private arquivoService: ArquivoService, 
    private notification: NotificationService
    )  { }

  private arquivos = [];
  private carregandoLista:boolean = false;
  private subindoArquivo: boolean = false;
  private dadosGrafico1 = [];
  private grafico1 = [];

  ngOnInit() {

    this.buscaArquivos(0);

  }

  buscaArquivos(idUsuario: number){

      this.arquivoService.buscaArquivos(idUsuario).subscribe(
        dados => {this.arquivos = dados.results, console.log(dados.results)},
        error => {
          console.log("Erro ao buscar arquivos: ");
          console.log(error);
          this.notification.notify("Erro ao buscar os Arquivos");
        }
      )
      

  }

  enviarArquivo(event){
    if(event.target.files && event.target.files[0]){
      const arquivo = event.target.files[0];
      this.arquivoService.enviarArquivo(arquivo,1).subscribe(
        () => {
          this.notification.notify("Arquivo enviado com sucesso!");
          this.buscaArquivos(0);
        },
        error => {
          console.log("Erro ao enviar o arquivo: ");
          console.log(error);
          this.notification.notify("Erro ao enviar o arquivo");
        }
      );

    }
  }

  grafico(arquivo: any){
    this.grafico1 = null
    this.arquivoService.buscaLeituras(arquivo.id).subscribe(
      dados=> {
        this.dadosGrafico1 = dados.leituras;
        console.log(this.dadosGrafico1);
        this.grafico1 = new Chart('canvas', {
          type: 'line',
          data: {
            labels: "",
            datasets: [
              {
                data: this.dadosGrafico1,
                borderColor: '#3cba9f',
                fill: false
              }
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });
      
   
      }
      ,error => {
        this.notification.notify("Erro ao buscar os dados")
        console.log("Erro  ao buscar os dados");
        console.log(error);
      }
    )
  
  }

}
