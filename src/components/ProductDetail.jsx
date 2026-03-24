export default function ProductDetails({ product }) {

    return (
        <>
            <div className="card">
                <img src={product.image} id="card-img-dtls" className="card-img-top" alt={product.name} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <div className="d-flex justify-content-between">
                        <p><strong>Prezzo:</strong> €{product.price}</p>

                        <div className="d-flex justify-content-between">
                            <div class="input-group me-2">
                                <button className="input-group-text bg-dark text-white">
                                    <i className="bi bi-dash"></i>
                                </button>
                                <input
                                    type="number"
                                    className="form-control"
                                    min={1}
                                    value={1}
                                    style={{ maxWidth: "50px" }} />
                                <button className="input-group-text bg-dark text-white">
                                    <i className="bi bi-plus"></i>
                                </button>
                            </div>

                            <button className="btn btn-primary me-2">Aggiungi</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}