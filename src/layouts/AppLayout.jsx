import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AppLayout() {

    return (
        <div className="d-flex flex-column min-vh-100">

            <Header />

            <main>
                <div className="container py-4">
                    <Outlet />
                </div>
            </main>

            <Footer />

        </div>
    )
} 