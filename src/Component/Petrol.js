import React from "react"
import { arc } from "d3-shape"
import { scaleLinear } from "d3-scale"

const Petrol = ({ classname, value, min=0, max, colorStart, colorEnd }) => {
    const backgroundGaugeArc = arc()
                            .outerRadius(0.94)
                            .innerRadius(0.90)
                            .startAngle(0.92*Math.PI)
                            .endAngle(0.56*Math.PI)
                            .cornerRadius(0)
                            ()

    // Value
    const percentScale = scaleLinear()
                            .domain([min, max])
                            .range([0, 1])
    const percent = percentScale(value)
    const angleScale = scaleLinear()
                            .domain([0, 1])
                            .range([0.92*Math.PI, 0.56*Math.PI])
                            .clamp(true)
    const angle = angleScale(percent)
    const filledArc = arc()
                            .outerRadius(0.94)
                            .innerRadius(0.90)
                            .startAngle(0.92*Math.PI)
                            .endAngle(angle)
                            .cornerRadius(0)
                            ()

    // Needle
    const needleArc = arc()
                            .outerRadius(0.88)
                            .innerRadius(0.8)
                            .startAngle(angle -0.014)
                            .endAngle(angle +0.014)
                            .cornerRadius(0)
                            ()
                                               
    // Needle
    const Needle = () => {
        const needleArc = arc()
                                .outerRadius(0.88)
                                .innerRadius(0.70)
                                .startAngle(angle -0.01)
                                .endAngle(angle +0.01)
                                .cornerRadius(0)
                                ()
        const needleArc2 = arc()
                                .outerRadius(0.70)
                                .innerRadius(0.72)
                                .startAngle(angle -0.05)
                                .endAngle(angle +0.05)
                                .cornerRadius(1)
                                () 
        return (
            <>
                <path d={needleArc} fill={gradientTagUse} />
                <path d={needleArc2} fill={"url(#" +gradientTag+ ")"} />
            </>
        )
    }

    // Warning
    const warningArc = arc()
                            .outerRadius(0.90)
                            .innerRadius(0.88)
                            .startAngle(0.92*Math.PI)
                            .endAngle(0.86*Math.PI)
                            .cornerRadius(0)
                            ()

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
                    x1="0" y1="1" x2="1" y2="0">
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

            <path d={backgroundGaugeArc} fill="lightgray" />
            <path d={warningArc} fill="#ff4400" />
            
            <Needle />

            <path d={filledArc} fill={gradientTagUse} />
        </>
    )
}

export default Petrol
