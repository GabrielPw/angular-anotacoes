import { Descricao } from './../jogo/descricao';
import { DescricaoService } from './../jogo/service/descricao.service';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JogoService } from '../jogo/service/jogo.service';

@Component({
  selector: 'app-jogo-detail',
  templateUrl: './jogo-detail.component.html',
  styleUrls: ['./jogo-detail.component.scss']
})
export class JogoDetailComponent implements OnInit{

  isFormHidden : boolean = true;
  id:string = '';
  jogoRecebido:any = [];

  nome:string = '';
  descricoes: Descricao[] = [];
  constructor(private route: ActivatedRoute, private jogo: JogoService, private descricao: DescricaoService){

  }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = JSON.parse(params.get('id') || '{}');
    });

    this.jogo.getData('jogo/' + this.id).subscribe(data=>{
      console.warn(data);
      this.jogoRecebido = data;

      this.nome = data.nome;
      //this.descricoes = data.descricoes!; // O ! --> You can now use the non-null assertion operator that is here exactly for your use case. It tells TypeScript that even though something looks like it could be null, it can trust you that it's not:

    });

    let dataPrincipalBlnc = this.jogoRecebido;
    let params = new HttpParams().set("requestData", encodeURIComponent(dataPrincipalBlnc)); // .set("authenticationType", this.authType)
    // Obter descricao
    this.descricao.getData('descricao/findByJogo/' + this.id).subscribe(data=> {

      this.descricoes = data;
      console.log("Lista Descricoes: " + data[0].descricao);
    });
  }
}
