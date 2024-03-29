import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

//Components

import "./ItemForm.css";
import { agregarCompra } from "../../firebase/FirebaseFunciones";
import { CartContext } from "../../context/CartContext";
import { Alert } from "@mui/material";

const initialState = {
  name: "",
  direccion: "",
  email: "",
  telefono: "",
};

export default function FormDialog() {
  const [
    cartItems,
    ,
    ,
    ,
    clear,
    cartTotal,
  ] = useContext(CartContext);

  const [open, setOpen] = useState(false);
  const [alerta, setAlerta] = useState(false);
  const [buyer, setBuyer] = useState(initialState);
  const [idCompra, setIdCompra] = useState("");
  const [error, setError] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if(idCompra !== "" ){
      clear()
    }
  };

  const handlerOnChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handlerCompra = () => {
    if(buyer.name === "" || buyer.direccion ==="" ||buyer.email===""){
      setError(true)
      return 
    }

    let total = cartTotal();
    agregarCompra(buyer, cartItems, total).then((id) => {
        setBuyer(initialState)
        setIdCompra(id)
        setAlerta(true)
    });
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        COMPRAR
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ingresar datos de la compra</DialogTitle>
        { error ?   <Alert variant="filled" severity="error">
          Complete los campos incompletos
        </Alert> : null }
        <DialogContent>
          <TextField
            onFocus={()=>setError(false)}
            autoFocus
            margin="dense"
            id="name"
            label="Nombre y apellido"
            type="text"
            fullWidth
            variant="outlined"
            name="name"
            onChange={handlerOnChange}
          />
          <TextField
            onFocus={()=>setError(false)}
            autoFocus
            margin="dense"
            id="telefono"
            label="Telefono"
            type="tel"
            fullWidth
            variant="outlined"
            name="telefono"
            onChange={handlerOnChange}
          />
          <TextField
            onFocus={()=>setError(false)}
            autoFocus
            margin="dense"
            id="direccion"
            label="Dirección"
            type="text"
            fullWidth
            variant="outlined"
            name="direccion"
            onChange={handlerOnChange}
          />
          <TextField
            onFocus={()=>setError(false)}
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            name="email"
            onChange={handlerOnChange}
          />
        </DialogContent>
        <DialogActions className="btn-comprar">
          <button onClick={handleClose}>Cerrar</button>
          <button onClick={handlerCompra}>Comprar</button>
        </DialogActions>
        {   
            alerta ? <Alert variant="filled" severity="success">
                Compra realizada con éxito ,su cóigo de compra es : <span style={{fontSize:"20px"}}>{idCompra}</span>
            </Alert> : null
        }
      </Dialog>
    </div>
  );
}