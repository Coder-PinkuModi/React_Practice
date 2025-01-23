import { useState } from "react";

function FruitArrayUseState() {
    
    const [fruits, setFruits] = useState(["Apple", "Orange", "Grapes", "Banana"])

    const handleAddFruit=()=>{
        const fruit = document.getElementById("fruitText").value
        setFruits(f=>([...f,fruit]))
        document.getElementById("fruitText").value="";
    }

    const handleRemoveFruit=(index)=>{
        setFruits(fruits.filter((_,i)=>i!==index)); {/*_ is the item and i is the index, _ is the convention given for any item in array if it is not used*/}
    }

    return (
        <div className="container">
            <h1>Array Use State</h1>

            <ul>
                {fruits.map((fruit,index)=>(
                      <li key={index} onClick={() => handleRemoveFruit(index)}>{fruit}</li>))}
            </ul>
            <input type="text" placeholder="Enter Fruit Name" id="fruitText" />
            <button onClick={handleAddFruit}>Add</button>
        </div>
    )
}

export default FruitArrayUseState