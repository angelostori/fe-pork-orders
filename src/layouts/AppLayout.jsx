import { Outlet } from "react-router-dom";

export default function AppLayout() {

    return (
        <>
            <header>

            </header>
            <main>
                <Outlet />
            </main>
            <footer class="bg-dark text-light py-4 mt-auto">
                <div class="container">
                    <p class="text-center"> © {new Date().getFullYear()} Pork Orders. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
} 