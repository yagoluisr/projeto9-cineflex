import axios  from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Seat ({item}) {
    const [select, setSelect] = useState(false);
    
    return(
    <>
        {item.isAvailable ? 
            <div className={select ? "selected" : ""} onClick={() => setSelect(!select)} >
                {item.name}
            </div> :
            <div className="unavailable">
                {item.name}
            </div> }
    </>
         )
}


export default function Seats() {
    const [seats, setSeats] = useState([]);
    


    const { seatsId } = useParams();
    console.log(seatsId);

    useEffect( () => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${seatsId}/seats`);

        promise.then( res => {
            //console.log(res.data.seats);
            setSeats(res.data.seats)
        })
    }, [])


    return (
        <>
            <div className="seats">
                {seats.map((item, key) => {
                    //console.log(item.isAvailable)
                    return(
                   
                        <Seat item={item} key={key}/>
                  
                )} )}
            </div>

            {/* <div className="seats">
                <div>1</div>
                <div className="selected">2</div>
                <div className="unavailable">3</div>
            </div> */}

            <div className="status">
                <div className="status1">
                    <div className="select"></div>
                    <p>Selecionado</p>
                </div>        
                <div className="status1">
                    <div className="available"></div>
                    <p>Disponível</p>
                </div> 
                <div className="status1">
                    <div className="occupied"></div>
                    <p>Indisponível</p>
                </div>     

            </div>

            <div className="input">
                <p>Nome do comprador: </p>
                <input type="text" name="nome" placeholder="Digite seu nome..."/><br />

                <br /><br />

                <p>CPF do comprador: </p>
                <input type="number" name="cpf" placeholder="Digite seu CPF..."/><br />
            </div>

            <div className="reserve">Reservar assento(s)</div>
        </>
    )
}