import { Link } from "react-router-dom";

export default function ProductCard({ product }) {

    return (
        <>
            <div className="card">
                <div className="card-header bg-dark text-light">{product.name}</div>
                <img src={product.image} alt={product.name} id="card-img" />
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline">
                        <p>€{product.price}</p>
                        <Link to={`/products/${product.id}`} className="btn btn-outline-dark">Dettagli</Link>
                    </div>
                </div>
            </div>

        </>
    )
}