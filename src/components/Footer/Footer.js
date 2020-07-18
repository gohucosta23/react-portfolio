import React from 'react';
import { Link } from "react-router-dom";

import "./footer.css";

export default function Footer() {
    return (
        <div>
            <div className=" footerPosition">
                <div className="column padding-reset" >
                    <div style = {{height : "110px", textAlign : "center"}}>
                    <nav className="foo-nav">
                            <ul> 
                                <li><Link style={{color : "white", fontWeight : "bold"}} to="/react-portfolio">About</Link></li>
                                <li><Link style={{color : "white", fontWeight : "bold"}} to="/projects">Projects</Link></li>
                                <li><Link style={{color : "white", fontWeight : "bold"}} to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                        <br></br>
                        <p className="copyright">&copy; COPYRIGHT 2020  ALL RIGHTS RESERVED.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
