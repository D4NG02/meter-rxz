import React from 'react'
import { arc } from "d3-shape"
import { scaleLinear } from "d3-scale"

const Rpm = ({ value, min=0, max }) => {               
    // Border
    const Border = () => {
        const color = "#5c5e5e"
        const border = arc()
                                .outerRadius(0.91)
                                .innerRadius(0.89)
                                .startAngle(-Math.PI - 0.06)
                                .endAngle(0.48*Math.PI + 0.06)
                                .cornerRadius(1)
                                ()
        const border2 = arc()
                                .outerRadius(0.70)
                                .innerRadius(0.72)
                                .startAngle(0.534*Math.PI)
                                .endAngle(0.943*Math.PI)
                                .cornerRadius(1)
                                () 
        return (
            <>
                <path d={border} fill={color} />
                <path d={border2} fill={color} />
                <line x1="0.7" x2="0.9" y1="0.08" y2="-0.009" stroke={color} strokeWidth="0.01" />
                <line x1="0.1285" x2="0.0485" y1="0.7" y2="0.9" stroke={color} strokeWidth="0.01" />
            </>
        )
    }
                                
    // Value
    const percentScale = scaleLinear()
                                .domain([min, max])
                                .range([0, 1])
    const percent = percentScale(value)
    const angleScale = scaleLinear()
                                .domain([0, 1])
                                .range([-Math.PI, 0.48*Math.PI])
                                .clamp(true)
    const angle = angleScale(percent)
    const filledArc = arc()
                                .outerRadius(0.93)
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

                                
    // Ticker
    const Ticker = (props) => {
        const tickArc = arc()
                            .outerRadius(props.radius)
                            .innerRadius(props.radius +0.04)
                            .startAngle(props.start)
                            .endAngle(props.end)
                            .cornerRadius(0)
                            ()
        return (
            <path d={tickArc} fill={props.color} />
        )
    }

    // Gradient
    const colorScale = scaleLinear()
                                .domain([0, 1])
                                .range(["#ffb499", "#ff4400"])
    const gradientSteps = colorScale.ticks(100)
                                .map(value => colorScale(value))

    return (
        <>
            <defs>
                <linearGradient
                    id="rpm_gradient"
                    gradientUnits="userSpaceOnUse"
                    x1="0" y1="1" x2="1" y2="-1">
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

            <Border />

            <Ticker radius={0.9} start={-Math.PI +0.015} end={-2.768} color="#5c5e5e" />
            <Ticker radius={0.9} start={-2.74} end={-2.38} color="#5c5e5e" />
            <Ticker radius={0.9} start={-2.35} end={-1.995} color="#5c5e5e" />
            <Ticker radius={0.9} start={-1.965} end={-1.606} color="#5c5e5e" />
            <Ticker radius={0.9} start={-1.576} end={-1.22} color="#5c5e5e" />
            <Ticker radius={0.9} start={-1.19} end={-0.83} color="#5c5e5e" />
            <Ticker radius={0.9} start={-0.8} end={-0.445} color="#5c5e5e" />
            <Ticker radius={0.9} start={-0.414} end={-0.058} color="#5c5e5e" />
            <Ticker radius={0.9} start={-0.026} end={0.33} color="#5c5e5e" />
            <Ticker radius={0.9} start={0.36} end={0.718} color="#5c5e5e" />
            <Ticker radius={0.9} start={0.238*Math.PI} end={0.35*Math.PI} color="#ff4400" />
            <Ticker radius={0.9} start={0.36*Math.PI} end={0.48*Math.PI} color="#ff4400" />
            
            <Needle />
            
            <path d={filledArc} fill="url(#rpm_gradient)" />

            {/* <line
                y1="-0.8"
                y2="-0.76"
                stroke="white"
                strokeWidth="0.01"
            /> */}
        </>
    )
}

export default Rpm