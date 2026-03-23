import ProductCard from "../components/ProductCard";
import { useData } from "../context/DataContext";
import { Quantum } from 'ldrs/react'
import 'ldrs/react/Quantum.css'

export default function Products() {

    const { products, loading } = useData();

    return (
        <>
            <h1 className="pb-5">Catalogo</h1>

            <div className="row g-4">
                {loading ? (
                    <Quantum
                        size="45"
                        speed="1.75"
                        color="black"
                    />
                ) : (
                    products.map(product => (
                        <div className="col-md-4" key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    ))
                )}
            </div>
        </>
    )
}