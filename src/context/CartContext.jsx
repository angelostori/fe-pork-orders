import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    const URL = import.meta.env.VITE_URL;

    function addToCart(product, quantity) {
        setCart(prev => {

            const existing = prev.find(item => item.id === product.id);

            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prev, { ...product, quantity }];
        });
    }

    function removeFromCart(productId) {
        setCart(prev => prev.filter(item => item.id !== productId));
    };

    function updateQuantity(productId, quantity) {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        setCart(prev =>
            prev.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => setCart([]);


    let total = 0;
    let cartCount = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        cartCount += item.quantity;
    });

    const checkout = async (formData) => {

        const products = {};
        cart.forEach(item => {
            products[item.id] = item.quantity;
        });

        const response = await fetch(`${URL}/orders`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...formData,
                products
            }),
        });

        if (response.ok) {
            clearCart();
            return true;
        }
        return false;
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            checkout,
            total,
            cartCount
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
