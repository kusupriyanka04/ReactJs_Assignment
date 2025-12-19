import { useContext } from "react";
import { AppContext } from "../Context/AppContext";


function Component6(){

    const { e } = useContext(AppContext);
    return(
        <>
        <h3>Component6</h3>
        <h4>This is Prop e: {e}</h4>
        </>
    );
}


export default Component6;