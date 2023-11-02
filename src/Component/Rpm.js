import React, { useState, useEffect } from 'react'
import { arc } from "d3-shape"
import { scaleLinear } from "d3-scale"

export default function Rpm() {   
    const [randomNumber, setRandomNumber] = useState(0);
  
    const generateRandomNumber = () => {
        const min = 0;
        const max = 12000;
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        setRandomNumber(random);
    }
  
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
                                .range([-0.98*Math.PI, 0.4*Math.PI])
                                .clamp(true)
    const angle = angleScale(percent)

    const RpmArc = (props) => {
        const filledArc = arc()
                                .outerRadius(props.outer)
                                .innerRadius(props.inner)
                                .startAngle(-0.98*Math.PI)
                                .endAngle(angle)
                                .cornerRadius(0)
                                ()
        return (
            <path d={filledArc} fill={"rgba(176, 14, 10, " +props.transparent} />
        )
    }

    return (
        <>
            <RpmArc outer={0.82} inner={0.78} transparent={0.2} />
            <RpmArc outer={0.85} inner={0.82} transparent={0.4} />
            <RpmArc outer={0.88} inner={0.85} transparent={0.6} />
            <RpmArc outer={0.91} inner={0.88} transparent={0.8} />
            <RpmArc outer={0.94} inner={0.91} transparent={0.9} />
            <RpmArc outer={0.96} inner={0.94} transparent={0.4} />
        </>
    )
}
