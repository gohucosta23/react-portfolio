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
        <div class="ui card">
            <div class="content">
                <div class="header center aligned">Connect With Me</div>
            </div>
            <div class="content" style={styles.text}>
                <p><strong>3308 Overcreek ln</strong></p>
                <p><strong>Richmond, VA 23112</strong></p>
                <p><strong>(804)475-2712</strong></p>
            </div>
            <div class="content" style={styles.content}>
                <div class="left floated">
                    <a href="https://github.com/gohucosta23"><i class="github big square icon" target="blank"></i></a>
                </div>
                <div class="left floated">
                <a href="mailto:costaphugo1@gmail.com"><i class="envelope big icon" target="blank"></i></a>
                </div>
                <div class="left floated">
                    <a href = "https://www.linkedin.com/in/hugo-costa-69b793198/" target="blank"><i class="linkedin big icon"></i></a>
                </div>
                <div class="left floated">
                    <a href = {resume} target="blank"><i class="file alternate outline big icon"></i></a>
                </div>
            </div>
        </div>
        </div>
    )
}
