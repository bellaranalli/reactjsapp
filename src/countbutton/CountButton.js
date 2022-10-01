import React, { useState } from "react";
import "./CounterButton.css"
const CounterButton = () => {
    const [counter, setCounter] = useState(0)
    const handleClick1 = () => {
        setCounter(counter + 1)
    }
    const handleClick2 = () => {
        setCounter(counter - 1)
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