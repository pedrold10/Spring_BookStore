package project.bookstore.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.bookstore.model.Livro;
import project.bookstore.repositories.LivroRepository;

import java.util.List;

@Service
public class LivroService {
    private final LivroRepository livroRepository;

    @Autowired
    public LivroService(LivroRepository livroRepository) {
        this.livroRepository = livroRepository;
    }

    public List<Livro> listarLivros() {
        return livroRepository.findAll();
    }
    public Livro livroPorId(long id){
        return livroRepository.findById(id);
    }

    public Livro salvarLivro(Livro livro){
        return livroRepository.save(livro);
    }
    public boolean deletarLivro(Long id) {
        if (livroRepository.existsById(id)) {
            livroRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
