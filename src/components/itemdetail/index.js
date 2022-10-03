import React from "react";
import Item from "../item/Index";

const ItemDetail = ({lista}) =>{
    return (
    <div>
        {
            lista.map((product)=> (
                <Item key={product.id} title={product.title} price={product.price} image={product.image} description={product.description}/>
            ))
        }
    </div>
    );
};

export default ItemDetail;