import { useContext, useState } from "react";
import "../../Items/ItemCounter/Buttons.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import React
 from "react";
function ItemCounter({ stock, initial, onAdd }) {
  const [cartItems] = useContext(CartContext);
  const [count, setCount] = useState(initial);
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("Limite de Items Alcanzados");
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("No puedes tener menos de 0 items");
      
    }
  };

  

  return (
    <>
      <div className="btn-container">
        <div className="btn-flex">
          <button onClick={decrement} className="btnEffect1">
            -
          </button>
          <p>{count}</p>
          <button onClick={increment} className="btnEffect2">
            +
          </button>
        </div>
        <div className="agregar-carrito">
          <button onClick={() => onAdd(count)}>AGREGAR AL CARRITO</button> 
          {cartItems.length === 0 ? null : 
            <Link to={"/cart"}>
              <button style={{ width: "100px", padding: "1px" }}>
                FINALIZAR COMPRA
              </button>
            </Link>
          }

        </div>
      </div>
    </>
  );
}

export default ItemCounter;