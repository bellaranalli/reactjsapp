import React, { useContext } from "react";

//Components
import { CartContext } from "../../../context/CartContext";
import CartItem from "../../CartItem/CartItem";
//Style components
import "../Cart/CartStyle.css";
import "../../CartResumen/CartResumen.css";
import CarritoVacio from "../../CarritoVacio/CarritoVacio";
import ItemForm from "../../ItemForm/ItemForm"

const Cart = ({ item }) => {
  const [cartItems, cantidadCarrito, , , clear, cartTotal, iva] = useContext(CartContext);

  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <CarritoVacio />
      ) : (
        <>
          <div>
            <h1>Mi carrito</h1>
          </div>

          {/* Cart total información total del producto */}
          <div className="container-master">
          
            <div className="cart-container-items">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
              
            </div>
            <div className="cart-resumen">
              <div>
                <h4>Resumen</h4>
                <h4>Sub Total: ${cartTotal()}</h4>
                <h4>Iva: ${iva()}</h4>
                <h4>Total: ${cartTotal()+iva()}</h4>
              </div>
              <div className="btn-comprar">
                {
                 cantidadCarrito() > 0  ? <ItemForm/> : null
                }
                <button onClick={clear}>VACIAR</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;