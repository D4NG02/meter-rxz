import { useState, useEffect } from "react";
import Gauge from "./Component/Gauge";
import { Box } from "@mui/material";

function App() {
  const [randomNumber, setRandomNumber] = useState(50);

  const generateRandomNumber = () => {
    const min = 0;
    const max = 100;
    const randomNumber =
      Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(randomNumber);
  };
  const generateRandomNumber2 = () => {
    const min = 0;
    const max = 12000;
    const randomNumber =
      Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(randomNumber);
  };

  useEffect(() => {
    generateRandomNumber()
    generateRandomNumber2()
  }, [] )

  return (
    <Box className="App" sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#555555', padding: '10px', height: 'calc(100vh - 20px)' }}>
      <Gauge classname="petrol" value={randomNumber} colorStart="#fd1d1d" colorEnd="#4ffc45" />
    </Box>
  );
}

export default App;
