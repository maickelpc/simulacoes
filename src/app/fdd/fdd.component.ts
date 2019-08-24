import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FddService } from '../services/fdd.service'

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { ChartErrorEvent, ChartEvent } from 'angular-google-charts';

@Component({
  selector: 'app-fdd',
  templateUrl: './fdd.component.html',
  styleUrls: ['./fdd.component.css']
})
export class FddComponent implements OnInit {

  dados = [];

  arquivoVisualizar = null;
  registro : any = {fourier: 2048, graus: 50, dominio: 5};


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

  public dadosGrafico = [["1",  1], ["2",  5], ["3",  4] ];
 //  public chart_data = [
 //    ["1",  1]
 // ];


  constructor(private fddService : FddService, private router: Router) { }

  ngOnInit() {
    this.buscarArquivos();
  }


  visualizar(arquivo){
    console.log(arquivo)
    this.arquivoVisualizar = arquivo;
    this.arquivoVisualizar.analisar = arquivo.canais;
    this.arquivoVisualizar.fourier = 2048;
    // this.registro.id = arquivo.id;
  }

  matriz = [[]];
  buscarDadosGrafico(){
    console.log(this.arquivoVisualizar);
    this.fddService.listarDadosGrafico(this.arquivoVisualizar).subscribe(
      dados => {
        console.log(dados);
        this.matriz = dados;
        // let frequencia = dados[0];
        // let valores = dados[1];
        // console.log(frequencia);
        // console.log(valores);
        //
        // frequencia = JSON.parse(dados[0]);
        // valores = JSON.parse(dados[1]);
        //
        // console.log(frequencia);
        // console.log(valores);

        // this.dadosGrafico = dados;

        // this.chart_data =  dados.leituras.map(i => [i.registro, Number(i.valor) - dados.media]);
      },erro => {
        console.log("Erro");
        console.log(erro);
        alert("Erro ao buscar dados do arquivo");
      }
    )
  }

  buscarArquivos(){
    this.fddService.listarArquivos().subscribe(
      dados => {
        console.log(dados);
        this.dados = dados.results;
      },erros => {
        console.log(erros);
        alert("Erro ao buscar os arquivos");
      }
    )


  }

  adicionar(){
    this.router.navigate(['/fdd/novo']);
  }


}
