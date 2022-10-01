package com.example.demo.Controller;


import com.example.demo.Entity.User;
import com.example.demo.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
// This means URL's start with /myapp (after Application path)
@RequestMapping(path="/myapp")

public class UserControllerRest {

    @Autowired
    UserRepository userRepository;

/*
    @PostMapping("/add")
    public @ResponseBody String add(@RequestParam String name
            , @RequestParam String email) {
        try {
            User u = new User();

            u.setName(name);
            u.setEmail(email);
            userRepository.save(u);

        } catch (Exception e) {
            return "Caricamento errato";
        }

        return "Iscritto";
    }*/

    @PostMapping (value = "/add", consumes = {"application/json"})
     public  String add(@RequestBody User user ) {
        try {
            userRepository.save(user);
        }catch (Exception e){
            return "Caricamento errato";
        }
        System.out.println(user);
        return "Iscritto";
    }

        @GetMapping("/users")
        public List<User> all (Model model){
            List<User> all = userRepository.findAll();
            return all;
        }
    }
