import react, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import firebaseDb from "../config/Firebase";
const Contact = () => {
    return(
        <>
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-4">Contact Manager</h1>
                </div>
            </div>
            <div className="row">
                <div className="row">
                    <div className="col-md-5">
                        contact form
                    </div>
                    <div className="col-md-7">
                        contact list
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;