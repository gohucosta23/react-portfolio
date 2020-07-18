import React from 'react'

export default function ContactForm(props) {
    return (
        <div>
            <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <div className="ui input"><input name = "name" onChange = {props.handleInputChange} type="text" placeholder="Name" /></div>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <div className="ui input"><input name = "email" onChange = {props.handleInputChange} type="email" placeholder="Email" /></div>
                    </div>
                <div className="field">
                    <label>Message</label>
                    <textarea name = "message" onChange = {props.handleInputChange} rows="3"></textarea>
                </div>
                <div className="field"><button onClick = {props.handleSubmit} className="ui button">Submit</button></div>
            </form>
        </div>
    )
}
