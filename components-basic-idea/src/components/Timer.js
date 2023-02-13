import React from 'react';

const Timer = (props) => {
    const [time, setTime] = React.useState(0);

    console.log('render')

    setTimeout(() => {
        setTime(time + 1);
    }, 1000);

    return (
        <div>
            <h2>Timer: {time} sec</h2>
        </div>
    )

}

export default Timer;