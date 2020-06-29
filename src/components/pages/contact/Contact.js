import React from 'react';
import FormContainer from "../../utils/FormContainer"; 
import ContactForm from "./ContactForm";
import ConnectWithMe from "./ConnectWithMe";


export default function Contact() {


    return (
        <div>
        <div class = "ui grid container row" style = {{paddingTop : "30px"}}>
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
