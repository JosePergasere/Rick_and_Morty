const validation = (userData,errorsState) => {
    const errors = {...errorsState};
    //username
    if (!userData.username){
        errors.username = "Este campo no puede estar vacio";
    } else if (userData.username.length > 35){
        errors.username = "El mail no puede tener mas de 35 caracteres";
    } 
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.username)){
        errors.username = "El mail es invalido";
    } else{
        errors.username = "";
    }

    //password
    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = "La contraseña debe contener entre 6 y 10 caracteres";
    } else if (!userData.password.match(/\d/)) {
       errors.password = "La contraseña debe contener al menos un numero";
    } else {
        errors.password = "";
    }
    
    return errors;
};

export default validation;
