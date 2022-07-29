import { Link, useParams } from "react-router-dom"
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./Footer";


export default function Sessions() {
    const { movieId } = useParams();
    //console.log(movieId);

    const [weekday, setWeekday] = useState([]);
    const [movie, setMovie] = useState([]);
    const [selected, setSelected] = useState(false)
    console.log(selected);

    useEffect( () => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieId}/showtimes`)
        promise.then(res => {
            // console.log(res)
             console.log(res.data)
            // console.log(res.data.days)
            // console.log(res.data.title)
            setMovie(res.data)
            setWeekday(res.data.days)
        })
                
    }, [])

    return (
        <>
            {weekday.map((item, key) => (
                <div className="sessions" key={key}>
                    <p>{item.weekday} - {item.date} </p>
                    <div className="schedules">
                        
                        {item.showtimes.map((timer, key) => (
                            <Link to={`/seats/${timer.id}`}>
                                <div className="timer" key={key}
                                onClick = {() => setSelected(true)}>
                                    {timer.name}
                                </div>
                            </Link>
                        ))}
                        
                    </div>
                </div>
            )) }

            <Footer movie={movie} selected={selected}/>
        </>
    )
}