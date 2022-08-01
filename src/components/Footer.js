export default function Footer({movie, selected, showTime}) {
    // console.log(showTime.day.weekday);
    //console.log(showTime.day.date);
    //console.log(movie)
    // console.log(movie.title)
    //console.log(selected);
    
    return (
        <div className="footer">
            <div className="frame">
                <img src={movie.posterURL} />
            </div>
            <div className="title">
                <p>{movie.title}</p>
                { selected ? (<p>{showTime.day.weekday} - {showTime.name}</p>) : '' }
            </div>
        </div>
    )
}