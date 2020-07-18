import React from 'react';
import './App.css';
import Wrapper from "./components/utils/Wrapper";
import Navbar from "./components/Navbar/Navigationbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/pages/About";
import Project from "./components/pages/project/Project";
import Contact from "./components/pages/contact/Contact";
import 'semantic-ui-css/semantic.min.css';

function App() {
  
  return (
    <Router>
      <Header />
      <Wrapper>
      <Navbar />
      <Route exact path="/react-portfolio" component={About} />
      <Route exact path="/projects" component={Project} />
      <Route exact path="/contact" component={Contact} />
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
