package project.bookstore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import project.bookstore.repositories.LivroRepository;

@Controller
@RequestMapping("/bookstore")
public class LivroController {
    @Autowired
    private LivroRepository livroRepository;

    @GetMapping("/hello")
    public String hello(){
        return "Hello world";
    }
}
