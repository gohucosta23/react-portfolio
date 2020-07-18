import React from 'react';
import resume from "../../images/portfolio/resume.pdf";


const styles = {
    content: {
        margin: "auto"
    },
    text: {
        textAlign: "center"
    },
    connect : {
        paddingTop : "10px"
    }
}

export default function ConnectWithMe() {
    return (
        <div style = {styles.connect}>
        <div className="ui card">
            <div className="content">
                <div className="header center aligned">Connect With Me</div>
            </div>
            <div className="content" style={styles.text}>
                <p><strong>3308 Overcreek ln</strong></p>
                <p><strong>Richmond, VA 23112</strong></p>
                <p><strong>(804)475-2712</strong></p>
            </div>
            <div className="content" style={styles.content}>
                <div className="left floated">
                    <a href="https://github.com/gohucosta23"><i className="github big square icon" target="blank"></i></a>
                </div>
                <div className="left floated">
                <a href="mailto:costaphugo1@gmail.com"><i className="envelope big icon" target="blank"></i></a>
                </div>
                <div className="left floated">
                    <a href = "https://www.linkedin.com/in/hugo-costa-69b793198/" target="blank"><i className="linkedin big icon"></i></a>
                </div>
                <div className="left floated">
                    <a href = {resume} target="blank"><i className="file alternate outline big icon"></i></a>
                </div>
            </div>
        </div>
        </div>
    )
}
