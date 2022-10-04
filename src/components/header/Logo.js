import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'; 

export function Logo () {
    return (
        <NavLink to={'/'} className="nav-link">
            <h1>VINO</h1>
        </NavLink>
    )
}