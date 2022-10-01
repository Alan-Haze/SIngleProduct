import { useState } from 'react';
import arrow from './icone/arrow.jpg';

export const ProductDescription = (props) => {

    const[quantity,setQuantity] = useState(1)

    const addGameToCart = (e) => {
        
        setQuantity(quantity + 1);

        e.preventDefault();
        const requestOptions = {
            
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json;charset=utf-8' 
            },
            body: JSON.stringify({ "id":props.id, "quantity":quantity,"cart_id":2,"product_id":1 })
        };
        
        fetch("http://localhost:8080/myapp/addGameToCart/", requestOptions)
        console.log("richiestaCarrelloinviata")
    }
    
    //let [img] = useState(`img/${props.image}`)

    return (
        <div>
            <h2>{props.title} </h2>
            <p>{props.description}</p>
            <h4>{props.price}</h4>
            <button onClick={addGameToCart}> Compra Ora <img src={arrow} alt="freccia" /></button>
        </div>
    );
};

