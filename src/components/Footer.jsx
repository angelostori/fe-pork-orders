export default function Footer() {

    return (
        <footer className="bg-dark text-light py-4 mt-auto">
            <div className="container">
                <p className="text-center"> © {new Date().getFullYear()} Pork Orders. All rights reserved.</p>
            </div>
        </footer>
    )
}