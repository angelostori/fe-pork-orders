import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {

    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    return (
        <>
            <div className="card zoom">
                <div className="card-header bg-dark text-light">{product.name}</div>
                <img src={product.image} alt={product.name} id="card-img" />
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline">
                        <p>€/kg {product.price}</p>

                        <button
                            className="input-group-text bg-dark text-white"
                            onClick={() => setQuantity(prev => Math.max(1, prev - 1))}>
                            <i className="bi bi-dash"></i>
                        </button>

                        <input
                            type="number"
                            className="form-control"
                            min={1}
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                            style={{ maxWidth: "65px" }} />

                        <button
                            className="input-group-text bg-dark text-white"
                            onClick={() => setQuantity(prev => prev + 1)}>
                            <i className="bi bi-plus"></i>
                        </button>

                        <button
                            className="btn btn-outline-dark me-2"
                            onClick={() => addToCart(product, quantity)}>
                            <i className="bi bi-cart"></i>
                        </button>

                        <Link to={`/products/${product.id}`} className="btn btn-outline-dark">Dettagli</Link>
                    </div>
                </div>
            </div>

        </>
    )
}