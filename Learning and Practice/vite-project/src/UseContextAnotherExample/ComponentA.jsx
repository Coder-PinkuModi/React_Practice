import { useContext } from "react";
import ComponentB from "./ComponentB.jsx"
import {NameContext} from "./UseContextSecondExample.jsx"


function ComponentA() {
    const name = useContext(NameContext);

    return (
        <div className="containerUseEffect">
          <p>Hello {name}</p>
          <ComponentB />
        </div>
      );
}

export default ComponentA