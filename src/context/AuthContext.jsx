import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    // Carico l'utente dal localStorage all'avvio o al refresh dell'app
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Salvo utente
    const setAuthUser = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    }

    // Logout
    const clearAuthUser = () => {
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <AuthContext.Provider value={{ user, setAuthUser, clearAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}