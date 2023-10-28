import React, { useState } from 'react'
import { arc } from "d3-shape"
import { scaleLinear } from "d3-scale"

const Rpm = () => {               
    // Border
    const Border = () => {
        const color = "#5c5e5e"
        const border = arc()
                                .outerRadius(0.91)
                                .innerRadius(0.89)
                                .startAngle(-Math.PI - 0.2)
                                .endAngle(0.48*Math.PI + 0.2)
                                .cornerRadius(1)
                                ()
        const border2 = arc()
                                .outerRadius(0.70)
                                .innerRadius(0.72)
                                .startAngle(0.58*Math.PI)
                                .endAngle(0.901*Math.PI)
                                .cornerRadius(1)
                                () 
        return (
            <>
                <path d={border} fill={color} />
                <path d={border2} fill={color} />
                <line x1="0.68" x2="0.9" y1="0.18" y2="0.12" stroke={color} strokeWidth="0.01" />
                <line x1="0.22" x2="0.175" y1="0.68" y2="0.88" stroke={color} strokeWidth="0.01" />
            </>
        )
    }
                
                                
    // Ticker
    const Ticker = (props) => {
        const tickArc = arc()
                            .outerRadius(props.radius +0.03)
                            .innerRadius(props.radius)
                            .startAngle(props.start)
                            .endAngle(props.end)
                            .cornerRadius(0)
                            ()
        return (
            <>
                <path d={tickArc} fill={props.color} />
            </>
        )
    }

    return (
        <>
            {/* Ticker and number */}
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
            <text style={{ transform: 'translate(-2%, 42%)', fill: 'white', fontSize: '0.01em' }}>0</text>
            <text style={{ transform: 'translate(-17%, 39.5%)', fill: 'white', fontSize: '0.01em' }}>1</text>
            <text style={{ transform: 'translate(-29%, 30%)', fill: 'white', fontSize: '0.01em' }}>2</text>
            <text style={{ transform: 'translate(-38%, 18.5%)', fill: 'white', fontSize: '0.01em' }}>3</text>
            <text style={{ transform: 'translate(-42%, 3%)', fill: 'white', fontSize: '0.01em' }}>4</text>
            <text style={{ transform: 'translate(-39.5%, -11%)', fill: 'white', fontSize: '0.01em' }}>5</text>
            <text style={{ transform: 'translate(-31%, -24%)', fill: 'white', fontSize: '0.01em' }}>6</text>
            <text style={{ transform: 'translate(-18%, -32%)', fill: 'white', fontSize: '0.01em' }}>7</text>
            <text style={{ transform: 'translate(-4%, -36%)', fill: 'white', fontSize: '0.01em' }}>8</text>
            <text style={{ transform: 'translate(11%, -34%)', fill: 'white', fontSize: '0.01em' }}>9</text>
            <text style={{ transform: 'translate(20%, -26%)', fill: 'white', fontSize: '0.01em' }}>10</text>
            <text style={{ transform: 'translate(30%, -14%)', fill: 'white', fontSize: '0.01em' }}>11</text>
            <text style={{ transform: 'translate(34%, 0%)', fill: 'white', fontSize: '0.01em' }}>12</text>

            <Border />
        </>
    )
}

export default Rpm