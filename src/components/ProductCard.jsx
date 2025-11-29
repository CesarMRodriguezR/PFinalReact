import '../css/ProductCard.css'

function ProductCard() {
    
    return(
        <div className="product-card">
            <div className="product-image">
                  <img src={movie.url} alt={movie.title} />
            </div>

        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
    );
}

export default MovieCard;