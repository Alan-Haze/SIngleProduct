package com.example.demo.Entity;
import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity

public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long id;

    @OneToOne
    public User utente;

    public Cart() {
    }

    public Cart(Long id, User utente) {
        this.id = id;
        this.utente = utente;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUtente() {
        return utente;
    }

    public void setUtente(User utente) {
        this.utente = utente;
    }
}


