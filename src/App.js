import React, {useState} from 'react';
import './App.css';
import NameTag from './Components/NameTag';
import Input from './Components/input';
import AgeFunction from './hooks/useState';
import AddEvent from './Components/AddEvent';
import useList from './hooks/useList';
import RefUsage from './hooks/useRef'

const listStyle = {
  color : "red",
  border : "1px solid blue",
  padding : "15px"
}

const liEleStyle = {
  color : "blue"
}

// Complex state
const namesList = [
  {firstName : "jill", lastName:"jillson"},
  {firstName : "john", lastName:"johnson"},
  {firstName : "jim", lastName:"jimson"}
]

const foodCalories = [
  {item : "chocolate", calories : 500},
  {item : "cake", calories : 400},
  {item : "Apple", calories : 80}, 
  {item : "grape", calories : 50}
]


//higher order components

const MakeGreen = BaseComponent => props =>{

const greenColor = {
  style:{
    color : "green"
  }
}

const newProps = {
  ...props, ...greenColor
}

return <BaseComponent {...newProps}/>

}

const RemoveColor = BaseComponent => props =>{
  const newProps ={...props}
  delete newProps.style;
  return <BaseComponent {...newProps}/> 
}


const ChangeToGreen = MakeGreen(NameTag)
const ClearTag = RemoveColor(NameTag)



function App() {
  const items = useList(foodCalories)
  const [list, setList] = useState(namesList)
  const [editable, setEditable] = useState(false)

  const removeUnhealthy= (e) =>{
    items.removeList()
   }

   const deleteItem = (e) =>{
     items.deleteItemFromList(e.target.name)
   }

   const makeItEditable = () =>{
    setEditable(true)
   }

   const keyPressHandle = (e, i) => { 
   if(e.key === "Enter"){
    setEditable(!editable) 
    items.editItem(e.target.value, i)
    
   }
   }

  return ( 
    <div className="App">
      <header className="App-header">
        <h1 >Krishna Prasadh Payyavula</h1>
        <h3 style={listStyle}>Reshitha</h3>
        <h3 style={{...listStyle, ...liEleStyle}}>Rivansh</h3>
        <h3 className='name'>Skandhana</h3>
        <NameTag firstName="Reshitha" lastName="Pathi" style={{color:"yellow"}}></NameTag>
        <ClearTag firstName="Rivansh" lastName="Kilari" style={{color:"yellow"}}></ClearTag>
        <ChangeToGreen firstName="Skandhana" lastName="Pathi"></ChangeToGreen>
        <NameTag></NameTag>
        <Input placeholder="enter text here" type="text"></Input>
        <Input placeholder="enter text two here" type="number"></Input>

       {/* <NameTag firstName={list[0].firstName} lastName={list[0].lastName}></NameTag>
        <NameTag firstName={list[1].firstName} lastName={list[1].lastName}></NameTag>
        <NameTag firstName={list[2].firstName} lastName={list[2].lastName}></NameTag>
  */}
  {
    namesList.map((v,i) => {
      return <NameTag key = {`${i}${v.firstName}${v.lastName}`} firstName={v.firstName} lastName={v.lastName}></NameTag>
    })
  }
  {
    items.foodList.map((v, i) =>{
       return <AddEvent key={`${i} ${v.item} ${v.calories}`}
        item={v}
         onClick={deleteItem}
         editable={editable}
         onDoubleClick={makeItEditable}
         onKeyPress={keyPressHandle}
         index={i}></AddEvent>
    })
  }
  
  <button onClick={removeUnhealthy}>Remove Unhealthy</button>
        <AgeFunction></AgeFunction>
      </header>


      <RefUsage></RefUsage>
    </div>

    
  );
}

export default App;
