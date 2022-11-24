import React from "react";
import Fetchdata from "./Fetchdata";
import Header from "./comps/header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Links from "./Links";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Fetchdata />
        <Header />
        <Links />
      </Router>
    </div>
  );
}

export default App;
