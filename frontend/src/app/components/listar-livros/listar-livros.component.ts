import { Component } from '@angular/core';
import { Livro } from '../../models/livro/Livro';
import { LivrosService } from 'src/app/services/livros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent {

  livros: Livro[] = [
  ];
  


  constructor(private livrosService: LivrosService,
    private router: Router){}

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
  selecionarLivro(livro: any) {
    this.livrosService.obterLivro(livro.id).subscribe(
      (livroRetornado) => {
        this.livrosService.setLivroSelecionado(livroRetornado);
        //this.router.navigate(['/livros', livro.id]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
