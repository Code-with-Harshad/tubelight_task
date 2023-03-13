import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./AppRouts";
import "./assests/css/index.css";

function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
