import { useData } from "../context/DataContext"
import { Quantum } from 'ldrs/react'
import 'ldrs/react/Quantum.css'

export default function Cart() {

    const { loading, orders } = useData();
    console.log(orders);


    return (
        <>
            <h1 className="pb-5">Carrello</h1>

            {
                loading ? (
                    <Quantum
                        size="45"
                        speed="1.75"
                        color="black"
                    />
                ) : (

                    <>
                        <h3>Lista ordine</h3>
                        <p>Clicca il checkout e compila il form cliente</p>
                    </>

                )}

        </>
    )
}