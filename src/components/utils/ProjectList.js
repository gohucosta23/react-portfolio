import React from 'react';

const styles = {
    content : {
        textAlign : "center",
        marginTop : "20px"
    },
    card : {
        marginTop : "30px"
    }
}

export default function ProjectList(props) {
    return (
        <>
            {props.projects.map(project => (
                <>  
                    <div style = {styles.card} class="ui segment left floated clearing">
                        <img src={project.image} alt={project.title} />
                    <div style = {styles.content} class="content center aligned">
                        <h4 class="center aligned">{project.title}</h4>
                        <div class="meta">
                            <span class="date">View on Github : <a href={project.github}>Here...</a></span>
                        </div>
                        <div class="description">
                            View on Github : <a href={project.github}>Here...</a>
                        </div>
                        <div class="description">
                            View on the Browser : <a href={project.url}>Here...</a>
                        </div>
                    </div>
                    </div>
                </>
            ))}
        </>
    );
}
