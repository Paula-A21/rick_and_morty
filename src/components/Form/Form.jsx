import React from "react";
import { useState } from "react";
import validate from "./Validation";

export default function Form({login}) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
 
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  }

    const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({...userData, [property] : value});
    validate ({...userData, [property]: value }, setErrors, errors, property);   
}

return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Email</label>
            <input 
                type="text"
                name="email" 
                value = {userData.email}
                onChange={handleChange}
            />
            <span>{errors.email}</span>
        </div>
        <div>
            <label>Password</label>
            <input 
                type="text"
                name="password" 
                value = {userData.password}
                onChange={handleChange}
            />
            <span>{errors.password}</span>
        </div>
        <button>Submit</button>
    </form>
);

}