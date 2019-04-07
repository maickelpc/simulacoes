import { Component, OnInit } from '@angular/core';
import { ArquivoService } from '../services/arquivo.service';
import { NotificationService } from '../shared/messages/notification.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { ChartErrorEvent, ChartEvent } from 'angular-google-charts';


// import * as pluginAnnotations from 'chartjs-plugin-annotation';


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

  public arquivos = [];
  public arquivo: any;
  private carregandoLista:boolean = false;
  private subindoArquivo: boolean = false;


  // Google charts
  public chart_options: any= {
    title: 'Grafico de Aceleração',
    hAxis: {title: 'Aceleração',  titleTextStyle: {color: '#333'},
              slantedText:true, slantedTextAngle:80},
    vAxis: {minValue: 0},
    explorer: {
      actions: ['dragToZoom', 'rightClickToReset'],
      axis: 'horizontal',
      keepInBounds: true,
      maxZoomIn: 4.0},
    colors: ['#D44E41'],

  };
  public chart_title = 'Grafico';
  public chart_type = 'LineChart';
  public chart_columnNames = ["","Aceleracao"];
  public chart_roles = [
    // { type: 'number', role: 'interval' },
    // { type: 'number', role: 'interval' },
    // { type: 'boolean', role: 'certainty' }
  ];
  public chart_data = [
    ["1",  1]
 ];


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
    this.arquivo = arquivo;
    this.chart_data = [];
    this.arquivoService.buscaLeituras(arquivo.id).subscribe(
      dados=> {

        this.chart_data =  dados.leituras.map(i => [i.registro, Number(i.valor) - dados.media]);

      }
      ,error => {
        this.notification.notify("Erro ao buscar os dados")
        console.log("Erro  ao buscar os dados");
        console.log(error);
      }
    )

  }

  onReady() {
    console.log('Chart ready');
  }

  onError(error: ChartErrorEvent) {
    console.error('Error: ' + error.message.toString());
  }

  onSelect(event: ChartEvent) {
    console.log('Selected: ' + event.toString());
  }

  onMouseEnter(event: ChartEvent) {
    console.log('Hovering ' + event.toString());
  }

  onMouseLeave(event: ChartEvent) {
    console.log('No longer hovering ' + event.toString());
  }

}
