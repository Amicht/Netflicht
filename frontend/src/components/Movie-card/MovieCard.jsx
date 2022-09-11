import './MovieCard.css';

const MovieCard = ({movie, handleCardClick}) => {
  
  const onCardClick = () => handleCardClick(movie._id);

  return (
    <div onClick={onCardClick} className="movie-card" >
      <img src={movie.img} className="movie-card-img" alt={movie.img} />
    </div>
  )
}

export default MovieCard