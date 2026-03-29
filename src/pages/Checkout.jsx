import { useState } from "react";
import { useCart } from "../context/CartContext"

export default function Checkout() {
    const { cart, total, checkout } = useCart();

    const [form, setForm] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        address: ""
    });

    const [success, setSuccess] = useState(false);

    if (cart.length === 0 && !success) {
        return <p>Carrello vuoto</p>;
    }

    const handleSubmit = async () => {

        // validazione base
        if (!form.name || !form.surname) {
            <div className="alert alert-danger">
                Per favore, compila i campi obbligatori (nome e cognome).
            </div>
            return;
        }

        const result = await checkout(form);

        if (result) {
            setSuccess(true);
        }
    };

    return (
        <>
            <div className="d-flex align-items-baseline">
                <h1 className="pb-5">Checkout</h1>
                <span className="fst-italic text-muted ms-2">
                    (Questa è la pagina di checkout. Qui potrai inserire i tuoi dati e completare l'acquisto.)
                </span>
            </div>

            {success && (
                <div className="alert alert-success">
                    Ordine completato con successo!
                </div>
            )}

            <h2>Riepilogo ordine</h2>

            {cart.map(item => (
                <div key={item.id}>
                    <p>{item.name} x {item.quantity} - €{item.price}</p>
                </div>
            ))}

            <h3>Totale: €{total}</h3>

            <hr className="my-5" />

            <h3 className="mb-3">Dati personali</h3>

            <div className="container mt-4">

                <div className="row g-3">

                    <div className="col-md-6">
                        <input
                            className="form-control"
                            placeholder="Nome"
                            onChange={e => setForm({ ...form, name: e.target.value })}
                        />
                    </div>

                    <div className="col-md-6">
                        <input
                            className="form-control"
                            placeholder="Cognome"
                            onChange={e => setForm({ ...form, surname: e.target.value })}
                        />
                    </div>

                    <div className="col-md-6">
                        <input
                            className="form-control"
                            placeholder="Email"
                            type="email"
                            onChange={e => setForm({ ...form, email: e.target.value })}
                        />
                    </div>

                    <div className="col-md-6">
                        <input
                            className="form-control"
                            placeholder="Telefono"
                            onChange={e => setForm({ ...form, phone: e.target.value })}
                        />
                    </div>

                    <div className="col-12">
                        <input
                            className="form-control"
                            placeholder="Indirizzo"
                            onChange={e => setForm({ ...form, address: e.target.value })}
                        />
                    </div>

                    <div className="col-12">
                        <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Note (facoltative)"
                            onChange={e => setForm({ ...form, note: e.target.value })}
                        />
                    </div>

                    <div className="col-12 text-end">
                        <button className="btn btn-dark px-4" onClick={handleSubmit}>
                            Conferma ordine
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}