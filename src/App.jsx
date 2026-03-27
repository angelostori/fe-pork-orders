import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Details from "./pages/Details"
import { DataProvider } from "./context/DataContext"
import { CartProvider } from "./context/CartContext"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"

function App() {

  return (
    <CartProvider>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<Details />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </CartProvider>
  )
}

export default App
