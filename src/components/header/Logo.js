import React from "react";
import { NavLink } from "react-router-dom";

export function Logo () {
    return (
        <NavLink to={'/'}>
            <img src="cart.jpg" alt="" className="" />
        </NavLink>
    )
}