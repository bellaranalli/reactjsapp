import React from "react";
import { Link } from 'react-router-dom';
import "./DetailButton.css"

const DetailButton = () => {
    return (
      <button className="Detail"><Link to={'/vinos'}>Detalle del producto</Link></button>
    )
};

export default DetailButton;
