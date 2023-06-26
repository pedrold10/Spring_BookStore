import { Component } from '@angular/core';
import { Livro } from '../../models/livro/Livro';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent {
  livros: Livro[] = [];
  
  constructor(private livrosService: LivrosService){}

  ngOnInit(): void{
    this.livrosService.listarLivros()
    .subscribe({
      next: (livros) => {
        this.livros = livros;
      },
      error: (response) => {
        console.log(response)
      }

    });
  }
}
