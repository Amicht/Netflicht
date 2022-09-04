import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import MovieScroller from '../../components/Movie-Scroller/MovieScroller';
import { StoreCtxt } from '../../services/StoreService';
import { searchMovies } from './searchLogic';
import './search.css'
const Search = () => {
    const { movies } = useContext(StoreCtxt).states;
    const { loggedGuard } = useContext(StoreCtxt).actions;
    const [moviesSelected, setMoviesSelected ] = useState([]);
    const [searchWord, setSerachWord] = useState("");
    const onSearch = (e) => {
        const newWord = e.target.value
        console.log(newWord);
        setSerachWord(newWord)
        setSerachWord(newWord);
        setMoviesSelected(searchMovies(newWord, movies))
    }

  useEffect(() => {
    window.scrollTo(0,0);
    loggedGuard(false);
  },[]);
  return (
    <Container>
        <Header isHomePage={false}/>
        <div className='col-sm-6 text-center mx-auto my-5'>
            <div className="input-group mb-3 input-dir">
                <input onChange={onSearch} type="text" className="form-control bg-transparent text-white" />
                <span className="input-group-text bg-light">חפש סרט / סדרה לפי שם:</span>
            </div>
        </div>
        <div className='search-results-container'>
            {moviesSelected.length === 0 && !!searchWord? 
            <h2>לא נמצאו סרטים עבור: {searchWord}</h2>:
            <MovieScroller 
            title={!!searchWord? "תוצאות החיפוש עבור: " + searchWord: ""} 
            movies={moviesSelected} />}
        </div>
    </Container>
  )
}

export default Search