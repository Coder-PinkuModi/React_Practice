import { useContext } from "react";
import ComponentC from "./ComponentC.jsx"
import {NameContext} from "./UseContextSecondExample.jsx"


function ComponentB() {
    const name = useContext(NameContext);

    return (
        <div className="containerUseEffect">
          <p>Have a good time {name}</p>
          <ComponentC />
        </div>
      );
}

export default ComponentB