import { useEffect } from 'react'
import { useContext } from 'react'
import Header from '../../components/Header/Header'
import MainMovie from '../../components/main-movie/MainMovie'
import MovieScroller from '../../components/Movie-Scroller/MovieScroller'
import { StoreCtxt } from '../../services/StoreService'

const Home = () => {
  const { movies } = useContext(StoreCtxt).states;
  const { loggedGuard } = useContext(StoreCtxt).actions;

  useEffect(() => {
    window.scrollTo(0,0);
    loggedGuard(true);
  },[]);
  
  return (
    <>
    <div className='container bg-black'>
      <Header isHomePage={true}/>
      {movies[0]?<MainMovie movie={movies[68]} />:null}
      <MovieScroller movies={movies.filter(m => m.genre === "אנימציה")} title="אנימציה"/>
      <MovieScroller movies={movies.filter(m => m.genre === "דרמה")} title="דרמה"/>
      <MovieScroller movies={movies.filter(m => m.genre === "פעולה")} title="פעולה"/>
      <MovieScroller movies={movies.filter(m => m.genre === "קומדיה")} title="קומדיה"/>
    </div>
    </>
  )
}

export default Home