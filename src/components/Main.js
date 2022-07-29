import axios from "axios";
import { React } from "react"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Main() {

    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

        promise.then(res => {
            console.log(res.data)
            setMovies(res.data)
        }); 

    }, [])    
    

    return (
        <div className="main">
            {movies.map((item, key) => (
                <div className="poster">
                    <Link to={`/Sessions/${key+1}`}>
                        <img src={item.posterURL}/>
                    </Link>
                </div>
            ))}
        </div>
    )
}