import './MovieCard.css';

const MovieCard = ({movie, handleCardClick}) => {
  return (
    <div onClick={() => handleCardClick(movie._id)} className="movie-card" >
      <img src={movie.img} className=" movie-card-img" alt={movie.img} />
    </div>
  )
}

export default MovieCard