import React from 'react';
import FormContainer from "./FormContainer"; 
import ContactForm from "./ContactForm";
import ConnectWithMe from "./ConnectWithMe";


export default function Contact() {


    return (
        <div style = {{height : "700px"}}>
        <div class = "ui grid container row" style = {{paddingTop : "50px"}}>
            <div class="ui twelve wide column">
                <FormContainer>
                    <div style = {{padding : "30px"}}>
                        <ContactForm />
                    </div>
                </FormContainer>
            </div>
            <div class="ui four wide column grid" style = {{paddingTop : "20px"}}>    
                <ConnectWithMe />
            </div>
        </div>
        </div>
    )
}
