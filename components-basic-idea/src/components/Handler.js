import { useState } from "react"

const Handler = (props) => {
    let [clicks, setTime] = useState(0);

    let clickHandler = (e) => {
        console.log(e)

        setTime(clicks + 1);
    }

    let dangerClicks = clicks > 20
    let serious = clicks > 30


    return (
        <div>
            <div>
                {serious && <h1>NOW YOU PISSED ME OFF, BITCH! I posted your dick on social media.</h1>}
                {dangerClicks && <h2>DANGER CLICKS, STOP IMMEDIATELY</h2>}
                {clicks > 10 ? <h3>Normal Clicks</h3> : <h4>Small Clicks</h4>}
                <button onClick={clickHandler}>{clicks}</button>
            </div>
        </div>
    )
}

export default Handler;