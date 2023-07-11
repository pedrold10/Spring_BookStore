import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { Livro } from '../models/livro/Livro';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private livroSelecionado: any;
  

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  obterLivro(id: Number): Observable<Livro>{
    return this.http.get<any>(`${this.baseApiUrl}/${id}`);
  }

  listarLivros(): Observable<Livro[]>{
    return this.http.get<Livro[]>(`${this.baseApiUrl}`);
  }

  adicionarLivro(adicionarLivroRequest: Livro): Observable<Livro[]>{
    return this.http.post<Livro>(`${this.baseApiUrl}`, adicionarLivroRequest)
    .pipe(
      map((response: any)=> response.data)
    )
  }

  editarLivro(id: Number, editarLivroRequest: Livro): Observable<Livro>{
    return this.http.put<Livro>(`${this.baseApiUrl}/${id}`, editarLivroRequest)
  }

  deletarLivro(id: Number): Observable<Livro>{
    return this.http.delete<Livro>(`${this.baseApiUrl}/${id}`)
  }

  setLivroSelecionado(livro: any) {
    this.livroSelecionado = livro;
  }

  getLivroSelecionado() {
    return this.livroSelecionado;
  }
}
