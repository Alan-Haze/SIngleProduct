package com.example.demo.Controller;



import com.example.demo.Entity.Cart_items;
import com.example.demo.Repository.Cart_itemsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class Cart_itemsController   {

    @Autowired
    Cart_itemsRepository cart_itemsRepository;

    @PostMapping(value = "/addGameToCart", consumes = {"application/json"})
    public  String addGame(@RequestBody Cart_items cart_items) {
        try {
            cart_itemsRepository.save(cart_items);
            System.out.println(cart_items);
        }catch (Exception e){

            return "Caricamento errato";
        }
        System.out.println(cart_items);
        return "AggiuntoAlCarrello";
    }

   /* @PostMapping("/updateQuantity")
    public @ResponseBody String updateQuantity(@RequestBody Cart_items cart_items) {
        try {
            cart_itemsRepository.updateCartItemsByQuery(cart_items.getQuantity(),cart_items.getProductId());
        } catch (Exception e) {
            return "Caricamento errato";
        }
        return "Quantità Aggiornata";
    } */

    @GetMapping("/ca")
    public List<Cart_items> cartItems() {
        return (List<Cart_items>) cart_itemsRepository.findAll();
    }

    @RequestMapping(value = "/delete/{id}")
    public String deleteCartItemById(@PathVariable Long id) {
        cart_itemsRepository.deleteById(id);
        return "Deleted Successfully";
    }


}