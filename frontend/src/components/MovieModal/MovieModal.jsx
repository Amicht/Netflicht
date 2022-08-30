import { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { StoreCtxt } from '../../services/StoreService';
import CardButton from '../cards-buttons/CardButton';
import CardButtonGroup from '../cards-buttons/CardButtonGroup';
import { checkIfNew, getMovieLengthTitle, limitInfo } from './modalLogic';
import './movieModal.css'


const MovieModal = ({ handleClose, show}) => {
    const [isMoreInfo, setIsMoreInfo] = useState(true);
    const {currentMovie} = useContext(StoreCtxt).states;
    const closeModal = () => { setIsMoreInfo(true); handleClose() }
  return (
    <>
      <Modal
        size="sm"
        show={show} 
        centered
        onHide={closeModal}>
        <div className='bg-black movie-modal' 
          style={{
            backgroundImage: `url(${currentMovie.img})` ,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width:'100%'
            }}>
          <div className='close-modal-btn'>
            <CardButton action={() => handleClose()} isActive={false} type={'סגור'} key={6}/>
          </div>
          <h4 className='movie-type text-end px-3'>{currentMovie.type === 'movie'? 'סרט': 'סדרה'}</h4>
          <h3 className=' movie-title text-end px-3'>
          {currentMovie.name}
          </h3>
          <div className='trasform-bg '></div>
          
          <div className='pb-3 bg-black container'>
            <div className='bg-black py-3'>
            <CardButtonGroup 
                movie={currentMovie}
                setIsMoreInfo={setIsMoreInfo} 
                isMoreInfo={isMoreInfo}/>
          </div>
            <div className='movie-stats text-end fw-bolder mb-2'>
              <span>{checkIfNew(currentMovie.year)|| " "} </span>
              <span> { currentMovie.year}</span>  | 
              <span> { currentMovie.length + getMovieLengthTitle(currentMovie.type)}</span>

            </div>
            <p className='text-end movie-description'>
              {limitInfo(currentMovie.description, isMoreInfo)}
            </p>
            
          </div>
        </div>
      </Modal>
    </>
  );
}



export default MovieModal