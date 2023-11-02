import React from "react"
import *  as d3 from 'd3'
import { arc } from "d3-shape"

import Speed from "./Speed";
import Rpm from "./Rpm";
import Petrol from "./Petrol";
import Clock from "./Clock";

export default function Gauge() {
    const backgroundRPM = d3.arc()
                        .outerRadius(1)
                        .innerRadius(0.64)
                        .startAngle(0.46*Math.PI)
                        .endAngle(-1*Math.PI)
                        .cornerRadius(0)
                        ()
    const TickerRPM = (props) => {
        const tickArc = arc()
                            .outerRadius(0.96)
                            .innerRadius(props.inner)
                            .startAngle(props.start)
                            .endAngle(props.end)
                            .cornerRadius(1)
                            ()
        return (
            <path d={tickArc} fill={props.color} />
        )
    }
         
    // Background Petrol
    const backgroundPetrolArc = arc()
                        .outerRadius(0.56)
                        .innerRadius(0.5)
                        .startAngle(1.*Math.PI)
                        .endAngle(1.5*Math.PI)
                        .cornerRadius(1)
                        ()              

    return (
        <>
            <svg height="18em" viewBox={[ -1, -1, 2, 2 ].join(" ")}>
                <Clock />

                {/* RPM */}
                <path d={backgroundRPM} fill="rgba(19, 19, 19, 0.7)" />
                <line x1="0.01" x2="0.01" y1="0.64" y2="1" stroke="rgba(19, 19, 19, 0.7)" strokeWidth="0.02" />
                <TickerRPM start={1.018*Math.PI} end={1.022*Math.PI} inner={0.86} color="white" /> {/* 0 */}
                <TickerRPM start={1.076*Math.PI} end={1.08*Math.PI} inner={0.9} color="white" /> {/* 500 */}
                <TickerRPM start={1.133*Math.PI} end={1.137*Math.PI} inner={0.86} color="white" />  {/* 1000 */}
                <TickerRPM start={1.191*Math.PI} end={1.195*Math.PI} inner={0.9} color="white" />  {/* 1500 */}
                <TickerRPM start={1.248*Math.PI} end={1.252*Math.PI} inner={0.86} color="white" />  {/* 2000 */}
                <TickerRPM start={1.305*Math.PI} end={1.309*Math.PI} inner={0.9} color="white" />  {/* 2500 */}
                <TickerRPM start={1.363*Math.PI} end={1.367*Math.PI} inner={0.86} color="white" />  {/* 3000 */}
                <TickerRPM start={1.42*Math.PI} end={1.424*Math.PI} inner={0.9} color="white" />     {/* 3500 */}
                <TickerRPM start={1.478*Math.PI} end={1.482*Math.PI} inner={0.86} color="white" />   {/* 4000 */}
                <TickerRPM start={1.535*Math.PI} end={1.539*Math.PI} inner={0.9} color="white" />    {/* 4500 */}
                <TickerRPM start={1.593*Math.PI} end={1.597*Math.PI} inner={0.86} color="white" />    {/* 5000 */}
                <TickerRPM start={1.65*Math.PI} end={1.654*Math.PI} inner={0.9} color="white" />    {/* 5500 */}
                <TickerRPM start={1.708*Math.PI} end={1.712*Math.PI} inner={0.86} color="white" />    {/* 6000 */}
                <TickerRPM start={1.766*Math.PI} end={1.769*Math.PI} inner={0.9} color="white" />    {/* 6600 */}
                <TickerRPM start={1.823*Math.PI} end={1.826*Math.PI} inner={0.86} color="white" />    {/* 7000 */}
                <TickerRPM start={1.88*Math.PI} end={1.884*Math.PI} inner={0.9} color="white" />    {/* 7500 */}
                <TickerRPM start={1.938*Math.PI} end={1.942*Math.PI} inner={0.86} color="white" />    {/* 8000 */}
                <TickerRPM start={1.996*Math.PI} end={1.999*Math.PI} inner={0.9} color="white" />    {/* 8500 */}
                <TickerRPM start={2.053*Math.PI} end={2.056*Math.PI} inner={0.86} color="white" />    {/* 9000 */}
                <TickerRPM start={2.111*Math.PI} end={2.114*Math.PI} inner={0.9} color="white" />    {/* 9500 */}
                <TickerRPM start={2.168*Math.PI} end={2.171*Math.PI} inner={0.86} color="rgb(176, 14, 10)" />    {/* 10000 */}
                <TickerRPM start={2.226*Math.PI} end={2.229*Math.PI} inner={0.9} color="rgb(176, 14, 10)" />    {/* 10500 */}
                <TickerRPM start={2.284*Math.PI} end={2.287*Math.PI} inner={0.86} color="rgb(176, 14, 10)" />    {/* 11000 */}
                <TickerRPM start={2.34*Math.PI} end={2.344*Math.PI} inner={0.9} color="rgb(176, 14, 10)" />    {/* 11500 */}
                <TickerRPM start={2.398*Math.PI} end={2.402*Math.PI} inner={0.86} color="rgb(176, 14, 10)" />    {/* 12000 */}
                <text style={{ transform: 'translate(-5%, 42%)', fill: 'white', fontSize: '0.01em' }}>0</text>
                <text style={{ transform: 'translate(-18%, 39%)', fill: 'white', fontSize: '0.01em' }}>1</text>
                <text style={{ transform: 'translate(-30%, 31%)', fill: 'white', fontSize: '0.01em' }}>2</text>
                <text style={{ transform: 'translate(-38.4%, 19.9%)', fill: 'white', fontSize: '0.01em' }}>3</text>
                <text style={{ transform: 'translate(-42%, 5.5%)', fill: 'white', fontSize: '0.01em' }}>4</text>
                <text style={{ transform: 'translate(-40%, -8.5%)', fill: 'white', fontSize: '0.01em' }}>5</text>
                <text style={{ transform: 'translate(-33.5%, -21%)', fill: 'white', fontSize: '0.01em' }}>6</text>
                <text style={{ transform: 'translate(-22%, -30%)', fill: 'white', fontSize: '0.01em' }}>7</text>
                <text style={{ transform: 'translate(-9.5%, -35%)', fill: 'white', fontSize: '0.01em' }}>8</text>
                <text style={{ transform: 'translate(4.6%, -35%)', fill: 'white', fontSize: '0.01em' }}>9</text>
                <text style={{ transform: 'translate(16%, -30%)', fill: 'rgb(176, 14, 10)', fontSize: '0.01em' }}>10</text>
                <text style={{ transform: 'translate(27%, -21%)', fill: 'rgb(176, 14, 10)', fontSize: '0.01em' }}>11</text>
                <text style={{ transform: 'translate(33%, -9%)', fill: 'rgb(176, 14, 10)', fontSize: '0.01em' }}>12</text>
                <Rpm />
                
                {/* Petrol */}
                <path d={backgroundPetrolArc} fill="#5c5e5e" />
                <Petrol />

                {/* Speedo */}
                <line x1="0.08" x2="0.84" y1="0.7" y2="0.7" stroke="rgba(176, 14, 10, 0.7)" strokeWidth="0.6" />
                <Speed />
            </svg>
        </>
    )
}
