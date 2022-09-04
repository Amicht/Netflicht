import { useContext, useEffect } from "react";
import Header from "../../components/Header/Header"
import MovieScroller from "../../components/Movie-Scroller/MovieScroller";
import { StoreCtxt } from "../../services/StoreService";
import MainMovie  from '../../components/main-movie/MainMovie'

const Searies = () => {
  const { movies } = useContext(StoreCtxt).states;
  const allSearies = movies.filter(m => m.type=== "searies");
  const { loggedGuard } = useContext(StoreCtxt).actions;

  useEffect(() => {
    window.scrollTo(0,0);
    loggedGuard(false);
  },[]);
  
  return (
    <>
    <div className='container'>
      <Header isHomePage={false}/>
      {allSearies[0]?<MainMovie movie={allSearies[5]} />:null}
      <MovieScroller movies={allSearies.filter(m => m.genre === "אנימציה")} title="אנימציה"/>
      <MovieScroller movies={allSearies.filter(m => m.genre === "דרמה")} title="דרמה"/>
      <MovieScroller movies={allSearies.filter(m => m.genre === "פעולה")} title="פעולה"/>
      <MovieScroller movies={allSearies.filter(m => m.genre === "קומדיה")} title="קומדיה"/>
      <MovieScroller movies={allSearies.filter(m => m.genre === "מדע בדיוני")} title="מדע בדיוני"/>
    </div>
    </>
  )
}

export default Searies