import React, {useContext} from 'react';
import "./CartResumen.css";


const CartResumen = ({item}) => {


    return(
        
        <div className="cart-extract-content">
                
                <h2>Resumen</h2>
                <h4>Subtotal: $ {item.price*item.cantidad}</h4>
        </div>
        
    )
}

export default CartResumen