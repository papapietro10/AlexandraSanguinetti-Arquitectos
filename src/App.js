import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./components/contenedor/Index/Index";
import Navbaarr from "./components/contenedor/Nav/Nav"
import Footer from "./components/contenedor/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbaarr />
      <Routes>
        <Route path="" element={<Index />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
