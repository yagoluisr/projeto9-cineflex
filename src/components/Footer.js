export default function Footer({movie, selected}) {
    // console.log(movie)
    // console.log(movie.title)
    //console.log(selected);
    
    return (
        <div className="footer">
            <div className="frame">
                <img src={movie.posterURL} />
            </div>
            <div className="tittle">
                <p>{movie.title}</p>
                { selected ? (<p>Quinta-feira - 15:00</p>) : '' }
            </div>
        </div>
    )
}