import { useState } from "react"

const Clicker = (props) => {
    let [clicks, setTime] = useState(0);


    let dangerClicks = clicks > 20
    let serious = clicks > 30

    const decreaseButton = () => {
        setTime(oldCount => oldCount - 1)
    }

    const increaseButton = () => {
        setTime(oldCount => oldCount + 1)
    }

    const clear = () => {
        setTime(0);
    }


    return (
        <div>
                <h2>Count:</h2>
                <h2>{clicks}</h2>
                
                <button onClick={decreaseButton}>-</button>
                <button onClick={clear}>Clear</button>
                <button onClick={increaseButton}>+</button>
                
        </div>
    )
}

export default Clicker;