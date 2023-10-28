import React, { useState, useEffect } from 'react'
import { arc } from "d3-shape"
import { scaleLinear } from "d3-scale"

export default function RPM2() {   
    const [randomNumber, setRandomNumber] = useState(0);
  
    const generateRandomNumber = () => {
        const min = 0;
        const max = 12000;
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

    // Value
    const percentScale = scaleLinear()
                                .domain([0, 12000])
                                .range([0, 1])
    const percent = percentScale(randomNumber)
    const angleScale = scaleLinear()
                                .domain([0, 1])
                                .range([-Math.PI, 0.48*Math.PI])
                                .clamp(true)
    const angle = angleScale(percent)
    const filledArc = arc()
                                .outerRadius(0.91)
                                .innerRadius(0.90)
                                .startAngle(-Math.PI)
                                .endAngle(angle)
                                .cornerRadius(1)
                                ()

                                                       
    // Needle
    const Needle = () => {
        const nobeArc = arc()
                                    .outerRadius(0.52)
                                    .innerRadius(0.5)
                                    .startAngle(-Math.PI - 0.06)
                                    .endAngle(0.48*Math.PI + 0.06)
                                    .cornerRadius(1)
                                    ()
        const needleArc = arc()
                                    .outerRadius(0.88)
                                    .innerRadius(0.5)
                                    .startAngle(angle -0.014)
                                    .endAngle(angle +0.014)
                                    .cornerRadius(1)
                                    ()
        const needleArc2 = arc()
                                    .outerRadius(0.52)
                                    .innerRadius(0.5)
                                    .startAngle(angle -0.2)
                                    .endAngle(angle +0.2)
                                    .cornerRadius(1)
                                    () 
        return (
            <>
                <path d={nobeArc} fill="#5c5e5e" />
                <path d={needleArc} fill="url(#rpm_gradient)" />
                <path d={needleArc2} fill="url(#rpm_gradient)" />
            </>
        )
    }

    // Gradient
    const colorScale = scaleLinear()
                                .domain([0, 1])
                                .range(["#ffb499", "#ff4400"])
    const gradientSteps = colorScale.ticks(100)
                                .map(randomNumber => colorScale(randomNumber))

    return (
        <>
            <defs>
                <linearGradient
                    id="rpm_gradient"
                    gradientUnits="userSpaceOnUse"
                    x1="-1" y1="-1" x2="1" y2="0">
                    {gradientSteps.map((color, index) => (
                        <stop
                            key={index}
                            stopColor={color}
                            offset={`${
                                index
                                / (gradientSteps.length - 1)
                                }`}
                        />
                    ))}
                </linearGradient>
            </defs>

            <Needle />
            <path d={filledArc} fill="url(#rpm_gradient)" /> 
        </>
    )
}
