import React, { useState, useEffect } from "react";

const ContactForm = () => {

    const [values, setValue] = useState({});
    const handleInputChange = (e) => {
        var {name, value }
         = e.target;
        setValue({
            ...values,
            [name] : value
        })
    }
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        console.log(values)
    }
    return (
        <form autoComplete = "off" onSubmit = { handleFormSubmit }>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" name="fullName" placeholder="Full Name"
                values= {values.fullname}
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
                        values= {values.mobile}
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
                        values= {values.email}
                    />
                </div>
            </div>
            <div className="form-group">
               <input className="form-control" name="address" placeholder="Address"
                />
            </div>
            <div className="form-group">
                <input type="submit"  className="btn btn-primary btn-block" name="address"
                    onChange = { handleInputChange }
                    values= {values.address}
                />
                
            </div>
        </form>
    )
}

export default ContactForm;