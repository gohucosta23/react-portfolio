import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navBarStyle.css";

export default function Navbar() {

    const location = useLocation();

    return (
        <div class="ui vertical segment">
      <div class = "ui grid">
        <div class="center aligned five wide column navItem">
        <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
          <p class= "ui orange">About</p>
        </Link>
        </div>
        <div class="center aligned five wide column navItem">
        <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
          Projects
        </Link>
        </div>
        <div class="five wide column navItem center aligned">
        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
          Contact
        </Link>
        </div>
      </div>
      </div>
    );

}