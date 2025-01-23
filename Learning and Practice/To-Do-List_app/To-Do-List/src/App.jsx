// import {useState} from "react"
import Header from "./Components/Header.jsx"
import ElementTask from "./Components/ElementTask.jsx"

function App() {

  return (
    <div className="container">
      <Header />
      <div className="taskDisplay">
        <ElementTask />
      </div>
    </div>
  )
}

export default App
