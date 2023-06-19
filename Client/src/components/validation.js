// import React from "react";



// export function validate(userData){

//     const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

//     let errors = {};
  
//     if (!regexEmail.test(userData.email)) {
//         errors.email = 'Debe ser un correo electrónico válido';
//       }
    
//       if (!userData.email) {
//         errors.email = 'El campo de correo electrónico no puede estar vacío';
//       }
    
//       if (userData.email.length > 35) {
//         errors.email = 'El correo electrónico no puede tener más de 35 caracteres';
//       }
    
//       if (!/\d/.test(userData.password)) {
//         errors.password = 'La contraseña debe contener al menos un número';
//       }
    
//       if (userData.password.length < 6 || userData.password.length > 10) {
//         errors.password = 'La contraseña debe tener una longitud entre 6 y 10 caracteres';
//       }
    
//       return errors;
//     }
    
    