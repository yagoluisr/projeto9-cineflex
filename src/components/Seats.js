export default function Seats() {
    return (
        <>
            <div className="seats">
                <div>1</div>
                <div className="selected">2</div>
                <div className="unavailable">3</div>

                <div>1</div>
                <div className="selected">2</div>
                <div className="unavailable">3</div>

                <div>1</div>
                <div className="selected">2</div>
                <div className="unavailable">3</div>
                <div>1</div>
                <div className="selected">2</div>
                <div className="unavailable">3</div>
                <div>1</div>
                <div className="selected">2</div>
                <div className="unavailable">3</div>
                <div>1</div>
                <div className="selected">2</div>
                <div className="unavailable">3</div>
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
                    <p>Selecionado</p>
                </div>     

            </div>

            <div className="input">
                <p>Nome do comprador: </p>
                <input type="text" name="nome" placeholder="Digite seu nome..."/><br />

                <br /><br />

                <p>CPF do comprador: </p>
                <input type="number" name="cpf" placeholder="Digite seu CPF..."/><br />
            </div>

            <div className="reserve">Reservar assento(s)</div>
        </>
    )
}