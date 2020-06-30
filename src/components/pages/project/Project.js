import React from 'react';
import ProjectList from "./ProjectList";
import Projects from "./ProjectData";

export default function Project() {


    return (
        <div style = {{height : "1200px"}}>
            <div class="ui container six column grid">
                <ProjectList projects = {Projects}/>
            </div>
        </div>
    )
}