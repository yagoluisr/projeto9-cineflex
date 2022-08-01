import  axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Input({showTime, movie ,reserve, reserveId}) {   
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");

    const info = {
        title: movie.title,
        day: showTime.day,
        showTime: showTime.name,
        ids:reserve,
        name ,
        cpf
    }


    function HandleForm(event) {
        event.preventDefault();
    
        const body = {
            ids:reserveId,
            name,
            cpf 
        }
    
        const promise = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", body);

        promise.then(res => {
            console.log(res.data);
        })
        navigate('/sucesso', { state: info } );
        
    }

    return (
            <form onSubmit={HandleForm}>
                <div className="input">
                    <p>Nome do comprador: </p>
                    <input type="text" name="nome" value={name} onChange={e => setName(e.target.value)} placeholder="Digite seu nome..." required /><br />

                    <br /><br />

                    <p>CPF do comprador: </p>
                    <input type="number" name="cpf" value={cpf} onChange={e => setCpf(e.target.value)} placeholder="Digite seu CPF..." required /><br />
                </div>

                <button type="submit">Reservar assento(s)</button>

            </form>
    )

}