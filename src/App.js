import React,  { useState, useEffect } from "react"
import { Box } from "@mui/material";
import useGoogleSheets from 'use-google-sheets';

import Gauge from "./Component/Gauge";
import Indicator from "./Component/Indicator";

function App() {
  return (
    <Box className="App" sx={{ display: 'flex', height: '100%', alignItems: 'center', padding: '0 20px' }}>
      <Gauge />
      {/* {sheetData && <Indicator data={sheetData} />} */}
    </Box>
  );
}

export default App;
