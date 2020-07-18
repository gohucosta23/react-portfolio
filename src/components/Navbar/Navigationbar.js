import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navBarStyle.css";

const styles = {
  text : {
    fontWeight: "bolder",
    fontFamily: "Franklin Gothic Medium , Arial Narrow, Arial, sans-serif",
    fontSize: "20px",
    color: "white"
  }
}

export default function Navbar() {

    const location = useLocation();

    return (
      <div className="ui vertical segment navbar">
      <div className = "ui grid">
        <div className = "ui row navbar">
        <div className="center aligned five wide column navitem">
        <Link to="/react-portfolio" className={location.pathname === "react-portfolio/" ? "nav-link active" : "nav-link"} >
          <p style = {styles.text}>About</p>
        </Link>
        </div>
        <div className="center aligned six wide column">
        <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
          <p style = {styles.text}>Projects</p>
        </Link>
        </div>
        <div className="five wide column center aligned">
        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
          <p style = {styles.text}>Contact</p>
        </Link>
        </div>
        </div>
      </div>
      </div>
    );

}