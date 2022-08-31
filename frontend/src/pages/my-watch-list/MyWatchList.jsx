import { useContext, useEffect } from 'react'
import Header from '../../components/Header/Header'
import MovieScroller from '../../components/Movie-Scroller/MovieScroller'
import { StoreCtxt } from '../../services/StoreService'
import './my-watch-list.css';

const MyWatchList = () => {
  const { movies } = useContext(StoreCtxt).states;
  const { loggedGuard } = useContext(StoreCtxt).actions;
  const myMovies = movies.filter(m => m.isInWatchList && m.type === "movie" );
  const mySearies = movies.filter(m => m.isInWatchList && m.type === "searies" );

  useEffect(() => {
    window.scrollTo(0,0);
    loggedGuard(false);
  },[]);
  return (
    <>
      <div className='container bg-black'>
        <Header isHomePage={false}/>
        <h2 className='text-end px-2 pt-3'>הרשימה שלי</h2>
        <div className='my-watch-list'>
          {myMovies.length >0? 
            <MovieScroller title="הסרטים שלי" movies={myMovies} />: null
          }
          {mySearies.length >0? 
            <MovieScroller title="הסדרות שלי" movies={mySearies} />: null
          }
        </div>
      </div>
    </>
  )
}

export default MyWatchList