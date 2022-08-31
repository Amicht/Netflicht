import React from 'react'
import CardButton from './CardButton'
import { StoreCtxt} from '../../services/StoreService'
import { useContext } from 'react'



const CardButtonGroup = ({setIsMoreInfo, isMoreInfo, movie, handleClose}) => {
  const { handleWatchList, playMovie } = useContext(StoreCtxt).actions;

  return (
    <div className='row bg-black mx-2'>
        <CardButton type="הפעל" 
          key={1}
          action={() => playMovie(movie._id)} 
          isActive={true} />

        <CardButton type="הוספה לרשימה" 
          key={2}
          action={handleWatchList} 
          isActive={movie.isInWatchList} />

        <div className='my-1 col-2'></div>
        <div className='my-1 col-2'></div>
        <div className='my-1 col-2'></div>

        <CardButton type="מידע נוסף" 
          key={4} 
          action={() => setIsMoreInfo(!isMoreInfo)} 
          isActive={!isMoreInfo} />
    </div>
  )
}

export default CardButtonGroup