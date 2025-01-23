import { useState } from "react"

function ObjectUseState() {
    // style for the div
    const style = {
        width: "300px",
        padding: "10px",
        margin: "10px",
        fontSize: "1.5rem",
        border:"1px solid grey"
    }

    // this is example object use state
    const [user, setUser] = useState({
        name: "John",
        age: 30,
        city: "New York"
    });
    return (    
        <div style={style}>
            <p>User- {user.name} of, age- {user.age} from {user.city} </p>   
            <input type="text" value={user.name} onChange={(event) => setUser(u=>({...u, name: event.target.value}))} />{/*using spread operator to update the object*/}
            <input type="Number" value={user.age} onChange={(event) => setUser(u=>({...u, age: event.target.value}))} />{/*We should make seperate function for onChange but this had done for the sake of time.*/}
            <input type="text" value={user.city} onChange={(event) => setUser(u=>({...u, city: event.target.value}))} />
        </div>
    )
}

export default ObjectUseState