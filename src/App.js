import "./App.css";
import Friendly from "./components/details";
import Tournament from "./components/details2";
import React from "react";
import MatchType from "./components/match-type";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<MatchType />} />
          <Route path="/page2" exact element={<Friendly />} />
          <Route path="/page2b" exact element={<Tournament />} />
          {/* <Route path="/page3" exact element={<MatchType />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
