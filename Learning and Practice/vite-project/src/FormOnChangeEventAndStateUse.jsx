// there is an event(onChange) listener that works with form with simulations -- we use it in various ways.
//onChange Event- triggers whenever there is a change in the particular element signed for

// use sgtate is a hook, there are several hooks in jsx to use we will see one of them here
import React, { useState } from "react"

const styleForm={
    display : "flex",
    gap : "20px",
}

function FormComponenet() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")
    const [option,selectOption] = useState("MasterCard")
    const [radio,selectRadio] = useState("")

    const handleNumberCount = (event) => {
        setCount(event.target.value);
    }

    const handleTexdctChange=(event)=>{
        setText(event.target.value)
    }

    const handleOptionPayment=(event)=>{
        selectOption(event.target.value)
    }

    const handleRadiotypeOrder=(event)=>{
        selectRadio(event.target.value)
    }

    return(
    <div>
        <form style={styleForm}>
        <input type="number" value={count} onChange={handleNumberCount} />
        <p>Current Count: {count}</p>

        <input type="text" value={text} onChange={handleTexdctChange} />
        <p>Entered Text: {text}</p>

        <select value={option} onChange={handleOptionPayment} >
            <option value="visa" >Visa</option>
            <option value="MasterCard" default>MasterCard</option>
            <option value="GiftCard">GiftCard</option>
        </select>
        <p>Payment: {option}</p>

        <label>
        <input type="radio" 
               value="Pick Up"
               checked={radio==="Pick Up"}
               onChange={handleRadiotypeOrder}>
        
        </input>
        </label>


        <label>
        <input type="radio" 
               value="Delivery"
               checked={radio==="Delivery"}
               onChange={handleRadiotypeOrder}
               >
               
        
        </input>
        </label>
        <p>Order Type: {radio}</p>
        </form>
    </div>
    )
}

export default FormComponenet