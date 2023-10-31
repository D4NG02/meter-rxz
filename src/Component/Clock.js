import React, { useState, useEffect } from 'react';

export default function Clock() {
    const [time, setTime] = useState('');
    
    useEffect(() => {
        const interval = setInterval(() => {
            const d = new Date();
            let time = d.constructor().split(' ')[4];
            time = time.split(':')[0] +':'+ time.split(':')[1];
            setTime(time)
        }, 1000);
    
        return () => clearInterval(interval);
    }, [time] ) 

    return (
        <text style={{ transform: 'translate(-48%, -42%)', fill: 'white', fontSize: '0.01em' }}>{time}</text>
    );
}
