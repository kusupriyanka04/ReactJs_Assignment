import { useContext } from "react";
import Component6 from "./Component6";
import { AppContext } from "../Context/AppContext";


function Component5(){

    const { f } = useContext(AppContext);
    return(
        <>
        <h3>Component5</h3>
        <h4>This is Prop f: {f}</h4>
        <Component6/>
        </>
    );
}


export default Component5;