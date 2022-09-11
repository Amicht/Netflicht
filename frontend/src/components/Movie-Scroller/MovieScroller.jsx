import { useContext } from "react";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { StoreCtxt } from "../../services/StoreService";
import MovieCard from "../Movie-card/MovieCard"
import MovieModal from "../MovieModal/MovieModal";
import { splitMoviesTo4th } from "./MovieScrollerLogic";


const MovieScroller = ({movies, title}) => {
  const [windowWidth, setWindowWith] = useState(window.innerWidth);
  const {getMovie} = useContext(StoreCtxt).actions;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCardClick = (movieId) => { getMovie(movieId); handleShow(); }

  useEffect(()=>{
    window.addEventListener('resize',() => setWindowWith(window.innerWidth));
    return () => window.removeEventListener('resize', () => setWindowWith(window.innerWidth));
  })


  return (
    <>
    {movies.length > 0?<div className="my-1 py-1 scroller text-end">
    <h5 className="text-end mx-5 my-5">{title}</h5>
    <Carousel className="movie-caro my-3">
        {splitMoviesTo4th(movies, windowWidth).map((g,i)=> 
        <Carousel.Item className="caro-slide" interval={300000} key={i}>
          <div className="d-flex">
            <div className="col"></div>
            <div className="col-sm d-flex">
              {g.map((m,i) => <MovieCard 
                  key={i} 
                  movie={m} 
                  handleCardClick={handleCardClick}/>)}
            </div>
            <div className="col"></div>
          </div>
        </Carousel.Item>)}
      </Carousel>
      <MovieModal show={show} handleClose={handleClose} handleShow={handleShow}/>
    </div>:null}
    </>
  )
}

export default MovieScroller