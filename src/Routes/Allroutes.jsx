import React from "react";
import Home from "../Components/Home";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import { Routes, Route } from "react-router-dom";

export default function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
    </div>
  );
}
