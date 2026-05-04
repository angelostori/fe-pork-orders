import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import logo from '../assets/favicon.svg'

export default function Header() {
    const { cartCount } = useCart();
    const { user, clearAuthUser } = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {
        clearAuthUser();
        navigate("/");
    }

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container">
                <div className="nav navbar-nav d-flex justify-content-between w-100">
                    <div className="d-flex align-items-baseline">
                        <Link className="nav-item nav-link active" to="/">
                            <img src={logo} alt="Pork Orders Logo" style={{ height: "30px", margin: "0 0 3px" }} />
                            | HOME
                        </Link>
                        <Link className="nav-item nav-link" to="/products">
                            <i className="bi bi-bag pe-1 fs-5" style={{ color: "#e8809a" }}></i>
                            | PRODOTTI
                        </Link>
                        <Link className="nav-item nav-link" to="/cart">
                            <i className="bi bi-cart4 pe-1 fs-5" style={{ color: "#e8809a" }}></i>
                            | CARRELLO
                            {cartCount > 0 && (
                                <span className="badge text-bg-danger ms-2">{cartCount}</span>
                            )}
                        </Link>
                    </div>
                    <div>
                        {user ? (
                            <button
                                className="nav-item nav-link btn btn-link"
                                onClick={handleLogout}
                                style={{ textDecoration: "none" }}
                            >
                                <i className="bi bi-box-arrow-right pe-1 fs-5" style={{ color: "#e8809a" }}></i>
                                | LOGOUT
                            </button>
                        ) : (
                            <Link className="nav-item nav-link" to="/login">
                                <i className="bi bi-person pe-1 fs-5" style={{ color: "#e8809a" }}></i>
                                | LOGIN
                            </Link>
                        )}

                    </div>
                </div>
            </div>
        </nav >
    )
}

