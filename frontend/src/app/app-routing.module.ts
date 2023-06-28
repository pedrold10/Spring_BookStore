import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarLivrosComponent } from './components/listar-livros/listar-livros.component';
import { AdicionarLivroComponent } from './components/adicionar-livro/adicionar-livro.component';

const routes: Routes = [
  {
    path: 'livros',
    component: ListarLivrosComponent
  },
  {
    path: 'new',
    component: AdicionarLivroComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
