import React from "react";

//Destructuring props
function Input({placeholder, type}){
    return <input placeholder={placeholder} type={type}></input>
}

export default Input;