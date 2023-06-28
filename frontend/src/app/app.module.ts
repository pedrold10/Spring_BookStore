import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ListarLivrosComponent } from './components/listar-livros/listar-livros.component';
import { AdicionarLivroComponent } from './components/adicionar-livro/adicionar-livro.component';
import { EditarLivroComponent } from './components/editar-livro/editar-livro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListarLivrosComponent,
    AdicionarLivroComponent,
    EditarLivroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
