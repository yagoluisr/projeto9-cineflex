import axios  from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "./Input";
import Footer from "./Footer";
import StatusSeats from "./StatusLegend";
import Seat from "./Seat";




export default function Seats() {
    let selected = true;

    const [seats, setSeats] = useState([]);
    const [movie, setMovie] = useState([]);
    const [showTime, setShowTime] = useState ([]);
    const [reserve, setReserve] = useState([]);
    const [reserveId, setReserveId] = useState([]);

    const { seatsId } = useParams();

    useEffect( () => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${seatsId}/seats`);

        promise.then( res => {
            setShowTime(res.data)
            setMovie(res.data.movie)
            setSeats(res.data.seats)
        })
    }, [])

    return (
        <>
            <div className="title-page">
                <p>Selecione o(s) assento(s)</p>
            </div>

            <div className="seats">
                {seats.map((item, key) => (
                        <Seat item={item} 
                            key={key} 
                            reserve={reserve} 
                            setReserve={setReserve}
                            reserveId={reserveId}
                            setReserveId={setReserveId}/>                
                            ) )}
            </div>

            <StatusSeats />

            <Input reserve={reserve} showTime={showTime} movie={movie} reserveId={reserveId}/>

            { movie.length !== 0 && showTime.length !== 0 ? 
            <Footer 
            movie={movie} 
            selected={selected} 
            showTime={showTime}/> : '' }
            
        </>
    )
}