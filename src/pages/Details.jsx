import { useData } from "../context/DataContext"
import { Quantum } from 'ldrs/react'
import 'ldrs/react/Quantum.css'
import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";

export default function Details() {

    const { loading, products } = useData();

    const { id } = useParams();

    const product = products.find(prod => prod.id === parseInt(id));

    return (
        <>
            <h1 className="pb-5">Dettagli</h1>

            {
                loading ? (
                    <Quantum
                        size="45"
                        speed="1.75"
                        color="black"
                    />
                ) : (
                    <ProductDetail product={product} />
                )
            }
        </>
    )
}