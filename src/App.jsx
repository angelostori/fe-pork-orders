import { useEffect, useState } from "react";

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      <div>
        <h1>Prodotti</h1>

        {products.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price} €</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
