import { createContext, useContext, useState } from "react";
import ComponentA from "./ComponentA.jsx"


const NameContext = createContext("Guest")

function BoxUseContextExample() {

    const [name, setName] = useState("Guest");

    function handleNameChange() {
        const newName = document.getElementById("NameInput").value
        setName(newName)
        document.getElementById("NameInput").value = ""
    }
    const currentName = name;

    return (
    <div >
        <NameContext.Provider value={name}>
            <div>
                <input type="text" placeholder="input a name to show it" id="NameInput" />
                <button onClick={handleNameChange}>Click me</button>
            </div>
        <div className="containerUseEffect">

            <p> Welcome {`${currentName}`}</p>
            <ComponentA />
        </div>
        </NameContext.Provider>
    </div>
    )
}

export { NameContext }
export default BoxUseContextExample