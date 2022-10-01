package com.example.demo.Controller;

import com.example.demo.Repository.CartRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class CartController {
    @Autowired
    CartRepository cartRepository;


}
