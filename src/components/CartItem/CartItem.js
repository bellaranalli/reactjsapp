import React, { useContext } from 'react'
import "./CartItem.css"
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { CartContext } from '../../context/CartContext';

//sumo y resto productos y borro compra


const CartItem = ({item}) => {
    const [,, addCart, removeItem] = useContext(CartContext)


    const removeHandler = () => {
        removeItem(item.id)
    }

    const sumaHandler = () =>{
        if(item.cantidad < 5)
        addCart(item, 1)
        
    }
    const restaHandler = () =>{

        if(item.cantidad > 1){
            addCart(item, -1)
        }
        
    }

    return (
        <div className="content-cart">
        <img src={item.image} alt={item.title} />
            <div className="content-cart-text">
                <h4> <u>Nombre del producto:</u></h4>
                <h4><i>{item.title}</i></h4>
                <h4>Precio unitario:${item.price}</h4>
                <div className="cantidad-container">
                    <h4>Cantidad de productos:</h4>
                    <div className="button-container">
                        <button className="button" onClick={restaHandler}> - </button>
                            <i>{item.cantidad}</i>
                        <button className="button" onClick={sumaHandler}> + </button>
                    </div>
                    
                </div>
                <h4><u>Sub Total:</u> ${item.cantidad*item.price} </h4>
                    <div className="delete-content">
                        <h5>Borrar compra: </h5>
                        <DeleteRoundedIcon className="content-cart-icon" onClick={removeHandler} />
                    </div>
            </div>
            
            
            
            
        </div>
      
    )
}

export default CartItem