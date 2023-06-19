import React from "react";
import { useState } from "react";
import style from "./form.module.css";


export function validate(userData){

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    let errors = {};
  
    if (!regexEmail.test(userData.email)) {
        errors.email = 'Debe ser un correo electrónico válido';
      }
    
      if (!userData.email) {
        errors.email = 'El campo de correo electrónico no puede estar vacío';
      }
    
      if (userData.email.length > 35) {
        errors.email = 'El correo electrónico no puede tener más de 35 caracteres';
      }
    
      if (!/\d/.test(userData.password)) {
        errors.password = 'La contraseña debe contener al menos un número';
      }
    
      if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = 'La contraseña debe tener una longitud entre 6 y 10 caracteres';
      }
    
      return errors;
    }
    

export function Form(props){
    
    const {login} = props;

    const [userData, setUserData] = useState({
        email: "",
        password:"",
    });

    const [errors, setErrors] = useState({});

    function handleSubmit(event){
      event.preventDefault();
      login(userData);
    };


    function handleChange(event){
      setUserData({
        ...userData,
        [event.target.name]: event.target.value
      });
      setErrors(
            validate({
            ...userData,
            [event.target.name]: event.target.value
          }));
    }
    
    return(
        <div>
            <form className={style.container} onSubmit={handleSubmit}>
                <label className={style.title}>Email</label>
                <input 
                  name="email" 
                  placeholder={"Escribe tu email"} 
                  type="text" 
                  value={userData.email} 
                  onChange={handleChange}/>
                  <p className='danger'>{errors.email}</p>  
                <label className={style.title}>Password</label>
                <input  
                  name="password" 
                  placeholder={"Password"} 
                  type="password" 
                  value={userData.password} 
                  onChange={handleChange}/>
                  <p className='danger'>{errors.message}</p>    
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}


export default Form;
