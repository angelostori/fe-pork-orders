import { Link } from "react-router-dom";

export default function Header() {

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container">
                <div className="nav navbar-nav">
                    <Link className="nav-item nav-link active" to="/">
                        Home
                    </Link>
                    <Link className="nav-item nav-link" to="/products">Prodotti</Link>
                    <Link className="nav-item nav-link" to="/orders">Ordini</Link>
                </div>
            </div>
        </nav>
    )
}

