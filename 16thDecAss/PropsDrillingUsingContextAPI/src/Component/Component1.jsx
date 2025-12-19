import { AppContext } from "../Context/AppContext";
import Component2 from "./Component2";


function Component1 (){

    const contextValues = {
        a: "Value A",
        b: "Value B",
        c: "Value C",
        d: "Value D",
        e: "Value E",
        f: "Value F"
    };

    return(
        <AppContext.Provider value={contextValues}>
            <h3>Component 1 (Context Provider)</h3>
            <Component2/>
        </AppContext.Provider>
    );
}

export default Component1;