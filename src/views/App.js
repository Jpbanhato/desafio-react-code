import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "./Login";
import Home from "./Home";
import Admin from "./Admin";
import Members from "./Members";
import ScrollButton from "../components/ScrollButton";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

export function App() {
  return (
    <Router>
      <div className="App">
        <ScrollButton />
        <div className="navbar-top">
          <Navbar dark></Navbar>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
