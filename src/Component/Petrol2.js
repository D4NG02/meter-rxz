import React, { useState, useEffect } from 'react'
import { arc } from "d3-shape"
import { scaleLinear } from "d3-scale"

export default function Petrol2() {
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
                            .range([0.86*Math.PI, 0.62*Math.PI])
                            .clamp(true)
    const angle = angleScale(percent)
    const filledArc = arc()
                            .outerRadius(0.94)
                            .innerRadius(0.925)
                            .startAngle(0.86*Math.PI)
                            .endAngle(angle)
                            .cornerRadius(0)
                            ()
    
    const needleArc = arc()
        .outerRadius(0.9)
        .innerRadius(0.76)
        .startAngle(angle -0.01)
        .endAngle(angle +0.01)
        .cornerRadius(0)
    ()
    const needleArc2 = arc()
        .outerRadius(0.76)
        .innerRadius(0.78)
        .startAngle(angle -0.05)
        .endAngle(angle +0.05)
        .cornerRadius(1)
        () 

        
    // Gradient
    const gradientTag = "petrol_gradient";
    const gradientTagUse = "url(#" +gradientTag+ ")";
    const colorScale = scaleLinear()
                            .domain([0, 1])
                            .range(['#ff4400', '#4ffc45'])
    const gradientSteps = colorScale.ticks(100)
                            .map(randomNumber => colorScale(randomNumber))

    return (
        <>
            <defs>
                <linearGradient
                    id={gradientTag}
                    gradientUnits="userSpaceOnUse"
                    x1="0.3" y1="0.7" x2="0.8" y2="0.1">
                    {gradientSteps.map((color, index) => (
                        <stop
                            key={color}
                            stopColor={color}
                            offset={`${
                                index
                                / (gradientSteps.length - 1)
                                }`}
                        />
                    ))}
                </linearGradient>
            </defs>

            <path d={needleArc} fill={gradientTagUse} />
            <path d={needleArc2} fill={gradientTagUse} />
            <path d={filledArc} fill={gradientTagUse} />
        </>
    )
}
