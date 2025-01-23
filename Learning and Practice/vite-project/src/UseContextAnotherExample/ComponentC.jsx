import { useContext } from "react";
import {NameContext} from "./UseContextSecondExample.jsx"


function ComponentC() {
    const name = useContext(NameContext);

    return (
        <div className="containerUseEffect">
          <p>Bye {name}</p>
        </div>
      );
}

export default ComponentC