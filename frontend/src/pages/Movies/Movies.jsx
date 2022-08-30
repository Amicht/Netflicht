import { useContext, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Loading from '../../components/Loading/Loading';
import { StoreCtxt } from '../../services/StoreService';
import MovieScroller from '../../components/Movie-Scroller/MovieScroller';
import MainMovie from '../../components/main-movie/MainMovie';

const Movies = () => {
    const { movies, isLoading } = useContext(StoreCtxt).states;
    const { loggedGuard } = useContext(StoreCtxt).actions;
    const allMovies = movies.filter(m => m.type=== "movie")
    useEffect(() => {
      window.scrollTo(0,0);
      loggedGuard(false);
    },[]);
  return (
    <>
    {isLoading? <Loading /> :
    <div className='container'>
      <Header isHomePage={false}/>
      {allMovies[0]?<MainMovie movie={allMovies[3]} />:null}
      <MovieScroller movies={allMovies.filter(m => m.genre === "דרמה")} title="דרמה"/>
      <MovieScroller movies={allMovies.filter(m => m.genre === "פעולה")} title="פעולה"/>
      <MovieScroller movies={allMovies.filter(m => m.genre === "קומדיה")} title="קומדיה"/>
      <MovieScroller movies={allMovies.filter(m => m.genre === "רומנטי")} title="רומנטי"/>
      <MovieScroller movies={allMovies.filter(m => m.genre === "מתח")} title="מתח"/>
      <MovieScroller movies={allMovies.filter(m => m.genre === "אנימציה")} title="אנימציה"/>
    </div>}
    </>
  )
}

export default Movies