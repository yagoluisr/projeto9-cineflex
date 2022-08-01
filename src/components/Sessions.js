import { Link, useParams } from "react-router-dom"
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./Footer";


export default function Sessions() {
    const { movieId } = useParams();

    const [weekday, setWeekday] = useState([]);
    const [movie, setMovie] = useState([]);
 
    let selected = false;

    useEffect( () => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieId}/showtimes`)
        promise.then(res => {
            setMovie(res.data)
            setWeekday(res.data.days)
        })
                
    }, [])

    return (
        <>
            <div className="title-page">
                <p>Selecione o horário</p>
            </div>

            <div className="showTimes">
                {weekday.map((item, key) => (
                    <div className="sessions" key={key}>
                        <p>{item.weekday} - {item.date} </p>
                        
                        <div className="schedules">    
                            {item.showtimes.map((timer, key) => (

                                <Link to={`/assentos/${timer.id}`}>
                                    <div className="timer" key={key}> {timer.name} </div>
                                </Link>
                            ))}      
                        </div>

                    </div>
                )) }
            </div>

            <Footer movie={movie} selected={selected} />
        </>
    )
}