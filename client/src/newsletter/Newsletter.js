import React, { useState } from "react";
import './newsletter.css';

export function Newsletter() {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

/*
    const insertUser = (e) => {
        
        e.preventDefault();
        
        const requestOptions = {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        
        fetch("http://localhost:8080/myapp/add?name=" + name + "&email=" + email , requestOptions)
        console.log("{ name:"+ name,"email:" + email + " }")
        
    } */

    const insertUser = (e) => {
        
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json;charset=utf-8' 
            },
            body: JSON.stringify({"name":name ,"email": email})
        };
        
        fetch("http://localhost:8080/myapp/add" , requestOptions)
        console.log("IscrizioneNewsletterEffettuata")
    } 



    return (

        <div className="news-container" >

            <form >

                <h1>Iscriviti alla newsletter</h1>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. </p>
                <div className="news-email-box">
                    <i className="fa-solid fa-envelope-circle-check"></i>
                    <input className="news-tbox " onChange={(e) => setName(e.target.value)}
                        aria-label="Your first name"
                        name="name"
                        placeholder="Your first name"
                        required
                        
                        type="text"


                    />
                    <input className="news-tbox " onChange={(e) => setEmail(e.target.value)}
                        aria-label="Your email address"
                        name="email"
                        placeholder="Your email address"
                        required

                        type="email"
                    />

                    <button className="news-btn" type="submit" onClick={insertUser}> Iscriviti</button>

                </div>
            </form>
        </div>
    )
}


