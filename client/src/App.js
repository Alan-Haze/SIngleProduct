import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./navbar/navbar";
import { Product } from "./product/product";
import { Why } from "./navbar/why";
import { What } from "./navbar/what";
import { When } from "./navbar/when";
import { Who}  from "./navbar/who";
import { Cart } from "./cart/cart";
import {Newsletter} from "./newsletter/Newsletter"


            // APPROFONDIRE  INDEX AL POSTO DEL PATH
export function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Product />} />
                    <Route index element={<Newsletter/>}/>
                </Route>
    

                <Route path="/chi" element={<Who />} />
                <Route path="/cosa" element={<What />} />
                <Route path="/perche" element={<Why />} />
                <Route path="/quando" element={<When />} />
                <Route path="/carrello" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )

}