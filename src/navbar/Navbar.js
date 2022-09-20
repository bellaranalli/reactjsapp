import "./NavBar.css"
import CartWidget from "../cartwidget/Cartwidget";

const NavBar = () => {
    return (
         <header>
            <nav>
                <ul className="List">
                <li>
                    <a href="index.html">INICIO</a>
                </li>
                <li>
                <a href="index.html">PRODUCTOS</a>
                </li>
                <li>
                <a href="index.html">CONTACTO</a>
                </li>
                <li className="Cart">
                <CartWidget />
                </li>
                </ul>
            </nav>
         </header>
    )
};

export default NavBar;