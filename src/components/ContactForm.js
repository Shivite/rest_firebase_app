import React, { useState, useEffect } from "react";

const ContactForm = (props) => {
    const initialValues = {
        fullname:'',
        email:'',
        mobile:'',
        address:''
    }
    const [values, setValue] = useState({});
    const handleInputChange = (e) => {
        var {name, value } = e.target;
        setValue({
            ...values,
            [name] : value
        })
    }
    useEffect (() => {
        if(props.editRecord == '')
            setValue({...initialValues})
        else
            setValue({...props.contactObjects[props.editRecord]})
        console.log(values)
    },[props.editRecord, props.contactObjects])
    
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        props.addOrEdit(values);
    }
    return (
        <form autoComplete = "off" onSubmit = { handleFormSubmit }>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" name="fullname" placeholder="Full Name"
                value= {values.fullname}
                onChange = { handleInputChange }
                />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>

                    <input className="form-control" name="mobile" placeholder="Mobile"
                        onChange = { handleInputChange }
                        value= {values.mobile}
                    />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <input className="form-control" name="email" placeholder="Email"
                        onChange = { handleInputChange }
                        value= {values.email}
                    />
                </div>
            </div>
            <div className="form-group">
               <input className="form-control" name="address" placeholder="Address"
                onChange = { handleInputChange }
                value= {values.address}
               />
            </div>
            <div className="form-group">
                <input type="submit"  value = {props.editRecord == '' ? 'Submit' : 'update' } className="btn btn-primary btn-block" />
            </div>
        </form>
    )
}

export default ContactForm;