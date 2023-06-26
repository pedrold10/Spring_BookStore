package project.bookstore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.bookstore.model.Livro;
import project.bookstore.service.LivroService;

import java.util.List;

@RestController
@RequestMapping("/bookstore")
public class LivroController {

    private final LivroService livroService;

    @Autowired
    public LivroController(LivroService livroService) {
        this.livroService = livroService;
    }

    @GetMapping("/livros")
    public List<Livro> listarLivros() {
        return livroService.listarLivros();
    }
    @GetMapping("/livros/{id}")
    public ResponseEntity<Livro> livroPorId(@PathVariable Long id){
        Livro livro = livroService.livroPorId(id);
        return livro != null ? ResponseEntity.ok(livro) : ResponseEntity.notFound().build();
    }

    @PostMapping("/livros")
    public ResponseEntity<Livro> adicionarLivro(@RequestBody Livro livro) {
        Livro novoLivro = livroService.salvarLivro(livro);
        return ResponseEntity.ok(novoLivro);
    }
    @PutMapping("/livros/{id}")
    public ResponseEntity<Livro> atualizarLivroPorId(@PathVariable Long id,
                                                     @RequestBody Livro livroAtualizado){
        Livro livro = livroService.livroPorId(id);
        if(livro != null){
            livro.setAutor(livroAtualizado.getAutor());
            livro.setDescricao(livroAtualizado.getDescricao());
            livro.setTitulo(livroAtualizado.getTitulo());
            livro = livroService.salvarLivro(livro);
            return ResponseEntity.ok(livro);
        }
        else
            return ResponseEntity.notFound().build();
    }
    @DeleteMapping("/livros/{id}")
    public ResponseEntity<Void> deletarLivro(@PathVariable Long id) {
        boolean livroRemovido = livroService.deletarLivro(id);

        return livroRemovido ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
