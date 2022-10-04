import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

export function NavBar() {
    return (
        <ul className="nav">
            <li className="nav-item">
                <NavLink to={'/'} className="nav-link">HOME</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={'/category/Blanco'} className="nav-link">VINO BLANCO</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={'/category/Tinto'} className="nav-link">VINO TINTO</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={'contacto'} className="nav-link">CONTACTO</NavLink>
            </li>
        </ul>
    )
}

