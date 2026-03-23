import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {

    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            fetch("http://127.0.0.1:8000/api/products").then(res => res.json()),
            fetch("http://127.0.0.1:8000/api/orders").then(res => res.json()),
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