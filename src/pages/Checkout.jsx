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

    if (cart.length === 0) {
        return <p>Carrello vuoto</p>;
    }

    const handleSubmit = async () => {

        // validazione base
        if (!form.name || !form.email) {
            alert("Compila i campi obbligatori");
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

            <input
                className="me-2"
                placeholder="Nome"
                onChange={e => setForm({ ...form, name: e.target.value })}
            />

            <input
                className="me-2"
                placeholder="Cognome"
                onChange={e => setForm({ ...form, surname: e.target.value })}
            />

            <input
                className="me-2"
                placeholder="Email"
                onChange={e => setForm({ ...form, email: e.target.value })}
            />

            <input
                className="me-2"
                placeholder="Telefono"
                onChange={e => setForm({ ...form, phone: e.target.value })}
            />

            <input
                className="me-2"
                placeholder="Indirizzo"
                onChange={e => setForm({ ...form, address: e.target.value })}
            />

            <button className="btn btn-dark" onClick={handleSubmit}>
                Conferma ordine
            </button>
        </>
    )
}