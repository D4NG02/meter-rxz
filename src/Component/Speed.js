import React,  { useState, useEffect } from 'react'

export default function Speed() {
    const [speed, setSpeed] = useState(0);
  
    const generateRandomSpeed = () => {
        const min = 0;
        const max = 200;
        const random =
            Math.floor(Math.random() * (max - min + 1)) + min;
            setSpeed(random);
    };
    
    useEffect(() => {
        const interval = setInterval(() => {
            generateRandomSpeed()
        }, 1000);
    
        return () => clearInterval(interval);
    }, [] ) 

    return (
        <text style={{ transform: 'translate(6%, 48%)', fill: 'white', fontSize: '0.03em' }}>{speed}</text>
    )
}
