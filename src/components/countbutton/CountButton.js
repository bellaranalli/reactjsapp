import React, { useState } from "react";
import "./CounterButton.css"

const stock = 5

const CounterButton = () => {
    const [counter, setCounter] = useState(0)
    const handleClick1 = () => {
        counter < stock ? setCounter(counter + 1) : console.log ('Se alcanzó el máximo')
    }
    const handleClick2 = () => {
        counter > 0  ? setCounter(counter - 1) : console.log ('Valores negativos no permitidos')
    }
    return (
        <div className="buttons">
            <button onClick={handleClick1}>+</button>
            <h2 className="contador">{counter}</h2>
            <button onClick={handleClick2}>-</button>
        </div>
    )
}
export default CounterButton