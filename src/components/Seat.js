import { useState } from "react";

export default function Seat({item, reserve, setReserve, reserveId, setReserveId}) {
    const [select, setSelect] = useState(false);
    
            function Check (){
                if(select === true){
                    for(let i = 0; i < reserve.length; i++){
                    if(reserve[i] === item.name){
                            reserve.splice(i, 1)
                            reserveId.splice(i, 1)                
                    }
                    }
                } else {
                    setReserve([...reserve, item.name])
                    setReserveId([...reserveId, item.id])
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