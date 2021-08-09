import react, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import firebaseDb from "../config/Firebase";
const Contact = () => {
    console.log(firebaseDb)
    const [contactObjects, setContactObjects] = useState({});
    const [editRecord, setEditRecord] = useState("123");
    useEffect(()=>{
        firebaseDb.child('contact').on('value', snapshot => {
            if(snapshot.val() !== null){
                setContactObjects({ ...snapshot.val() })
            }
        })
    },[])
    const getRecordId = (id) => {
        
    }
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
                <div className="col-md-7">
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
                    {Object.keys(contactObjects).map( (id) =>   (
                        <tr key={id}>
                            <td>{contactObjects[id].fullName}</td>
                            <td>{contactObjects[id].mobile}</td>
                            <td>{contactObjects[id].email}</td>
                            <td>
                                <button className="btn btn-primary"
                                    onClick = { () => setEditRecord(id) }
                                >
                                    ED
                                </button>
                                <button className="btn btn-danger">
                                    DL
                                </button>
                            </td>
                        </tr>
                    ))}           
                    </tbody>
                </table>
                </div>
                <div className="col-md-5">
                    <ContactForm addOrEdit = {addOrEdit}/>
                </div>
            </div>
        </>
    )
}

export default Contact;