import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Descricao } from '../jogo/descricao';
import { DescricaoService } from '../jogo/service/descricao.service';

@Component({
  selector: 'app-card-anotacao',
  templateUrl: './card-anotacao.component.html',
  styleUrls: ['./card-anotacao.component.scss']
})
export class CardAnotacaoComponent implements OnInit{

  descricoes: Descricao[] = [];
  id:string = '';

  constructor(private route: ActivatedRoute, private descricao: DescricaoService){
    
  }
  ngOnInit() {

    this.route.paramMap.subscribe(params => {
        this.id = JSON.parse(params.get('id') || '{}');
    
      }
    );

    this.descricao.getData('descricao/findByJogo/' + this.id).subscribe(data=> {

      this.descricoes = data;
      console.log("Lista Descricoes: " + data[0].descricao);
    });
  }
}
