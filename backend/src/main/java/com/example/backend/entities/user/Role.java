package com.example.backend.entities.user;

import jakarta.persistence.*;

@Entity
@Table(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private ERole role;

    public Role() {}

    public Role(ERole role) {
        this.role = role;
    }
}
