

export const searchMovies = (searchWord, movies) =>{
    return movies.filter(m => (m.name).search(searchWord) !== -1);
}