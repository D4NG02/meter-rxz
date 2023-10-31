import React, { useState, useEffect } from 'react'

export default function Speed() {
    const [speed, setSpeed] = useState(0);
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(assignPosition);
        } else {
            console.log("Geolocation is not supported by this browser.")
        }
    }
    function assignPosition(position) {
        if(position.coords.speed) {
            setSpeed(position.coords.speed)
        } else {
            setSpeed(0)
        }
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            getLocation()
        }, 500);
    
        return () => clearInterval(interval);
    }, [] ) 

    return (
        <text style={{ transform: 'translate(6%, 48%)', fill: 'white', fontSize: '0.03em' }}>{speed}</text>
    )
}
