import { getAllMovies } from "../database/index.mjs";


const mapMovies = (movies,watchList) => {
    return movies.map(m => {
        m._doc.isInWatchList = false;
        watchList.forEach(lm => m.id === lm? m._doc.isInWatchList = true: null)
        return m._doc;
    });
}

const getMoviesAsync = (watchList) => getAllMovies()
    .then(async movies => mapMovies(movies, watchList));


export { getMoviesAsync }