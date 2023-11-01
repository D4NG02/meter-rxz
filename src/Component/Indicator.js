import React from 'react'
import { Box } from '@mui/material'
import { arc } from "d3-shape"


export default function Indicator({data}) {
    if(data){
        console.table(data["data"][0])
    }

    const borderArc = arc()
                        .outerRadius(1)
                        .innerRadius(0)
                        .startAngle(0)
                        .endAngle(2*Math.PI)
                        .cornerRadius(0)
                        ()

    return (
        <Box sx={{ padding: '0.4em 0'}}>
            <svg style={{ paddingInlineEnd: '1em' }} height="1.6em"
                viewBox={[ -1, -1, 2, 2, ].join(" ")}>
                    { data["data"][0]["Neutral"]==="ON" && <path d={borderArc} fill="green" />}
                    { data["data"][0]["Neutral"]==="OFF" && <path d={borderArc} fill="transparent" />}
            </svg>
            <svg style={{ paddingInlineEnd: '1em' }} height="1.6em"
                viewBox={[ -1, -1, 2, 2, ].join(" ")}>
                    { data["data"][0]["2T"]==="ON" && <path d={borderArc} fill="red" />}
                    { data["data"][0]["2T"]==="OFF" && <path d={borderArc} fill="transparent" />}
            </svg>

            {/* High Beam */}
            <svg style={{ paddingInlineEnd: '1em' }} height="1.6em"
                viewBox={[ -1, -1, 2, 2, ].join(" ")}>
                    { data["data"][0]["Beam"]==="ON" && <path d={borderArc} fill="blue" />}
                    { data["data"][0]["Beam"]==="OFF" && <path d={borderArc} fill="transparent" />}
            </svg>

            <svg style={{ paddingInlineEnd: '1em' }} height="1.6em"
                viewBox={[ -1, -1, 2, 2, ].join(" ")}>
                    { data["data"][0]["Signal"]==="ON" && <path d={borderArc} fill="yellow" />}
                    { data["data"][0]["Signal"]==="OFF" && <path d={borderArc} fill="transparent" />}
            </svg>
        </Box>
    )
}
