import "../NavBar/NavBar.css";
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom";
import React from "react";
const NavBar = () => {
    
    return( 
        <nav className="nav-container">
            <div className="logo">
            <Link to={`./`} style={{textDecoration: "none", color:"black"}} >
                
                    <h1>PERFUMES</h1> 
                
                    
            </Link>
           </div> 
           <div className="ul-li-container">
            <ul className="ul-li">    
                <li> <Link to={`/`}>Home</Link></li>
                <li><Link to={`/category/mujer`}>Mujer</Link></li>
                <li><Link to={`/category/hombre`}>Hombre</Link></li>
                <li><Link to={`/category/kids`}>Kids</Link></li>
                <CartWidget/>
            </ul>
           </div>
        </nav>
    );
} ;

export default NavBar;