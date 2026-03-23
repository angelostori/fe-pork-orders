export default function ProductCard({ product }) {

    return (
        <>
            <div className="card">
                <div className="card-header">{product.name}</div>
                <img src={product.image} alt={product.name} />
                <div className="card-body">
                    <p>{product.description}</p>
                    <div className="d-flex justify-content-between">
                        <p>€{product.price}</p>
                        <a href={`/products/${product.id}`} className="btn btn-primary">Dettagli</a>
                    </div>
                </div>
            </div>

        </>
    )
}