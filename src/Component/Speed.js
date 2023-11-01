import React, { useState, useEffect } from 'react'

export default function Speed() {
    const [speed, setSpeed] = useState(0);
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function getPosition(position) {
        position = position.coords
        console.clear()
        console.table(position)
        if(position.speed) {
            // got in m/s. convert to km/h
            setSpeed(position.speed *3.6)
        } else {
            setSpeed(0)
        }
    }
    function error(err) {
      console.log(`ERROR(${err.code}): ${err.message}`);
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(getPosition, error, options);
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
