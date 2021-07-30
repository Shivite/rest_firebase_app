import react, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import firebaseDb from "../config/Firebase";
const Contact = () => {
    console.log(firebaseDb)
    const [contactObjects, setContactObjects] = useState({});
    useEffect(()=>{
        firebaseDb.child('contact').on('value', snapshot => {
            if(snapshot.val() !== null){
                setContactObjects({ ...snapshot.val() })
            }
        })
    },[])

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
                            <th>Actions buttons</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Object.keys(contactObjects).map(key =>   (
                        <tr key={key}>
                            <td>{contactObjects[key].fullName}</td>
                            <td>{contactObjects[key].mobile}</td>
                            <td>{contactObjects[key].email}</td>
                        </tr>
                    ))}           
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