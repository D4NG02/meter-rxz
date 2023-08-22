import React,  { useState, useEffect } from 'react'
import { Box } from '@mui/material';
import { format } from "d3-format"

export default function Speed() {
    const [speed, setSpeed] = useState(0);
  
    const generateRandomSpeed = () => {
        const min = 0;
        const max = 200;
        const random =
            Math.floor(Math.random() * (max - min + 1)) + min;
            setSpeed(random);
    };
    
    useEffect(() => {
        generateRandomSpeed()
    }, [] )
    return (
        <Box>
            <h1 style={{ fontSize: "6em", }}>
                { format("")(speed) }
            </h1>
        </Box>
    )
}
