import React from 'react';
import CounterButton from "../countbutton/CountButton";
const Card = ({children}) => {
    return (
        <div className="card">
            {children}
            <CounterButton/>
        </div>
    )
}

export default Card;