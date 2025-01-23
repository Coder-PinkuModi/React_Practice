import { useState } from "react"
import Delete from "../assets/Delete.png"


function ElementTask() {

    const [Element, setElement] = useState(["Meditation", "Walk", "3 ltrs of water"]);


    const handlingRemovingTask = (index) => {
        setElement(Element.filter((_, i) => i !== index))
    }

    function handleAddingElement(){
        const task = document.getElementById("ToDo").value
        if(task == "") return document.getElementById("ToDo").focus()
        setElement(e=>([...e, task]))
        return document.getElementById("ToDo").value=""
    }

    return (
        <div className="bodyApp">
            <ul>
                {Element.map((elem, index) => (
                    <li key={index}>
                        <div className="element">
                            <div className="leftSideofElement">
                                <input type="checkbox" />
                                <p>{elem}</p>
                            </div>
                            <img src={Delete} onClick={() => handlingRemovingTask(index)} alt="delte" />
                        </div>
                    </li>
                ))}
            </ul>
            <div className="addToDo">
                <input type="text" name="ToDo" className="textTodo" placeholder="Add Task" id="ToDo" />
                <div className="buttonAddToDo">
                    <button onClick={handleAddingElement}>Add Task</button>
                </div>
            </div>
        </div>
    )
}

export default ElementTask