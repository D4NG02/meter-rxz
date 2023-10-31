import React, { useState, useEffect } from 'react'

export default function Speed() {
    const [speed, setSpeed] = useState(0);
    function getPosition(position) {
        if(position.coords.speed) {
            setSpeed(position.coords.speed)
        } else {
            setSpeed(0)
        }
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(getPosition);
            } else {
                console.log("Geolocation is not supported by this browser.")
            }
        }, 500);
    
        return () => clearInterval(interval);
    }, [speed] ) 

    return (
        <text style={{ transform: 'translate(6%, 48%)', fill: 'white', fontSize: '0.03em' }}>{speed}</text>
    )
}
