import { useContext } from "react";
import Component5 from "./Component5";
import { AppContext } from "../Context/AppContext";


function Component4(){

    const { c, d } = useContext(AppContext);
    return(
        <>
        <h3>Component3</h3>
        <h4>This is Prop c: {c}</h4>
        <h4>This is Prop d: {d}</h4>
        <Component5/>
        </>
    );
}


export default Component4;