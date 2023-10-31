import React, { useState, useEffect } from 'react'
import { arc } from "d3-shape"
import { scaleLinear } from "d3-scale"

export default function Petrol() {
    const [randomNumber, setRandomNumber] = useState(0);
  
    const generateRandomNumber = () => {
        const min = 0;
        const max = 100;
        const random =
            Math.floor(Math.random() * (max - min + 1)) + min;
        setRandomNumber(random);
    };
    useEffect(() => {
        const interval = setInterval(() => {
          generateRandomNumber()
        }, 1000);
    
        return () => clearInterval(interval);
    }, [] )


    const percentScale = scaleLinear()
                            .domain([0, 100])
                            .range([0, 1])
    const percent = percentScale(randomNumber)
    const angleScale = scaleLinear()
                            .domain([0, 1])
                            .range([1*Math.PI, 1.5*Math.PI])
                            .clamp(true)
    const angle = angleScale(percent)
    const filledArc = arc()
                            .outerRadius(0.48)
                            .innerRadius(0.42)
                            .startAngle(1*Math.PI)
                            .endAngle(angle)
                            .cornerRadius(1)
                            ()
        
    // Gradient
    const gradientTag = "petrol_gradient";
    const gradientTagUse = "url(#" +gradientTag+ ")";
    const colorScale = scaleLinear()
                            .domain([0, 1])
                            .range(['#FF0000', '#00FF00'])
    const gradientSteps = colorScale.ticks(100)
                            .map(randomNumber => colorScale(randomNumber))

    return (
        <>
            <defs>
                <linearGradient
                    id={gradientTag}
                    gradientUnits="userSpaceOnUse"
                    x1="0" y1="0.5" x2="-0.5" y2="0">
                    {gradientSteps.map((color, index) => (
                        <stop
                            key={color}
                            stopColor={color}
                            offset={`${ index / (gradientSteps.length - 1) }`}
                        />
                    ))}
                </linearGradient>
            </defs>

            <path d={filledArc} fill={gradientTagUse} />
        </>
    )
}
