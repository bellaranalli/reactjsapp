import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


//Components
import "../ItemDetail/ItemDetail.css";

import ItemDetail from "../../Items/ItemDetail/ItemDetail";
import { getProductosXId } from "../../../firebase/FirebaseFunciones";



const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  let { id } = useParams();
  
  useEffect(() => {

    
    getProductosXId(id)
    .then(respuesta => setItem(respuesta))
  }, []);
  
  return (
    <>
    <div className="itemList-container">
        <ItemDetail data={item}/>
    </div>
    </>
  );
};

export default ItemDetailContainer;