package com.example.backend.controllers;

import com.example.backend.entities.product.Product;
import com.example.backend.entities.user.User;
import com.example.backend.repository.ProductRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    private final UserRepository repository;

    UserController(UserRepository repository){
        this.repository = repository;
    }

    @GetMapping("/users")
    List<User> all(){
        return repository.findAll();
    }

    @GetMapping("/users/{id}")
    User one(@PathVariable String id){
       return repository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
    }

    @PostMapping("/users")
    User create(@RequestBody User user){
        return repository.save(user);
    }

    @PutMapping("/users/{id}")
    User update(@RequestBody User newUser, @PathVariable String id){
        return repository.findById(id).map(user -> {
            user.setName(newUser.getName());
            user.setEmail(newUser.getEmail());
            user.setLastName(newUser.getLastName());
            return repository.save(user);
        })
                .orElseGet(() -> {
                    return repository.save(newUser);
                });
    }

    @DeleteMapping("/users/{id}")
    void delete(@PathVariable String id){
        repository.deleteById(id);
    }
}
