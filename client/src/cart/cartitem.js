import { useState } from "react";
import controller from './controller.png';
import cestino from './cestino.png';
import axios from 'axios';

let ls = JSON.parse(localStorage.getItem("cart"));

export const CartItem = (props) => {

  const removeItemFromCart = (e) => {

    fetch("http://localhost:8080/delete/" + props.id)
    window.location.reload();
  }


  return (
    <div class="basket-product">
      <div class="item">
        <div class="product-image">
          <img src={controller} alt="Placholder Image 2" class="product-frame" />
        </div>
        <div class="product-details">
          <h1> {"title" + props.title} </h1>
          
          <p>{"Product Code: " + props.id}</p>
        </div>
      </div>
      <div class="price">{props.price}</div>
      <div class="quantity">

        <input type="number" class="quantity-field"
        />
      </div>

      <div class="subtotal">{props.price * props.quantity}</div>
      <div class="remove">
        <button onClick={removeItemFromCart} ><img className="imgCestino" src={cestino} /> </button>
      </div>
    </div>
  );
};


