import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import { Link, useParams } from "react-router-dom";


//Components
import "../ItemListContainer/ItemListContainer.css";
import ItemCard from "../../Items/Item/ItemCard";
import { getAllproductos } from "../../../firebase/FirebaseFunciones";

//carga de home y muestro todos los items.

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  let {categoria} = useParams();
  

  useEffect(() => {
  
    getAllproductos(categoria)
      .then(prod => {
        setItems(prod)
      })
      
    

  }, [categoria]);


  return (
    <>
       <div className="container, box-container">
       <Grid container  >
        { items.length === 0 ? <CircularProgress color="secondary"  sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />   : items.map((item) => {
          return (
            <Grid key={item.id} item xs={12} sm={4} md= {4} lg={4}>
              <Box margin={9} >
                <Link
                  to={`/item/${item.id}`}
                  style={{ textDecoration: "none" }}>
                  <ItemCard data={item} />
                </Link>
              </Box>
            </Grid>
          );
        })}
      </Grid> 
      </div>
    </>
  );
};

export default ItemListContainer;