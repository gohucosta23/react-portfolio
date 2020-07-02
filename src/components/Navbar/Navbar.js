import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navBarStyle.css";

const styles = {
  text : {
    fontWeight: "bolder",
    fontFamily: "Franklin Gothic Medium , Arial Narrow, Arial, sans-serif",
    fontSize: "20px",
    textAlign: "center",
    color: "white"
  }
}

export default function Navbar() {

    const location = useLocation();

    return (
      <div class="ui vertical segment">
      <div class = "ui grid">
        <div class = "ui row grey">
        <div class="center aligned five wide column">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"} >
          <p style = {styles.text}>About</p>
        </Link>
        </div>
        <div class="center aligned six wide column">
        <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
          <p style = {styles.text}>Projects</p>
        </Link>
        </div>
        <div class="five wide column center aligned">
        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
          <p style = {styles.text}>Contact</p>
        </Link>
        </div>
        </div>
      </div>
      </div>
    );

}