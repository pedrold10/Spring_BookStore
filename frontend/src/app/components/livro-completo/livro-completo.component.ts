import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-livro-completo',
  templateUrl: './livro-completo.component.html',
  styleUrls: ['./livro-completo.component.css']
})
export class LivroCompletoComponent {
  livro: any;
  
  constructor(private livrosService: LivrosService, private route: ActivatedRoute) {
    
  }
  ngOnInit() {
    const livroId = this.route.snapshot.paramMap.get('id');
    if (livroId) {
      this.livrosService.obterLivro(Number(livroId)).subscribe(
        (livro) => {
          this.livro = livro;
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      // Lidar com o cenário em que o ID do livro não está disponível na rota
    }
  }
  

}
