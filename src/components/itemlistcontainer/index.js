import React from 'react';
import { useEffect, useState } from "react"
import ItemList from '../itemlist/Index';
import { data } from '../data/Index';
import { useParams } from "react-router-dom";

export function ItemListContainer () {

    const { category } = useParams();
    const [productList, setProductList] = useState([])

    useEffect(() => {
        getProducts
            .then((response)=>{ setProductList(response); })
            .catch(error => console.log(error));
    }, []);

    const getProducts = new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (category) {
                resolve(data.filter(product => product.category === category));
            } else {
                resolve(data);
            }
        }, 2000);
    });

    return <ItemList lista={productList}/>
}