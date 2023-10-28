import React from "react"
import *  as d3 from 'd3'

import Petrol from "./Petrol"
import Rpm from "./Rpm";
import Speed from "./Speed";
import RPM2 from "./RPM2";
import Petrol2 from "./Petrol2";

export default function Gauge() {
    const borderArc = d3.arc()
                        .outerRadius(1)
                        .innerRadius(0.98)
                        .startAngle(0)
                        .endAngle(2*Math.PI)
                        .cornerRadius(0)
                        ()
        
    const backgroundOuter = d3.arc()
                        .outerRadius(0.98)
                        .innerRadius(0)
                        .startAngle(0)
                        .endAngle(2*Math.PI)
                        .cornerRadius(0)
                        ()
        
    return (
        <>
            <svg height="20em" viewBox={[ -1, -1, 2, 2 ].join(" ")}>
                
                <path d={borderArc} fill="#717171" />
                <path d={backgroundOuter} fill="rgba(19, 19, 19, 0.7)" />

                
                <Rpm />
                <RPM2 />
                <Speed />
                <Petrol />
                <Petrol2 />
            </svg>
        </>
    )
}
