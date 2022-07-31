import  axios from "axios"
import { useState } from "react"




export default function Input({movie, reserve}) {

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    //console.log(name , cpf)

    function HandleForm(event) {
        event.preventDefault();
    
        const body = {
            ids:reserve,
            name: "Louis Luiz Lut",
            cpf: "12345678912"
        }
    
        console.log(body);

        const promise = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", body);

        promise.then(res => {
            console.log(res.data);
        })

    }

    return (
            <form onSubmit={HandleForm}>
                <div className="input">
                    <p>Nome do comprador: </p>
                    <input type="text" name="nome" value={name} onChange={e => setName(e.target.value)} placeholder="Digite seu nome..." /><br />

                    <br /><br />

                    <p>CPF do comprador: </p>
                    <input type="number" name="cpf" value={cpf} onChange={e => setCpf(e.target.value)} placeholder="Digite seu CPF..." /><br />
                </div>

                <button className="reserve" type="submit">Reservar assento(s)</button>

                {/* <div className="reserve">Reservar assento(s)</div> */}
            </form>
    )

}