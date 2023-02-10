import Navbar from "./components/header/Navbar";
import { Box } from "@mui/material";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Box style={{ marginTop: 64 }}>
        <Hero />
      </Box>
    </div>
  );
}

export default App;
