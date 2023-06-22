import React from "react";
import { useState } from "react";
import validate from "./Validation";
import style from "./Form.module.css";

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
    <body className={style.background}>
      <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.divcontainer}>
              <label className={style.label}>Email</label>
              <input 
                type="text"
                name="email" 
                value = {userData.email}
                onChange={handleChange}
                className={style.inputcontainer}
              />
              <span>{errors.email}</span>
          </div>
          <div className={style.divcontainer}>
              <label className={style.label}>Password</label>
              <input 
                  type="text"
                  name="password" 
                  value = {userData.password}
                  onChange={handleChange}
                  className={style.inputcontainer}
              />
              <span>{errors.password}</span>
          </div>
        <button className={style.button}>Submit</button>
         
      </form>
  </body>
);

}