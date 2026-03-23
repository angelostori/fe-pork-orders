export default function ProductDetails({ product }) {

    return (
        <>
            <div className="card">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text"><strong>Prezzo:</strong> €{product.price}</p>
                </div>
            </div>
        </>
    )
}