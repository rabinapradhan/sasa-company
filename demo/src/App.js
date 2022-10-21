import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Footer from "./components/Footer";

import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";

import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDisplay from "./pages/ProjectDisplay";
import Messenger from "./components/Messenger";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/service" element={<Services />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/project/:slug" element={<ProjectDisplay />} />
        </Routes>
        <Messenger />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
