function validate(userData, setErrors, errors, property) {
 
if(property === "email"){  //chequeo cual es el evento que me pasaron para la validacion del error
    if (!userData.email) setErrors ({...errors, email: "Campo obligatorio"});
    else if(userData.email.length > 35)  setErrors ({...errors, email: "No puede superar los 35 caracteres"});
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)) setErrors({...errors, email: ""});
    else setErrors({...errors, email: "Email inválido"});
}
else{
    if(userData.password.length < 6 || userData.password.length > 10) setErrors({...errors, password: "Debe tener entre 6 y 10 caracteres"});
    else if(!/\d/.test(userData.password)) setErrors({...errors, password: "Debe contener al menos un número"});
    else setErrors({...errors, password: ""});
    }
}


export default validate;