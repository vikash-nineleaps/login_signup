import "./App.css";
import React from "react";
import Landingpage from "./components/Landingpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Error from "./components/Error";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Landingpage />} />
          <Route path="Homepage" element={<Homepage />} />
          <Route path="Error" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
