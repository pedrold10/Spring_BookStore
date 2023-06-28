import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from 'src/app/models/livro/Livro';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-editar-livro',
  templateUrl: './editar-livro.component.html',
  styleUrls: ['./editar-livro.component.css']
})
export class EditarLivroComponent {
  livroAtributos: Livro = {
    id: 0,
    capa: "",
    autor: "",
    titulo: "",
    descricao: ""
  }


  constructor(private route: ActivatedRoute,
    private livrosService: LivrosService,
    private router: Router) {
  
  }
}
