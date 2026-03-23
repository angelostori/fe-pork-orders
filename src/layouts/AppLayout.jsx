import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AppLayout() {

    return (
        <div className="d-flex flex-column vh-100">

            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />

        </div>
    )
} 