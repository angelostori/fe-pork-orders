export default function ProductCard({ product }) {

    return (
        <>
            <div className="card">
                <div className="card-header">{product.name}</div>
                <img src={product.image} alt={product.name} />
                <div className="card-body">
                    <p>{product.description}</p>
                    <p>€{product.price}</p>
                </div>
            </div>

        </>
    )
}