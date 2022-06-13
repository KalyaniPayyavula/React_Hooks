import React, {useRef, useEffect} from "react";

function RefUsage(){
    const nameRef = useRef()
    const ageRef = useRef()
    const maritalStatusRef = useRef()
    const submitRef = useRef()

    useEffect(()=>{
     nameRef.current.focus()
    },[])

    function submitHandle(){
        alert("Form has been submitted")
    }

    function clickHandle(e){
        if(e.keyCode === 13){
            if(e.target.id === "nameId"){
                ageRef.current.focus()
            }
            if(e.target.id === "ageId"){
                maritalStatusRef.current.focus()
            }
            if(e.target.id === "marriageId"){
                maritalStatusRef.current.focus()
            }
        }
    }
    return(  
   <form>
       <div>
           <span>Name</span>
           <input type="text"  id="nameId" ref={nameRef} onKeyDown={clickHandle}></input>
       </div>
       <div>
           <span>Age</span>
           <input type="text"  id="ageId" ref={ageRef} onKeyDown={clickHandle}></input>
       </div>
       <div>
           <span>Marital Status</span>
           <input type="checkbox"  id="marriageId" ref={maritalStatusRef} onKeyDown={clickHandle}></input>
       </div>
       <button type="submit" id="submitId" ref={submitRef} onKeyDown={submitHandle}>Submit</button>
   </form>
    )}

    export default RefUsage;