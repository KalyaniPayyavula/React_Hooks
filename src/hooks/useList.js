import React, {useState} from 'react'

function useList(init){
    const [foodList, setFoodList] = useState(init)
    return{
        foodList,
        removeList(){
            console.log("fffff", )
            let unhealthyList = foodList.filter((e) => e.calories < 100)
            setFoodList(unhealthyList)
        },
        deleteItemFromList(value){
            let filteredList = foodList.filter((ele) => ele.item !== value)
            setFoodList(filteredList)
   },
   editItem(value, index){
    const copyList = [...foodList]
    copyList[index].item = value
   }
    }
}

export default useList;