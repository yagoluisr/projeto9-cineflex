import { useParams } from "react-router-dom"
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./Footer";

export default function Sessions() {
    const { movieId } = useParams();
    //console.log(movieId);

    const [weekday, setWeekday] = useState([]);

    useEffect( () => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`)
        promise.then(res => {
            setWeekday(res.data.days)
        })

    }, [])

    return (
        <>
            { weekday.map((item, key) => (
                <div className="sessions" key={key}>
                    <p>{item.weekday} - {item.date} </p>
                    <div className="schedules">
                        
                        {item.showtimes.map((timer, key) => (
                            <div className="timer" key={key}>{timer.name}</div>
                        ))}
                        
                    </div>
                </div>
            )) }

            {/* <Footer weekday={weekday}/> */}
        </>
    )
}