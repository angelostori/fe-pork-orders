import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductDetails({ product }) {

    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    return (
        <>
            <div className="card">
                <img src={product.image} id="card-img-dtls" className="card-img-top" alt={product.name} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <div className="d-flex justify-content-between">
                        <p><strong>Prezzo:</strong> €{product.price}</p>

                        <div className="d-flex justify-content-between">
                            <div className="input-group me-2">

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

                            </div>

                            <button
                                className="btn btn-outline-dark me-2"
                                onClick={() => addToCart(product, quantity)}>
                                <i className="bi bi-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}