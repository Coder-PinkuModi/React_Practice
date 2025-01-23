import { useState } from "react"
function App() {
  const [color, setColor] = useState("olive")

  function colorChange(colors) {
    setColor(colors)
  }
  return (
    <div>
      <div className="w-screen h-screen absolute duration-700" style={{ backgroundColor: color }}></div>
      <div className="fixed flex flex-wrap justify-center gap-1 min-w-min rounded-xl px-3 py-2 bottom-4 align-middle content-center left-1/3 right-1/3" style={{ border: "1px solid black", backgroundColor: "#fff"}}>
        <button className="color px-3 py-1 rounded-lg" style={{ border: "1px solid white", backgroundColor: "violet" }} onClick={() => { colorChange("violet") }} >Violet</button>
        <button className="color px-3 py-1 rounded-lg" style={{ border: "1px solid white", backgroundColor: "indigo"}} onClick={() => { colorChange("indigo") }} >Indigo</button>
        <button className="color px-3 py-1 rounded-lg" style={{ border: "1px solid white", backgroundColor: "blue"}} onClick={() => { colorChange("blue") }} >Blue</button>
        <button className="color px-3 py-1 rounded-lg" style={{ border: "1px solid white", backgroundColor: "green"}} onClick={() => { colorChange("green") }} >Green</button>
        <button className="color px-3 py-1 rounded-lg" style={{ border: "1px solid white", backgroundColor: "yellow"}} onClick={() => { colorChange("yellow") }} >Yellow</button>
        <button className="color px-3 py-1 rounded-lg" style={{ border: "1px solid white", backgroundColor: "orange"}} onClick={() => { colorChange("orange") }} >Orange</button>
        <button className="color px-3 py-1 rounded-lg" style={{ border: "1px solid white", backgroundColor: "red"}} onClick={() => { colorChange("red") }} >Red</button>
        <button className="color px-3 py-1 rounded-lg" style={{ border: "1px solid white", backgroundColor: "olive"}} onClick={() => { colorChange("olive") }} >Olive</button>
        <button className="color px-3 py-1 rounded-lg" style={{ border: "1px solid white", backgroundColor: "lavender"}} onClick={() => { colorChange("lavender") }} >Lavender</button>
      </div>
    </div>
  )
}

export default App
