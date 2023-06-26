package project.bookstore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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
}
