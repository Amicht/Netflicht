

export const searchMovies = (searchWord, movies) =>{
    return movies.filter(m => (m.name).search(searchWord) !== -1);
}

export const setTitle = (moviesSelected, searchWord) => {
    if(moviesSelected.length === 0 && !!searchWord){
        return `לא נמצאו תוצאות עבור: ${searchWord}`;
    }
    else if(!!searchWord){
        return `תוצאות החיפוש עבור: ${searchWord}`;
    }
    else return 'כל הסרטים:';
}