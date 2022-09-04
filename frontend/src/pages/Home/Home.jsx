import { useEffect, useContext } from 'react'
import Header from '../../components/Header/Header'
import MainMovie from '../../components/main-movie/MainMovie'
import MovieScroller from '../../components/Movie-Scroller/MovieScroller'
import { StoreCtxt } from '../../services/StoreService'
import { getMainMovie, getPopularMovies, getRecommendedMovies } from './homeLogic'

const Home = () => {
  const { movies, user } = useContext(StoreCtxt).states;
  const { loggedGuard } = useContext(StoreCtxt).actions;
  const recommendedMovies = getRecommendedMovies(movies);
  const popularMovies = getPopularMovies(movies);
  const mainMovie = getMainMovie(movies);
  useEffect(() => {
    window.scrollTo(0,0);
    loggedGuard(true);
  },[]);
  
  return (
    <>
    <div className='container bg-black'>
      <Header isHomePage={true}/>
      <>{movies.length > 0? <>
      <MainMovie movie={mainMovie} />
      <MovieScroller movies={recommendedMovies} title={"המומלצים עבור " + user.name}/>
      <MovieScroller movies={popularMovies} title="הפופלריים כרגע"/>
      <MovieScroller movies={movies.filter(m => m.isInWatchList)} title="הרשימה שלי"/>
      </>:null}</>
    </div>
    </>
  )
}

export default Home