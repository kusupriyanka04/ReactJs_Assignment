import { useState } from "react";



function ColorToggle(){
    const [isRed, setIsRed] = useState(true);

    const toggleColor = () => {
        setIsRed(!isRed);
    };

    return(
        <>
           <div style = {{
            width: "200px",
            height: "100px",
            backgroundColor: isRed? "red" : "blue",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "10px"
           }}
           >
            Color Toggle Box
           </div>
           <button onClick={toggleColor}>Toggle Color</button>
        </>
    );

}

export default ColorToggle;