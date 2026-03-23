import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <>
            <div className="container py-4">
                <h1 className="pb-5">Catalogo</h1>

                <div className="row g-4">
                    {products.map(product => (
                        <div className="col-md-4" key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}