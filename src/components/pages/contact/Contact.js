import React, { useState } from 'react';
import FormContainer from "./FormContainer";
import ContactForm from "./ContactForm";
import ConnectWithMe from "./ConnectWithMe";
import emailjs from 'emailjs-com';


export default function Contact() {

    const [formInput, setFormInput] = useState({});

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        setFormInput({ ...formInput, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const service_id = "gmail";
        const template_id = "template_iw0sSsev";

        const templateParams = {
            from_name: formInput.name,
            from_email: formInput.email,
            message_html: formInput.message,
        }

        emailjs.send(service_id, template_id, templateParams, 'user_nNUThZC0qDOt93xdJVYYI')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                window.location.reload();
            }, (err) => {
                console.log('FAILED...', err);
            });
        setFormInput({});
    }


    return (
        <div style={{ height: "700px" }}>
            <div className="ui grid container row" style={{ paddingTop: "50px" }}>
                <div className="ui twelve wide column">
                    <FormContainer>
                        <div style={{ padding: "30px" }}>
                            <ContactForm
                                handleInputChange={handleInputChange}
                                handleSubmit={handleSubmit} />
                        </div>
                    </FormContainer>
                </div>
                <div className="ui four wide column grid" style={{ paddingTop: "20px" }}>
                    <ConnectWithMe />
                </div>
            </div>
        </div>
    )
}
