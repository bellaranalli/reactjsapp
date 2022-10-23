import React from 'react';
import Item from "../item/Index";
import { Link } from "react-router-dom";
import './ItemList.css';

const ItemList = ({lista}) =>{
    return (
    <div className='ordenarProductos'>
        {
            lista.map((product)=> (
                <Link 
                    key={product.id}
                    to={'detail/' +product.id}
                    style={{ textDecoration: 'none'}}
                >
                    <Item title={product.title} price={product.price} image={product.image} category={product.category} description={product.description}/>
                </Link>
            ))
        }
    </div>
    );
};

export default ItemList;