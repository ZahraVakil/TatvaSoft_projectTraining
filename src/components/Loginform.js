import { useState } from "react";
import React from 'react'


function Loginform() {

//Day 7
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const handleNameChange = (event) => {
    setFormData({
       ...formData,
       name: event.target.value,
    });
  };

  const handleEmailChange = (event) => {
    setFormData({
        ...formData,
        email: event.target.value,
    });
  };

  const handlePassChange = (event) => {
    setFormData({
        ...formData,
        pass: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
        //alert(`$(formData.name) $(email) $(pass)`);
        alert(`Name: ${formData.name}\nEmail: ${formData.email}\nPassword: ${formData.pass}`);
  };

  return (
    <form onSubmit={handleSubmit}>
    <div>
    <h2>Resgistration form</h2>
    
    <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleNameChange}
        />
    </label>
    <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleEmailChange}
        />
    </label>
    <label>
        Password:
        <input
          type="Password"
          name="pass"
          value={formData.pass}
          onChange={handlePassChange}
        />
    </label>
     <button type="submit">Submit</button>
    </div>
    </form>
  )
}
  
export default Loginform
