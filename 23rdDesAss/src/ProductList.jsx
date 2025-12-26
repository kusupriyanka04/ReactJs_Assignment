function ProductList({ products, onSelect }) {
  console.log("ProductList rendered");

  return (
    <div>
      <h3>Products</h3>

      {products.map((item) => (
        <div key={item.id}>
          {item.name} - ₹{item.price}
          <button onClick={() => onSelect(item)}>
            Select
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
