import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navb from "./Components/Navb";
import Home from "./Pages/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navb />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
