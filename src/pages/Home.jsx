import { useData } from "../context/DataContext"
import { Quantum } from 'ldrs/react'
import 'ldrs/react/Quantum.css'
import logo from '../assets/logo.svg'

export default function Home() {

    const { loading } = useData();

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
                    <p>Ordina in pochi clic, ricevi senza pensieri. PorkOrders rende lo shopping semplice, veloce e affidabile.</p>
                </div>
            )}
            <a href="/products" className="btn btn-dark">Lista Prodotti</a>
        </>
    )
}