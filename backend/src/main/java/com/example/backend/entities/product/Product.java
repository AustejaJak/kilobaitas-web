package com.example.backend.entities.product;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "products")
public class Product {
    @Id
    public int id;
    public String title;
    public double fullPrice;
    public double price;
    public int amount;
    public String description;
    public String image;
    public String rating;
    public Category category;

    public Product() {}

    public Product(int id, String title, double fullPrice, double price, int amount, String description, String image, String rating, Category category) {
        this.id = id;
        this.title = title;
        this.fullPrice = fullPrice;
        this.price = price;
        this.amount = amount;
        this.description = description;
        this.image = image;
        this.rating = rating;
        this.category = category;
    }


}
