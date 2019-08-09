import { Component, OnInit } from '@angular/core';

import { FddService } from '../services/fdd.service'

@Component({
  selector: 'app-fdd',
  templateUrl: './fdd.component.html',
  styleUrls: ['./fdd.component.css']
})
export class FddComponent implements OnInit {

  dados = [];
  dadosGrafico = [];
  arquivoVisualizar = null;
  registro : any = {fourier: 2048, graus: 50, dominio: 5};

  constructor(private fddService : FddService) { }

  ngOnInit() {
    this.buscarArquivos();
  }


  visualizar(arquivo){
    this.arquivoVisualizar = arquivo;
    this.registro.id = arquivo.id;
  }

  buscarDadosGrafico(){
    console.log(this.registro);
    this.fddService.listarDadosGrafico(this.registro).subscribe(
      dados => {
        this.dadosGrafico = dados;
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

}
