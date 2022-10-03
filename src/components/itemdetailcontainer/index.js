import React from 'react';
import { useEffect, useState } from "react"
import {data} from '../data/index';
import ItemDetail from "../itemdetail";
import { useParams } from "react-router-dom";

export function ItemDetailConteiner (){

    const {id} = useParams();

    const [productList, setProductList] = useState([])

    useEffect(()=>{
        getProducts.then((response)=>{
            setProductList(response);
        })
        .catch(error => console.log(error));
    },[id]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([data.find((zapato) => zapato.id == id)])
        }, 2000)
      })

    return (
      <div>
          {productList ? (
            <ItemDetail lista={productList}/>
            ) : (
              <h2>Cargando</h2>
            )}
           </div>
           );
};