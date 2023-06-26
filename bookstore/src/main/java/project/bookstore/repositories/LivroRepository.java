package project.bookstore.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project.bookstore.model.Livro;

public interface LivroRepository extends JpaRepository<Livro, Long> {
    Livro findById(long id);
}
