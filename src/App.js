import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import Register from "./components/authComponents/Register";
import React from "react";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register/*" element={<Register />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
