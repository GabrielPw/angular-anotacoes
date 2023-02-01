import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { JogoService } from './../service/jogo.service';

@Component({
  selector: 'app-jogo-new',
  templateUrl: './jogo-new.component.html',
  styleUrls: ['./jogo-new.component.scss']
})

export class JogoNewComponent {


  jogoService: JogoService;
  constructor(jogoService :JogoService, private router: Router){
  
    this.jogoService = jogoService;
  }

  //plataformaEnum: typeof PlataformaEnum = PlataformaEnum;
  plataformas: any[] = [

    {titulo: 'Game Cube', isChecked: false},
    {titulo: 'Game Boy', isChecked: false},
    {titulo: 'Nintendo 64', isChecked: false},
    {titulo: 'Nintendo 3DS', isChecked: false},
    {titulo: 'Playstation', isChecked: false},
    {titulo: 'Playstation 2', isChecked: false},
    {titulo: 'Playstation 3', isChecked: false},
    {titulo: 'Playstation 4', isChecked: false},
    {titulo: 'Super Nintendo', isChecked: false},
    {titulo: 'Windows (PC)', isChecked: false},
    {titulo: 'Xbox 360', isChecked: false},
    {titulo: 'Xbox One', isChecked: false}
  ];

  selecionados: string[] = [];

  terminou: boolean = false; 
  desenvolvedor: string = '';

  exibeSelecionados(titulo:string){

    console.log('Array: ' + this.selecionados);
    this.selecionados.push(titulo);
    this.plataformas.map(p => {
          
      // Será aplicado apenas ao item clicado (filtrando por titulo recebido em parametro)
      if(p.titulo == titulo){
        if (p.isChecked){
          p.isChecked = false;
          console.log("desselecionado")
        } else{
          p.isChecked = true;
          console.log("selecionado")
        }
      }
    });
    console.log(titulo)
  }

  salvarJogo(jogo: {nome: string, plataformas:string, desenvolvedor: string, finalizado:boolean}){

    let str_plataformas: string = '';
    for(let selecionado of this.selecionados){
      
      str_plataformas+= selecionado + ', ';
    }

    console.log('\n\nstr_plataformas -->' + str_plataformas + '-');
    if(str_plataformas.endsWith(', ')){
      str_plataformas = str_plataformas.substring(0, str_plataformas.length - 2);
      console.log('\n\nstr_plataformas (alterado) -->' + str_plataformas + '-');  
    }

    jogo.plataformas = str_plataformas;
    jogo.finalizado = this.terminou;
    //jogo.desenvolvedor = this.desenvolvedor;

    //let novo_jogo: any[] = [{nome: jogo.titulo, plataformas: str_plataformas, finalizados: true}];
    
    console.log("\nFinalizado --> " + jogo.finalizado)
    console.log('\nPost em : ' + jogo)
    this.jogoService.postData("jogo/new", jogo);

    this.router.navigate(['/'])
  }

}

