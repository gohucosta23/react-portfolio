import React from 'react'

export default function ContactForm() {
    return (
        <div>
            <form class="ui form">
                    <div class="field">
                        <label>Name</label>
                        <div class="ui input"><input type="text" placeholder="Name" /></div>
                    </div>
                    <div class="field">
                        <label>Email</label>
                        <div class="ui input"><input type="email" placeholder="Email" /></div>
                    </div>
                <div class="field">
                    <label>Message</label>
                    <textarea rows="3"></textarea>
                </div>
                <div class="field"><button class="ui button">Submit</button></div>
            </form>
        </div>
    )
}
