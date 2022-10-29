import React, {createContext, useState} from 'react';

export const CartContext = createContext();


//funciones del cart

export const CartContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    
    function cantidadCarrito(){
        return cartItems.reduce( (total, item) => total + item.cantidad, 0 )
    }
    
     function cartTotal(){
      return cartItems.reduce( (total, item) => total + (item.cantidad * item.price), 0 )
    }

    function iva(){
      return cartTotal()*0.2;
    }
    

    function addCart(item, cantidad) {
        if(cantidad === 0){
          return; 
        }
    
        let existe = isInCart(item.id); 
        if(existe) {
          let itemCart = cartItems.find(prod => prod.id === item.id);
          itemCart.cantidad +=  cantidad;
          setCartItems([...cartItems]);
        }else {
          setCartItems([...cartItems, {...item, cantidad}]);
        }
      }

    

      function isInCart(id){
        return cartItems.some(e => e.id === id) 
        
     }
     
    function removeItem(itemId){
        setCartItems(cartItems.filter(item => item.id !== itemId))
    }

    function clear(){
        setCartItems([])
    }

    

    
    return (
    <CartContext.Provider value={[cartItems, cantidadCarrito, addCart, removeItem, clear, cartTotal, iva]}>
        {children}
    </CartContext.Provider>
    )

}