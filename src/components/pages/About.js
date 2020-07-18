import React from 'react';
import photo from "../images/photo.jpeg";


export default function About() {

    return (
        <div style={{ height: "700px" }}>
            <div className="ui raised container segment" style={{ marginTop: "50px" }}>
                <div className="ui grid container row">
                    <div className="ui grid column container twelve">
                        <div className="ui column six wide">
                            <img className="ui rounded image" src={photo} alt="hugo costa" width="300px" height="300px" />
                        </div>
                        <div className="ui grid column nine wide">
                            <br></br>
                            <h2><strong>About</strong></h2>
                            <div className="ui fitted divider"></div>
                            <br></br>
                            <p>Full Stack Web Developer, creative problem solver and teamplayer, with experience inHTML5, CSS3, JavaScript, 
                                jQuery, Bootstrap, Express.js, React.js, Node.js, Database Theory,MongoDB, MySQL, Command Line and Git​. Being 
                                a software engineer and learning newtechnologies is my passion. In a previous career, I worked in the 
                                financial industry in a salesteam, which prepared me to work in a fast paced environment. With over 17 years 
                                of experienceI will bring outstanding teamwork and leadership skills to my next team.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}