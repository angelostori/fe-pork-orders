export default function Login() {

    const login = async (email, password) => {

        const res = await fetch("http://127.0.0.1:8000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        if (!res.ok) {
            console.log("Login fallito");
            return false;
        }

        const data = await res.json();

        console.log("Utente:", data.client);

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const success = await login(email, password);

        if (success) {
            alert("Login riuscito");
        } else {
            alert("Credenziali errate");
        }
    };

    return (
        <>

            <div className="p-5 my-5 bg-light rounded shadow-sm">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            required
                        />                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-dark">Login</button>
                </form>
            </div >

        </>
    )
}