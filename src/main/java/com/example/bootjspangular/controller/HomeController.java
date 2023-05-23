package com.example.bootjspangular.controller;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home(Model model) {
        System.out.println("Hello");
        model.addAttribute("message", "Hello, World!");
        return "index";
    }
    @GetMapping("/angular")
    public String angularhome(Model model) {
        System.out.println("Hello");
        model.addAttribute("message", "Hello, Angular!");
        return "angular";
    }
}
