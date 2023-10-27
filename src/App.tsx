import { Stack } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {

  return (
    <Stack sx={{maxWidth: "85%", padding: "15px 0px", margin: "auto"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>            
          </Route>
        </Routes>    
      </BrowserRouter>
    </Stack>
  );
}

export default App;
