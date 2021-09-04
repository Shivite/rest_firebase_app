import React, { useState,useEffect } from 'react';
import ContactForm from "./ContactForm";
import firebaseDb from "../config/Firebase";
const Contact = () => {
    const [ contactObjects, setContactObjects] = useState({});
    const [ editRecord, setEditRecord] = useState('');

    useEffect(()=>{
        firebaseDb.child('contact').on('value', function(snapshot) {
            if(snapshot.val()!== null){
                setContactObjects({ ...snapshot.val() })
            }
        })
    },[editRecord])

    const addOrEdit = (obj) => {
        if(editRecord == ''){
            firebaseDb.child('contact').push(
                obj,
                err => {
                    if(err) 
                        console.log(err)
                    else    
                        console.log("success")
                }
            )
        }else {
            firebaseDb.child(`contact/${editRecord}`).set(
                obj,
                err => {
                    if(err) 
                        console.log(err)
                    else    
                        console.log("success")
                }
            )
        }
    }

    const deleteRec = key => {
        firebaseDb.child(`contact/${key}`).remove(
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
                        {Object.keys(contactObjects).map(id => {
                            return <tr key={id}>
                                <td>{contactObjects[id].fullname}</td>
                                <td>{contactObjects[id].mobile}</td>
                                <td>{contactObjects[id].email}</td>
                                <td>
                                    <a className = "btn btn-primary"
                                    onClick = {() => setEditRecord(id)}
                                    > 
                                        Edit   
                                    </a>
                                    <a classname = "btn btn-primary"
                                    onClick = {() => deleteRec(id)}
                                    
                                    > 
                                        Del
                                    </a>
                                </td>
                            </tr>
                        })} 
                       
                    </thead>
                    <tbody>

                    </tbody>
                </table>
                </div>
                <div className="col-md-7">
                    <ContactForm {...({addOrEdit, editRecord, contactObjects})}/>
                </div>
            </div>
        </>
    )
}

export default Contact;