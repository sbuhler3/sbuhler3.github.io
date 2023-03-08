import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Certification from "./components/Certification";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/certifications" element={<Certification />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
      <Sidebar />
    </div>
  );
}

export default App;
