import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import * as serviceWorker from './serviceWorker.js';
// import logo from './logo.svg';
import "./App.css";

import Contact from "./components/Contact";
import Projects from "./components/Projects.js";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import '@material-ui/core';




    ReactDOM.render(
    
      <Router>
        
        <Navbar />
        
        <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        
        </Routes>
        <Footer />
      </Router>,
   


    document.getElementById("root")
  );


serviceWorker.unregister();

