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
    const filledArc = arc()
                            .outerRadius(0.94)
                            .innerRadius(0.925)
                            .startAngle(0.86*Math.PI)
                            .endAngle(angle)
                            .cornerRadius(0)
                            ()
                                               
    // Needle
    const Needle = () => {
        const colorGray = "#5c5e5e"
        const nobeArc = arc()
                                .outerRadius(0.78)
                                .innerRadius(0.76)
                                .startAngle(0.59*Math.PI)
                                .endAngle(0.89*Math.PI)
                                .cornerRadius(1)
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
        return (
            <>
                <path d={nobeArc} fill={colorGray} />
                <path d={needleArc} fill={gradientTagUse} />
                <path d={needleArc2} fill={gradientTagUse} />
                
                <line x1="0.74" x2="0.98" y1="0.22" y2="0.15" stroke={colorGray} strokeWidth="0.01" />
                <line x1="0.265" x2="0.21" y1="0.72" y2="0.97" stroke={colorGray} strokeWidth="0.01" />
            </>
        )
    }

    // Gradient
    const gradientTag = classname + "_gradient";
    const gradientTagUse = "url(#" +gradientTag+ ")";
    const colorScale = scaleLinear()
                            .domain([0, 1])
                            .range([colorStart, colorEnd])
    const gradientSteps = colorScale.ticks(100)
                            .map(value => colorScale(value))

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

            <text style={{ transform: 'translate(16.5%, 40%)', fill: 'white', fontSize: '0.006em' }}>E</text>
            <text style={{ transform: 'translate(38%, 17%)', fill: 'white', fontSize: '0.006em' }}>F</text>
            <Ticker />
            <Needle />

            <path d={filledArc} fill={gradientTagUse} />
        </>
    )
}

export default Petrol
