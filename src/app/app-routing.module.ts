import { LivroComponent } from './livro/livro.component';
import { JogoComponent } from './jogo/jogo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path: '', component: JogoComponent},
  {path: 'jogos', component: JogoComponent},
  {path: 'livros', component: LivroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
