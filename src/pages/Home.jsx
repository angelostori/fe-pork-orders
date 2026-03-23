import { useData } from "../context/DataContext"
import { Quantum } from 'ldrs/react'
import 'ldrs/react/Quantum.css'

export default function Home() {

    const { loading } = useData();

    return (
        <div className="container">
            <h1>Welcome Page</h1>
            {loading ? (
                <Quantum
                    size="45"
                    speed="1.75"
                    color="black"
                />
            ) : (
                <p>Benvenuto nel nostro negozio di carne di maiale! Esplora il nostro catalogo per scoprire i nostri prodotti di alta qualità.</p>
            )}
            <a href="/products" className="btn btn-primary">Lista Prodotti</a>
        </div>
    )
}