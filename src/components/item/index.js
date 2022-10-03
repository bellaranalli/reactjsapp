import React from "react";

const Item = ({title, price, image, category, description}) =>{
    return(
        <div>
            
            <div>
                <h2>{title}</h2>
                <h3>{price}</h3>
                <h3>{category}</h3>
                <h3>{description}</h3>
            </div>
        </div>)
};

export default Item

