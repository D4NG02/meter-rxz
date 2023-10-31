import React from "react"
import WebFont from 'webfontloader';
import { Box } from "@mui/material";

import Gauge from "./Component/Gauge";
// import Indicator from "./Component/Indicator";

WebFont.load({
  google: {
    families: ['Oswald', 'sans-serif']
  }
});
function App() {

  return (
    <Box className="App" sx={{ display: 'flex', height: '100%', alignItems: 'center', padding: '0 20px', fontFamily: 'Oswald' }}>
      <Gauge />
      {/* {sheetData && <Indicator data={sheetData} />} */}
    </Box>
  );
}

export default App;
