import React from "react";
import Hero from "./components/Hero/Hero";
import Home from "./pages/Home/Home";
import Destinations from "./pages/Destinations/Destinations";
import Packages from "./pages/Packages/Packages";
import Contact from "./pages/Contact/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
