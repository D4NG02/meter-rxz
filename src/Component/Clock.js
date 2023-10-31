import React, { useState, useEffect } from 'react';

export default function Clock() {
    const [time, setTime] = useState(0);
    const d = new Date();

    const getTime = () => {
        let time = d.constructor().split(' ')[4];
        time = time.split(':')[0] +':'+ time.split(':')[1];
        setTime(time)
    };
    
    useEffect(() => {
        const interval = setInterval(() => {
            getTime()
        }, 10000);
    
        return () => clearInterval(interval);
    }, [] ) 

    return (
        <text style={{ transform: 'translate(-48%, -42%)', fill: 'white', fontSize: '0.01em' }}>{time}</text>
    );
}
