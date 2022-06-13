import React, {useState} from "react"



function AgeFunction(){
    const [age, setAge] = useState(21)

    const ageUpFunction = () =>{
        setAge(age + 1)
    }

    const ageDownFunction = () =>{
        setAge(age - 1)
    }
    return( <div>
        <h1>Age : {age}</h1>
        <button onClick={ageUpFunction}>Age Up</button>
        <button onClick={ageDownFunction}>Age Down</button>
    </div>
    )}

export default AgeFunction;