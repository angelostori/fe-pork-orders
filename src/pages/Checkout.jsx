import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext"
import { useAuth } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function Checkout() {
    const { cart, total, checkout } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const [form, setForm] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        address: "",
        note: ""
    });

    const [success, setSuccess] = useState(false);

    // Inizializza il form con i dati dell'utente
    useEffect(() => {
        if (user) {
            setForm({
                name: user.name || "",
                surname: user.surname || "",
                email: user.email || "",
                phone: user.phone || "",
                address: user.address || "",
                note: ""
            });
        }
    }, [user]);

    if (!user) {
        return <Navigate to="/login" />;
    }

    if (cart.length === 0 && !success) {
        return <p>Carrello vuoto</p>;
    }

    const handleSubmit = async () => {

        if (!form.name || !form.surname || !form.email) {
            setError("Per favore, compila i campi obbligatori (nome, cognome ed email).");
            return;
        }

        setError("");

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

            {error && (
                <div className="alert alert-danger">
                    {error}
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
                            id="name"
                            className="form-control"
                            placeholder="Nome"
                            value={form.name}
                            disabled
                        />
                        <label
                            htmlFor="name"
                            className="text-muted"
                        >(obbligatorio)</label>
                    </div>

                    <div className="col-md-6">
                        <input
                            id="surname"
                            className="form-control"
                            placeholder="Cognome"
                            value={form.surname}
                            disabled
                        />
                        <label
                            htmlFor="surname"
                            className="text-muted"
                        >(obbligatorio)</label>
                    </div>

                    <div className="col-md-6">
                        <input
                            id="email"
                            className="form-control"
                            placeholder="Email"
                            type="email"
                            value={form.email}
                            disabled
                        />
                        <label
                            htmlFor="email"
                            className="text-muted"
                        >(obbligatorio)</label>
                    </div>

                    <div className="col-md-6">
                        <input
                            className="form-control"
                            placeholder="Telefono"
                            value={form.phone}
                            disabled
                        />
                    </div>

                    <div className="col-12">
                        <input
                            className="form-control"
                            placeholder="Indirizzo"
                            value={form.address}
                            disabled
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
                        <button className="btn btn-dark px-4" type="button" onClick={handleSubmit}>
                            Conferma ordine
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}