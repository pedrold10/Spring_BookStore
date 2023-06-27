import { Component } from '@angular/core';
import { Livro } from '../../models/livro/Livro';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent {
  livros: Livro[] = [
    {
      "id": 1,
      "capa": "https://m.media-amazon.com/images/I/41897yAI4LL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
      "autor": "J.K. Rowling",
      "titulo": "Harry Potter and the Sorcerer's Stone",
      "descricao": "A young boy discovers he is a wizard and embarks on a magical adventure."
    },
    {
      "id": 2,
      "capa": "https://http2.mlstatic.com/D_NQ_NP_775158-MLU50596264915_072022-O.webp",
      "autor": "George Orwell",
      "titulo": "1984",
      "descricao": "A dystopian novel set in a totalitarian society where individualism is suppressed."
    },
    {
      "id": 3,
      "capa": "https://papelariacriativa.com.br/wp-content/uploads/livro-literatura-orgulho-e-preconceito-editora-vitrola-1.jpg",
      "autor": "Jane Austen",
      "titulo": "Pride and Prejudice",
      "descricao": "A classic novel exploring themes of love, marriage, and social class in 19th-century England."
    }
    
    
  ];
  
  constructor(private livrosService: LivrosService){}

  ngOnInit(): void{
    this.listarLivros();
  }
  listarLivros(): void {
    this.livrosService.listarLivros().subscribe(
      (livros) => {
        this.livros = livros;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
