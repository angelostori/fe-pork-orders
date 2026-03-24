import { Link } from "react-router-dom";

export default function Header() {

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container">
                <div className="nav navbar-nav d-flex justify-content-between w-100">
                    <div className="d-flex">
                        <Link className="nav-item nav-link active" to="/">
                            Home
                        </Link>
                        <Link className="nav-item nav-link" to="/products">Prodotti</Link>
                        <Link className="nav-item nav-link" to="/orders">Ordini</Link>
                    </div>

                    <Link className="nav-item nav-link" to="/cart">
                        <i className="bi bi-cart4"></i>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

