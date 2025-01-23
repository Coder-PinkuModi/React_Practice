import { useState, useEffect, useRef, useCallback } from "react"


function App() {
  const [password, setPassword] = useState("")
  const [number, setisNumber] = useState(false)
  const [special, setisSpecial] = useState(false)
  const [length, setLength] = useState(8);
  const inputRef=useRef(null)

  const randomSelection = () => { return Math.floor(Math.random() * 3) }

  const passwordGenerator=useCallback((length, number, special)=> {
    const str = "ABCDEFGIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const numberStr = "0123456789"
    const specialStr = "@$#_&~"
    let pass = "";

    if (!number && !special) {
      for (let i = 0; i < length; i++) {
        let current = Math.floor(Math.random() * 26)
        pass += str[current]
      }
    }
    else if (number && !special) {
      for (let i = 0; i < length; i++) {
        let selection = randomSelection()
        if (selection == 0) {
          let current = Math.floor(Math.random() * 26)
          pass += str[current]
        }
        else if (selection == 1) {
          let current = Math.floor(Math.random() * 10)
          pass += numberStr[current]
        }
        else i = i - 1;
      }
    }

    else if (special && !number) {
      for (let i = 0; i < length; i++) {
        let selection = randomSelection()
        if (selection == 0) {
          let current = Math.floor(Math.random() * 26)
          pass += str[current]
        }
        else if (selection == 1) i = i - 1;
        else {
          let current = Math.floor(Math.random() * 5)
          pass += specialStr[current]
        }
      }
    }
    else {
      // Generate alphabetic + numeric + special characters
      for (let i = 0; i < length; i++) {
        let selection = Math.floor(Math.random() * 3);
        if (selection === 0) {
          let current = Math.floor(Math.random() * str.length);
          pass += str[current];
        } else if (selection === 1) {
          let current = Math.floor(Math.random() * numberStr.length);
          pass += numberStr[current];
        } else {
          let current = Math.floor(Math.random() * specialStr.length);
          pass += specialStr[current];
        }
      }
    }

    return pass;
  },[])

  function copyClipboard(){
    navigator.clipboard.writeText(password)
    inputRef.current.select()
  }

  useEffect(() => {
    setPassword(passwordGenerator(length, number, special));
  }, [length, number, special])

  return (
    <div className="h-screen w-screen flex bg-gray-700 items-center justify-center flex-col font-mono">
      <div className="inputAndCopy min-h-min min-w-min px-6 py-4">
        <input className="w-96 h-11 rounded-lg" type="text" readOnly value={password} ref={inputRef} />
        <button className="bg-blue-600 text-white px-2 py-2.5 rounded-sm text-base" type="button" onClick={()=>copyClipboard()}>copy</button>
      </div>

      <div className="inputInfo flex gap-2">
        <div className="flex justify-center items-center gap-1">
          <input type="range" min={6} max={30} value={length} onChange={(e) => setLength(e.target.value)} />
          <label className="text-white">Range</label>
        </div>

        <div className="flex justify-center items-center gap-1">
          <input type="checkbox" id="Number" value={number} onClick={() => (setisNumber(!number))} />
          <label htmlFor="Number" className="text-white">Number</label>
        </div>

        <div className="flex justify-center items-center gap-1">
          <input type="checkbox" id="special" value={special} onClick={() => (setisSpecial(!special))} />
          <label htmlFor="special" className="text-white">Special characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
