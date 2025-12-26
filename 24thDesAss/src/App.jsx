
import { lazy, Suspense, useState } from 'react';
import './App.css'
const HeavyComponent = lazy(() => import("./HeavyComponent"));

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
       <h2>Counter: {count}</h2>

       <button onClick={() => setCount(count+1)}>
         Increment Counter
       </button>

       <Suspense fallback={<h3>Loading Heavy Component.....</h3>}>
           <HeavyComponent/>
       </Suspense>
    </>
  );
}

export default App;
