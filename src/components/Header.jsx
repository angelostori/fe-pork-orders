import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
    const { cartCount } = useCart();

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container">
                <div className="nav navbar-nav d-flex justify-content-between w-100">
                    <div className="d-flex">
                        <Link className="nav-item nav-link active" to="/">
                            Home
                        </Link>
                        <Link className="nav-item nav-link" to="/products">Prodotti</Link>
                    </div>

                    <Link className="nav-item nav-link" to="/cart">
                        <i className="bi bi-cart4"></i>
                        {cartCount > 0 && (
                            <span className="badge text-bg-danger ms-2">{cartCount}</span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    )
}

