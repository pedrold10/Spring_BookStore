import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { Livro } from '../models/livro/Livro';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  listarLivros(): Observable<Livro[]>{
    return this.http.get<Livro[]>(`${this.baseApiUrl}api/livro`);
  }
}
