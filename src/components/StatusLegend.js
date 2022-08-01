export default function StatusSeats() {
    return (
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
    )
}