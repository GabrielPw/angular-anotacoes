import { Component } from '@angular/core';

import { Livro } from './livro';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
})
export class LivroComponent {

  livros: Livro[] = [
    {titulo: '1984', autor: 'George Orwell'},
    {titulo: 'A Revolução dos Bichos', autor: 'George Orwell'},
    {titulo: 'Apologia de Sócrates', autor: 'Platão'},
    {titulo: 'Crime e Castigo', autor: 'Fiodór Dostoiévski'},
    {titulo: 'Discurso do Método', autor: 'Réne Descartes'},
  ];

  displayedColumns: string[] = ['titulo', 'autor'];
}
