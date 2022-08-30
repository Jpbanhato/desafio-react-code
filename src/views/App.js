import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "./Home";
import Members from "./Members";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

export function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar-top">
          <Navbar dark></Navbar>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/members" element={<Members />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
