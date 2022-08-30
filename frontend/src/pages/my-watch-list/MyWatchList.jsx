import { useContext, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Loading from '../../components/Loading/Loading';
import MovieScroller from '../../components/Movie-Scroller/MovieScroller'
import { StoreCtxt } from '../../services/StoreService'
import './my-watch-list.css';

const MyWatchList = () => {
  const { movies, isLoading } = useContext(StoreCtxt).states;
  const { loggedGuard } = useContext(StoreCtxt).actions;
  const myMovies = movies.filter(m => m.isInWatchList && m.type === "movie" );
  const mySearies = movies.filter(m => m.isInWatchList && m.type === "searies" );

  useEffect(() => {
    window.scrollTo(0,0);
    loggedGuard(false);
  },[]);
  return (
    <>
      {isLoading? <Loading />:
      <div className='container bg-black'>
        <Header isHomePage={false}/>
        <div className='my-watch-list'>
          {myMovies.length >0? 
            <MovieScroller title="הסרטים שלי" movies={myMovies} />: 
            <h5 className='my-5'>אין סרטים ברשימה</h5>
          }
          {mySearies.length >0? 
            <MovieScroller title="הסדרות שלי" movies={mySearies} />: 
            <h5 className='my-5'>אין סדרות ברשימה</h5>
          }
        </div>
      </div>}
    </>
  )
}

export default MyWatchList