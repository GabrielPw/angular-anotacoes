import { Component } from '@angular/core';
import { Jogo } from './jogo';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.scss']
})
export class JogoComponent {

  jogos: Jogo[] = [
    {nome: 'The Legend of Zelda - Ocarina of Time', plataformas: ['Nintendo 64', 'Nintendo 3DS'], finalizado:true},
    {nome: 'The Legend of Zelda - Majoras Mask', plataformas: ['Nintendo 64', 'Nintendo 3DS']},
    {nome: 'God of war 2', plataformas: ['Playstation 2']},
    {nome: 'Resident Evil 4', plataformas: ['Playstation 2', 'PC']},
  ];

  displayedColumns = ['nome', 'plataformas', 'finalizado'];
}
