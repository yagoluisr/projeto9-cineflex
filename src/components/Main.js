import axios from "axios";
import { React } from "react"
import { useState, useEffect } from "react";

export default function Main() {

    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then(res => {
            console.log(res.data)
            setMovies(res.data)
        }); 

    }, [])    
    

    return (
        <>
            {movies.map(item => (
                <div className="main">
                    <div className="poster">
                        <img src={item.posterURL}/>
                    </div>
                </div>
            ))}
        </>
    )
}