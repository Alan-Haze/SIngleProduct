package com.example.demo.Entity;

import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@DynamicUpdate
public class Cart_items {
    @Id @GeneratedValue(strategy= GenerationType.AUTO)
    public Long id;
    public Integer quantity;

    @ManyToOne
    public Cart cart;

    @ManyToOne
    public Product product;


    public Cart_items() {
    }

    public Cart_items(Long id, Integer quantity, Cart cart, Product product) {
        this.id = id;
        this.quantity = quantity;
        this.cart = cart;
        this.product = product;
    }

    public  Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Cart getCart() {
        return cart;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }

    public Product getProduct() {
        return product;
    }

    //public Long getProductId(){return product.id;}
    public void setProduct(Product product) {
        this.product = product;
    }



}
