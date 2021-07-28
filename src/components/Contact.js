import react, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import firebaseDb from "../config/Firebase";
const Contact = () => {
    console.log(firebaseDb)
    const addOrEdit = (obj) => {
        
        firebaseDb.child('contact').push(
            obj,
            err => {
                if(err) 
                    console.log(err)
                else    
                    console.log("success")
            }
        )
    }
    return(
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Contact Manager</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                <table className="table table-borderless table-stripped">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
                </div>
                <div className="col-md-7">
                    <ContactForm addOrEdit = {addOrEdit}/>
                </div>
            </div>
        </>
    )
}

export default Contact;