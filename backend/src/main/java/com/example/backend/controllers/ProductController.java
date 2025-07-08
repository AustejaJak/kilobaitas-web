package com.example.backend.controllers;

import com.example.backend.entities.product.Product;
import com.example.backend.repository.ProductRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {
    private final ProductRepository repository;

    ProductController(ProductRepository repository){
        this.repository = repository;
    }

    @GetMapping("/products")
    List<Product> all(){
        return repository.findAll();
    }

    @GetMapping("/products/{id}")
    Product one(@PathVariable int id){
       return repository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
    }

    @PostMapping("/products")
    Product create(@RequestBody Product product){
        return repository.save(product);
    }

    @PutMapping("/products/{id}")
    Product update(@RequestBody Product newProduct, @PathVariable int id){
        return repository.findById(id).map(product -> {
            product.setDescription(newProduct.getDescription());
            product.setPrice(newProduct.getPrice());
            product.setCategory(newProduct.getCategory());
            product.setImage(newProduct.getImage());
            product.setFullPrice(newProduct.getFullPrice());
            product.setTitle(newProduct.getTitle());
            product.setAmount(newProduct.getAmount());
            product.setRating(newProduct.getRating());
            return repository.save(product);
        })
                .orElseGet(() -> {
                    return repository.save(newProduct);
                });
    }

    @DeleteMapping("/products/{id}")
    void delete(@PathVariable int id){
        repository.deleteById(id);
    }
}
