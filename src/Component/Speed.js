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
        generateRandomSpeed()
    }, [] )
    return (
        <>
            {String(speed).length==3 && <text style={{ transform: 'translate(-14%, 7%)', fill: 'white', fontSize: '0.022em' }}>{speed}</text>}
            {String(speed).length==2 && <text style={{ transform: 'translate(-9%, 7%)', fill: 'white', fontSize: '0.022em' }}>{speed}</text>}
            {String(speed).length==1 && <text style={{ transform: 'translate(-4%, 7%)', fill: 'white', fontSize: '0.022em' }}>{speed}</text>}
            <text style={{ transform: 'translate(-4%, 14%)', fill: 'white', fontSize: '0.005em' }}>km/h</text>
        </>
    )
}
