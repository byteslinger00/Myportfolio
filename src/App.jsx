import React from "react";

import Header from "./components/header/Header";
import Topbar from './components/topbar/Topbar';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import History from './components/experience/Experience';
import Footer from './components/footer/Footer';

import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <About />
      <Skills />
      <History />
      <Portfolio />
      {/* <Contact /> */}
      <Footer />
    </>
  );
};

export default App;
