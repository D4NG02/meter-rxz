import React, { useState, useEffect } from 'react'
import { arc } from "d3-shape"
import { scaleLinear } from "d3-scale"

export default function RPM() {   
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
    const niddleArc = arc()
                            .outerRadius(0.95)
                            .innerRadius(0.6)
                            .startAngle(angle -0.006)
                            .endAngle(angle +0.006)
                            .cornerRadius(1)
                            ()
    const nodeArc = arc()
                            .outerRadius(0.61)
                            .innerRadius(0.6)
                            .startAngle(angle -0.06)
                            .endAngle(angle +0.06)
                            .cornerRadius(1)
                            ()

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
            <RpmArc outer={0.83} inner={0.8} transparent={0.2} />
            <RpmArc outer={0.86} inner={0.83} transparent={0.4} />
            <RpmArc outer={0.89} inner={0.86} transparent={0.6} />
            <RpmArc outer={0.92} inner={0.89} transparent={0.8} />
            <RpmArc outer={0.95} inner={0.92} transparent={0.9} />
            <RpmArc outer={0.96} inner={0.94} transparent={0.4} />
            <path d={niddleArc} fill="rgb(176, 14, 10)" />
            <path d={nodeArc} fill="rgb(176, 14, 10)" />
        </>
    )
}
