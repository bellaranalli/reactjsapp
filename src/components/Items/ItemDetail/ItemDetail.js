import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "../Item/Item.css"
import ItemCounter from "../ItemCounter/ItemCounter"
import { CartContext } from '../../../context/CartContext';



 function ItemDetail({data}) {

  const {image, title, price, descripcion, stock} = data
  const [, , addCart] = useContext(CartContext)

  function onAdd(count){
    addCart(data,count)
  }
  return (
    <>
    
  <div className="card-container">
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="Usuarios"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"  >
          {`Nombre: ${title}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Precio: ${price}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Descripcion: ${descripcion}`}
        </Typography>
        <ItemCounter stock={stock} initial={1} onAdd={onAdd} />
      </CardContent>
    </Card>
  </div>
    </>
  );
}

export default ItemDetail;