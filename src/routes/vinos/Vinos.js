import React from "react";
import { useEffect, useState } from "react"
import Item from "../../itemlistcontainer/Item";
import { useParams } from "react-router-dom";
export function Vinos (){

    const {id} = useParams();

    const [data, setItemList] = useState([])

    useEffect(()=>{
        getItems.then((response)=>{
            setItemList(response);
        })
        .catch(error => console.log(error));
    },[id]);

    const getItems = new Promise((resolve) => {
        setTimeout(() => {
          resolve([((data) => data.id == id)])
        }, 2000)
      })

    return (

        <h1> cargando...</h1>
       
           );
};

export default Vinos;