import { Component } from '@angular/core';
import { Livro } from '../../models/livro/Livro';
import { Router } from '@angular/router';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-adicionar-livro',
  templateUrl: './adicionar-livro.component.html',
  styleUrls: ['./adicionar-livro.component.css']
})
export class AdicionarLivroComponent {

  adicionarLivroRequest: Livro = {
    id: 0,
    capa: "",
    autor: "",
    titulo: "",
    descricao: ""

  }

  constructor(private livrosService: LivrosService, 
    private router: Router){

  }

  ngOnInit(): void{

  }

  adicionarLivro(){
    this.livrosService.adicionarLivro(this.adicionarLivroRequest)
    .subscribe(
      (livro) => {
        this.router.navigate(["livros"])
      }
    );
  }
}
