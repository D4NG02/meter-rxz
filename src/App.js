import React from "react"
import { Box } from "@mui/material";
import logo from "./Asset/Capture.png"

import Gauge from "./Component/Gauge";
// import Indicator from "./Component/Indicator";

function App() {
  return (
    <Box className="App" sx={{ display: 'flex', height: '100%', alignItems: 'center', padding: '0 20px', fontFamily: 'Oswald', backgroundImage: 'url(' +logo+ ')' }}>
      <Gauge />
      {/* {sheetData && <Indicator data={sheetData} />} */}
    </Box>
  );
}

export default App;
