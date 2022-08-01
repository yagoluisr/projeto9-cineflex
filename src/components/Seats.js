import axios  from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "./Input";
import Footer from "./Footer";


function Seat ({item, reserve, setReserve}) {
    const [select, setSelect] = useState(false);

    function Check (){
        
        if(select === true){
            for(let i = 0; i < reserve.length; i++){
               if(reserve[i] === item.name){
                    reserve.splice(i, 1)
               } 
            }
            console.log(reserve);
        } else {
            setReserve([...reserve, item.name])
        }  
    }
    
    return(
    <>
        {item.isAvailable ? 
            <div className={select ? "selected" : ""}
            onClick={() => {
                setSelect(!select)
                Check() 
                }} >
                {item.name}
            </div> :
            <div className="unavailable" onClick={() => alert("Esse assento não está disponível")} >
                {item.name}
            </div> }
    </>
         )
}


export default function Seats() {
    let selected = true;

    const [seats, setSeats] = useState([]);
    const [movie, setMovie] = useState([]);
    const [showTime, setShowTime] = useState ([]);
    const [reserve, setReserve] = useState([]);

    const { seatsId } = useParams();
    //console.log(seatsId);

    useEffect( () => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${seatsId}/seats`);

        promise.then( res => {
            console.log(res.data);
            setShowTime(res.data)
            setMovie(res.data.movie)
            setSeats(res.data.seats)
        })
    }, [])

    //console.log(showTime);
    return (
        <>
            <div className="seats">
                {seats.map((item, key) => {
                    //console.log(item.isAvailable)
                    return(
                        <Seat item={item} key={key} reserve={reserve} setReserve={setReserve}/>                
                )} )}
            </div>

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

            <Input reserve={reserve} showTime={showTime} movie={movie}/>

            { movie.length !== 0 && showTime.length !== 0 ? <Footer movie={movie} selected={selected} showTime={showTime}/> : '' }
            
        </>
    )
}