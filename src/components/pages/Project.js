import React from 'react';
import ProjectList from "../utils/ProjectList";
import projects from "../../projects.json";

export default function Project() {


    return (
        <div>
            <div class="ui container six column grid">
                <ProjectList projects = {projects}/>
            </div>
        </div>
    )
}