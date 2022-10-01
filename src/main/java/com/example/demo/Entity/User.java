package com.example.demo.Entity;

import javax.persistence.*;

@Entity
@Table(name="utente")
public class User {
    @Id @GeneratedValue(strategy= GenerationType.AUTO)

    public Long id;

    public String name;

    public String email;

    public User() {
    }

    public User(String name, String email) {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}



