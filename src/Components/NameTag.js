import React from "react"; 
import '../App.css'

function NameTag (props){
    if(!props.firstName && !props.lastName){
        return <div>
            <h3 style={{color:"red"}}>Invalid user</h3>
        </div>
    }
 return (
 <div>
     <h1 className="name" style={props.style}>{props.firstName}</h1>
     <h1 className="name">{props.lastName}</h1>
     {props.firstName === "Skandhana" && <div style={{color:"green"}}>VIP</div>}
     <p>{props.children}</p>
 </div>
 )}

export default NameTag;