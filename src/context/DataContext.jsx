import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {

    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const URL = import.meta.env.VITE_URL;

    useEffect(() => {
        Promise.all([
            fetch(`${URL}/products`).then(res => res.json()),
            fetch(`${URL}/orders`).then(res => res.json()),
        ])
            .then(([productsData, ordersData]) => {
                setProducts(productsData);
                setOrders(ordersData);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <DataContext.Provider value={{ products, orders, loading }}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    return useContext(DataContext);
}