import { useData } from "../context/DataContext"
import { useCart } from "../context/CartContext"
import { Quantum } from 'ldrs/react'
import 'ldrs/react/Quantum.css'

export default function Cart() {

    const { loading } = useData();
    const { cart, total, cartCount, updateQuantity, removeFromCart } = useCart();


    return (
        <>
            <h1 className="pb-5">Carrello</h1>

            {
                loading ? (
                    <Quantum
                        size="45"
                        speed="1.75"
                        color="black"
                    />
                ) : (

                    <>
                        {cart.length === 0 ? (
                            <p>Carrello vuoto</p>
                        ) : (
                            <>
                                {cart.map(item => (
                                    <div key={item.id} className="d-flex justify-content-between align-items-center mb-3">

                                        <div>
                                            <h5>{item.name}</h5>
                                            <p>€{item.price}</p>
                                        </div>

                                        <div className="d-flex align-items-center">

                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                                -
                                            </button>

                                            <span className="mx-2">{item.quantity}</span>

                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                                +
                                            </button>

                                            <button
                                                className="btn btn-danger ms-3"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                Rimuovi
                                            </button>

                                        </div>

                                    </div>
                                ))}

                                <hr />

                                <h3>Totale: €{total}</h3>
                                <p>Prodotti totali: {cartCount}</p>

                                <button className="btn btn-dark">
                                    Vai al checkout
                                </button>
                            </>
                        )}
                    </>

                )}

        </>
    )
}