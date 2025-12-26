import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

function App() {
  const [count, setCount] = useState(0);

  const products = [
    { id: 1, name: "Apple", price: 100 },
    { id: 2, name: "Banana", price: 50 },
    { id: 3, name: "Orange", price: 80 },
  ];

  // useMemo → calculate total price only once
  const totalPrice = useMemo(() => {
    console.log("Total price calculated");
    return products.reduce((sum, item) => sum + item.price, 0);
  }, [products]);

  // useCallback → same function reference
  const selectProduct = useCallback((item) => {
    console.log("Selected:", item.name);
  }, []);

  return (
    <div>
      <h2>Total Price: ₹{totalPrice}</h2>

      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>

      <ProductList
        products={products}
        onSelect={selectProduct}
      />
    </div>
  );
}

export default App;
