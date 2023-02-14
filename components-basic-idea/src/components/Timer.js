import React from 'react';

const Timer = (props) => {
    const [time, setTime] = React.useState(0);

    setTimeout(() => {
        setTime(time + 1);
    }, 1000);

    if (time > 10){
        return (
            setTime(0)
        )
    }
    return (
        <div>
            <h2>Timer: {time} sec</h2>
        </div>
    )

}

export default Timer;