package com.example.demo.Repository;

import com.example.demo.Entity.Cart_items;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Cart_itemsRepository extends JpaRepository<Cart_items,Long>   {

    /*
    @Transactional
    @Modifying
    @Query("update cart_items set quantity = :quantity where product_id = :product_id")
    void updateCartItemsByQuery(@Param("quantity") Integer quantity,@Param("id") Long id);
    */

}
