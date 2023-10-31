import React,  { useState, useEffect } from 'react'
import *  as d3 from 'd3'

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
            <text style={{ transform: 'translate(20%, 20%)', fill: 'white', fontSize: '0.022em' }}>{speed}</text>
            <text style={{ transform: 'translate(20%, 24%)', fill: 'white', fontSize: '0.005em' }}>km/h</text>

            {/* <line x1="-1" x2="1" y1="0" y2="0" stroke="white" strokeWidth="0.01" /> */}
            {/* <line x1="0" x2="0" y1="1" y2="-1" stroke="white" strokeWidth="0.01" /> */}
        </>
    )
}
