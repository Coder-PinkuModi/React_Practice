import './App.css'
import { useDispatch } from "react-redux"
import Counter from "./components/count"

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <Counter />
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
    </>
  )
}

export default App
