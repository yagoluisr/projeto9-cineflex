import { useLocation } from "react-router-dom"

export default function Sucess() {
    const location = useLocation();
    console.log(location);

    return (
        <>
            <div className="info">
                <span>Filme e sessão</span>
                <p>{location.state.title}</p>  
                <p>{location.state.day.date} {location.state.showTime}</p>
                
            </div>

            <div className="info">
                <span>Ingressos</span>
                {location.state.ids.map( (id, key) => (
                    <p key={key}>Assento {id}</p>
                ))}
                
            </div>

            <div className="info">
                <span>Comprador</span>
                <p>{location.state.name}</p>
                <p>{location.state.cpf}</p>
            </div>

            <div className="home">Voltar pra Home</div>
        </>
    )
}