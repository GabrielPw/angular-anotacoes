import { Component } from '@angular/core';
import { Jogo } from './jogo';
import {JogoService} from './service/jogo.service'
@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.scss']
})
export class JogoComponent {

  jogos: Jogo[] = [
    {id: 1, nome: 'The Legend of Zelda - Ocarina of Time', plataformas: ['Nintendo 64', 'Nintendo 3DS'], finalizado:true},
    {id: 2, nome: 'The Legend of Zelda - Majoras Mask', plataformas: ['Nintendo 64', 'Nintendo 3DS']},
    {id: 3, nome: 'God of war 2', plataformas: ['Playstation 2']},
    {id: 4, nome: 'Resident Evil 4', plataformas: ['Playstation 2', 'PC']},
  ];

  jogosApi:any = [

  ];
  displayedColumns = ['nome', 'plataformas', 'finalizado'];

  constructor(private jogo: JogoService){

    this.jogo.getData().subscribe(data=>{
      console.warn(data);
      this.jogosApi = data;
    });
  }
}
