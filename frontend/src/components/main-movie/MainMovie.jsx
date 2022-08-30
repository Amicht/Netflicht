import { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { StoreCtxt } from '../../services/StoreService'
import MovieModal from '../MovieModal/MovieModal'
import  './MainMovie.css'

const MainMovie = ({movie}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { playMovie, getMovie } = useContext(StoreCtxt).actions;
    const onMoreInfoClick = () => { getMovie(movie._id); handleShow() }
  return (
    <div>
        <div className='d-flex'
        style={{
            backgroundImage: `url(${movie.img})` ,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width:'100%',
            height: '80vh'
        }}>
        <div className="pb-3 px-5 mx-3 align-self-center movie-info-container">
          <span className="fw-bold genre-title">{movie.type==="movie"?'סרט':'סדרה'}</span>
          <h1 className='main-movie-title' style={{fontSize:"60px"}}>{movie.name}</h1>
          
            <Button onClick={() => playMovie(movie._id)} variant="white" className="bg-white text-dark ms-4" >
              <i className="bi bi-play-fill text-dark">הפעל</i>
            </Button>
            <Button onClick={onMoreInfoClick} variant="dark">
                <i className="bi bi-info-circle"> מידע נוסף</i>
            </Button>
        </div>

        </div>
        <MovieModal show={show} handleClose={handleClose} handleShow={handleShow}/>
        <div className='dummy-linear-div1'></div>
    </div>
  )
}

export default MainMovie