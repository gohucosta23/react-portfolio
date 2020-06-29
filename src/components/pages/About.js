import React from 'react';
import photo from "../images/photo.jpeg";


export default function About() {

    return (
        <div>
        <div class = "ui raised container segment">
            <div class="ui grid container row">
                <div class="ui grid column container twelve">
                    <div class="ui column six wide">
                        <img class="ui rounded image" src={photo} alt="hugo costa" width = "300px" height = "300px" />
                    </div>
                    <div class="ui grid column nine wide">
                        <br></br>
                        <h2><strong>About</strong></h2>
                        <div class="ui fitted divider"></div>
                        <br></br>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}