import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JogoDetailComponent } from './jogo-detail/jogo-detail.component';
import { JogoComponent } from './jogo/jogo.component';
import { LivroComponent } from './livro/livro.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
  {path: '', component: JogoComponent},
  {path: 'jogos', component: JogoComponent},
  {path: 'livros', component: LivroComponent},
  {path: 'jogos/:id', component: JogoDetailComponent},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
