import React from 'react';
import "./NavBar.css"
import CartWidget from "../cartwidget/Cartwidget";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <nav>
                <div>
                    <ul className="List">
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/vinos'}>Vinos</Link>
                        </li>
                        <li>
                            <Link to={'/vinosId'}>Estilos</Link>
                        </li>
                        <li className="Cart">
                            <CartWidget />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default NavBar;

