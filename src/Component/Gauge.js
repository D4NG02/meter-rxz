import React,  { useState, useEffect } from "react"
import { format } from "d3-format"
import { arc } from "d3-shape"

import Petrol from "./Petrol"
import Rpm from "./Rpm";
import Speed from "./Speed";

export default function Gauge() {
    const [randomNumber, setRandomNumber] = useState(0);
    const [randomNumber2, setRandomNumber2] = useState(0);
  
    const generateRandomNumber = () => {
        const min = 0;
        const max = 100;
        const random =
            Math.floor(Math.random() * (max - min + 1)) + min;
        setRandomNumber(random);
    };
    const generateRandomNumber2 = () => {
        const min = 0;
        const max = 12000;
        const random =
            Math.floor(Math.random() * (max - min + 1)) + min;
        setRandomNumber2(random);
    };
  
    useEffect(() => {
        generateRandomNumber()
        generateRandomNumber2()
    }, [] )


    const Border = () => {
        const borderArc = arc()
                            .outerRadius(1)
                            .innerRadius(0.98)
                            .startAngle(0)
                            .endAngle(2*Math.PI)
                            .cornerRadius(0)
                            ()
        return (
            <path d={borderArc} fill="#717171" />
        )
    }
    const Backgorund = () => {
        const backgroundArc = arc()
                            .outerRadius(0.98)
                            .innerRadius(0)
                            .startAngle(0)
                            .endAngle(2*Math.PI)
                            .cornerRadius(0)
                            ()
        return (
            <path d={backgroundArc} fill="#131313" />
        )
    }

    return (
        <>
            <svg style={{overflow: "visible"}}
                height="20em"
                viewBox={[
                    -1, -1,
                    2, 2,
                ].join(" ")}>
                
                <Border />
                <Backgorund />

                
                <Rpm classname="rpm" value={randomNumber2} max={12000} />
                <Petrol classname="petrol" value={randomNumber} max={100} colorStart="#ff4400" colorEnd="#4ffc45" />
            </svg>

            <Speed />

            <div style={{
                marginInlineStart: '0.4em',
                fontFeatureSettings: "'zero', 'tnum' 1",
            }}>
                <span style={{ fontSize: "2em", }}>
                    { format("")(randomNumber2) }
                </span>
            </div>
        </>
    )
}
