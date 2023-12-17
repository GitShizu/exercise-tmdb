export default ({ title, releaseYear, overview, poster, popularity }) => {
    return (
        <article className="card">
            <figure>
                <img src={`https://image.tmdb.org/t/p/w400${poster}`} alt={`${title} poster`} />
            </figure>
            <div className="title">
                <h3>{title}</h3>
            </div>
            <div className="info">
                <h5><span className="detail">Year:</span>{` ${releaseYear}`}</h5>
                <h5><span className="detail">Popularity:</span>{` ${popularity}`}</h5>
            </div>
            <p>{overview}</p>
        </article>
    )
}