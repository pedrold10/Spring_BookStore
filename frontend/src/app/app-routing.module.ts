import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarLivrosComponent } from './components/listar-livros/listar-livros.component';
import { AdicionarLivroComponent } from './components/adicionar-livro/adicionar-livro.component';
import { EditarLivroComponent } from './components/editar-livro/editar-livro.component';
import { LivroCompletoComponent } from './components/livro-completo/livro-completo.component';

const routes: Routes = [
  {
    path: 'livros',
    component: ListarLivrosComponent
  },
  {
    path: 'new',
    component: AdicionarLivroComponent
  },
  {
    path: 'editar/:id',
    component: EditarLivroComponent
  },
  {
    path: 'livros/:id',
    component: LivroCompletoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
