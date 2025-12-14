import { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";




function StatusComponent(){
    const [Status, setStatus] = useState(false)


   const handleToggle = () => {
      setStatus(!Status);
    };

  return(
    <>
      <button onClick={handleToggle}>STATUS</button>

      {Status ? <ComponentA/> : <ComponentB/>}
    </>
  );
}

export default StatusComponent;