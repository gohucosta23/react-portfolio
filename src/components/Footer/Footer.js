import React from 'react';
import "./footer.css";

export default function Footer() {
    return (
        <div class= "ui orange">
            <div class="ui row" className = "footerPosition">
                <div class="column padding-reset" >
                    <div class="ui orange huge message page grid center aligned" style = {{height : "150px"}}>
                        <h1 class="ui huge header blue">Footer</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
