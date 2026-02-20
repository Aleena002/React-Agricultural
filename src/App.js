import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
// Pages
import Home from "./pages/Home";

// CSS
import "./index.css";

function App() {
  return (
    <>
      {/* Header shows on pages */}
      <Header title="Green Fields" tagline="Smart Solutions for Modern Farming" />

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      

    </>
  );
}

export default App;