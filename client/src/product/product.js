import React, { useEffect, useState } from 'react';
import controller from './icone/controller.png';
import add from './icone/add.png';
import facebook from './icone/fb.png';
import twitter from './icone/tw.png';
import instagram from './icone/ig.png';
import './product.css';

import { Newsletter } from '../newsletter/Newsletter';
import { ProductDescription } from './productDescription';

export const Product = (props) => {

    let [details, setDetails] = useState({})

    useEffect(() => {
        async function call() {
            let response = await fetch('http://localhost:8080/products')
            let json = await response.json()
            console.log(json)
            setDetails(json)
        }
        call()
    }, [])

    return (

        <div className='prodottoContainer'>

            <div className='row'>
                <div className='col-1'>

                    {Object.values(details).map(detail => {
                        return <ProductDescription
                            id={detail.id}
                            title={detail.title}
                            // image={detail.image}
                            // type={detail.type.name}
                            description={detail.description}
                            price={detail.price} />
                    })}

                </div>

                <div className='col-2'>
                    <img src={controller} className="controller" alt="fotoprodotto" />
                    <div className='color-box'> </div>

                    <div className='add-btn'>
                        <img src={add} alt="iconapiù" />
                        <p><small
                            onClick={[]}> Aggiungi al Carrello</small></p>

                    </div>

                </div>
            </div>
            <div className='social-links'>
                <a href='https://it-it.facebook.com/' target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" /></a>
                <a href='https://twitter.com/?lang=it' target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /></a>
                <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" /> </a>

            </div>
            <Newsletter />
        </div>


    )
}