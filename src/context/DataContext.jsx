import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const URL = import.meta.env.VITE_URL;

    useEffect(() => {
        fetch(`${URL}/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <DataContext.Provider value={{ products, loading }}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    return useContext(DataContext);
}