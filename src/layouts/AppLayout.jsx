import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function AppLayout() {

    return (
        <div className="d-flex flex-column vh-100">
            <header>

            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
} 