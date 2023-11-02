import React from "react"
import { Box } from "@mui/material";
import logo from "./Asset/background2.jpg"

import Gauge from "./Component/Gauge";
import Spotify from "./Component/Spotify";
// import Indicator from "./Component/Indicator";

function App() {
  return (
    <Box className="App" sx={{ display: 'grid', gridTemplateColumns: 'min-content auto', alignItems: 'center', gap: '1em', height: '100%', fontFamily: 'Oswald' }}>
      <Gauge />
      {/* {sheetData && <Indicator data={sheetData} />} */}

      <Box>
        <Spotify />
      </Box>
    </Box>
  );
}

export default App;
