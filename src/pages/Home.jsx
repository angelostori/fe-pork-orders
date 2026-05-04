import { useData } from "../context/DataContext"
import { Quantum } from 'ldrs/react'
import 'ldrs/react/Quantum.css'
import logo from '../assets/logo.svg'
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {

    const { loading } = useData();
    const { user } = useAuth();

    return (
        <>
            {loading ? (
                <Quantum
                    size="45"
                    speed="1.75"
                    color="black"
                />
            ) : (
                <div className="p-5 my-5 bg-light rounded shadow-sm">
                    <img src={logo} alt="Pork Orders Logo" />
                    {user && <h1>Benvenuto {user.name}!</h1>}
                    <p>Ordina in pochi clic, ricevi senza pensieri. PorkOrders rende lo shopping semplice, veloce e affidabile.</p>
                </div>
            )}
            <Link to="/products" className="btn btn-dark">Lista Prodotti</Link>
        </>
    )
}