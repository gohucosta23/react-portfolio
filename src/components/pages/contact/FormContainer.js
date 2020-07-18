import React from 'react';

export default function FormContainer(props) {
    return (
        <div>
            <div className="ui raised segments" style = {{backgroundColor : "white"}}>
                {props.children}
            </div>
        </div>
    )
}
