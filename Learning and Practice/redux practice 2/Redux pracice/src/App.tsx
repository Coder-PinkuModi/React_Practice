import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useAppDispatch, useAppSelector } from './app/hooks'
import './App.css'
import { incremented, amountAdded } from './features/counter/counter-slice'

function App() {
  const count= useAppSelector((state)=> state.counter.value)
  const dispatch=useAppDispatch();

  function handleClick(){
    dispatch(amountAdded(5));
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
