
import shoppingchart from './shoppingchart.png';
import iconaMenu from './menu.jpg';
import { Link, Outlet } from "react-router-dom";
import './navbar.css';

export const Navbar = () => { 
    return ( 
         <div>
            <div className='prodottoNavbar'>
                <img src={iconaMenu} className='prodottoLogo' alt="iconacarrello" />
                <nav>
                    <ul>
                        
                        <Link className='NavBarLinkCSS' to={"/chi"} > Chi siamo</Link>
                        <Link className='NavBarLinkCSS' to={"/cosa"} > Scopri di più</Link>
                        <Link className='NavBarLinkCSS' to={"/perche"} > Blog</Link>
                        <Link className='NavBarLinkCSS' to={"/quando"} > Contatti</Link>
                        <Link to={"/carrello"}><img src={shoppingchart} className="shopping-icon"/>  </Link>

                    </ul>
          
                </nav>
            </div>
            <div> <Outlet></Outlet> </div>
            </div>
            )

};