import React from 'react';
import './App.css';
import Wrapper from "./components/Wrapper/index";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import 'semantic-ui-css/semantic.min.css';




function App() {
  return (
    <Wrapper>
    <Router>
      <Header />
     <Navbar />
     <Route exact path="/about" component={About} />
     <Route exact path="/projects" component={Project} />
     <Route exact path="/contact" component={Contact} />
     <Footer />
    </Router>
    </Wrapper>
  );
}

export default App;
