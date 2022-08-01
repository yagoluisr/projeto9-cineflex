import { useLocation, useNavigate } from "react-router-dom"

export default function Sucess() {
    const { state } = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <div className="title-sucess">
                <p>Pedido feito com sucesso!</p>
            </div>

            <div className="info">
                <span>Filme e sessão</span>
                <p>{ state.title }</p>  
                <p>{ state.day.date } { state.showTime }</p>
            </div>

            <div className="info">
                <span>Ingressos</span>
                { state.ids.map( (id, key) => (
                    <p key={key}>Assento {id}</p>
                ))}                
            </div>

            <div className="info">
                <span>Comprador</span>
                <p>{ state.name }</p>
                <p>{ state.cpf }</p>
            </div>

            <div className="home" onClick={ () => navigate("/") }>Voltar pra Home</div>
        </>
    )
}