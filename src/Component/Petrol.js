import React from "react"
import { arc } from "d3-shape"
import { scaleLinear } from "d3-scale"

const Petrol = ({ classname, value, min=0, max, colorStart, colorEnd }) => {   
    // Ticker
    const Ticker = (props) => {
        const colorWarning = "#ff4400"
        const colorWhite = "#FFFFFF"
        const tickFull = arc()
                            .outerRadius(0.94)
                            .innerRadius(0.89)
                            .startAngle(0.617*Math.PI)
                            .endAngle(0.623*Math.PI)
                            .cornerRadius(0)
                            ()
        const tickWarning = arc()
                            .outerRadius(0.94)
                            .innerRadius(0.91)
                            .startAngle(0.809*Math.PI)
                            .endAngle(0.815*Math.PI)
                            .cornerRadius(0)
                            ()
        const tickHalf = arc()
                            .outerRadius(0.94)
                            .innerRadius(0.91)
                            .startAngle(0.737*Math.PI)
                            .endAngle(0.7435*Math.PI)
                            .cornerRadius(0)
                            ()
        const tickEmpty = arc()
                            .outerRadius(0.94)
                            .innerRadius(0.89)
                            .startAngle(0.8565*Math.PI)
                            .endAngle(0.863*Math.PI)
                            .cornerRadius(0)
                            ()
        return (
            <>
                <path d={tickFull} fill={colorWhite} />
                <path d={tickHalf} fill={colorWhite} />

                <path d={tickWarning} fill={colorWarning} />
                <path d={tickEmpty} fill={colorWarning} />
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
                            .range([0.86*Math.PI, 0.62*Math.PI])
                            .clamp(true)
    const angle = angleScale(percent)
                                               
    // Needle
    const Nobe = () => {
        const colorGray = "#5c5e5e"
        const nobeArc = arc()
                                .outerRadius(0.78)
                                .innerRadius(0.76)
                                .startAngle(0.59*Math.PI)
                                .endAngle(0.89*Math.PI)
                                .cornerRadius(1)
                                ()
        return (
            <>
                <path d={nobeArc} fill={colorGray} />
                
                <line x1="0.74" x2="0.98" y1="0.22" y2="0.15" stroke={colorGray} strokeWidth="0.01" />
                <line x1="0.265" x2="0.21" y1="0.72" y2="0.97" stroke={colorGray} strokeWidth="0.01" />
            </>
        )
    }

    return (
        <>
            <text style={{ transform: 'translate(16.5%, 40%)', fill: 'white', fontSize: '0.006em' }}>E</text>
            <text style={{ transform: 'translate(38%, 17%)', fill: 'white', fontSize: '0.006em' }}>F</text>
            <Ticker />
            <Nobe />
        </>
    )
}

export default Petrol
