const getPopularMovies = movies => {
    const popularMovies = [];
    for(let i = 0; i<10; i++){
        const idx = Math.floor(Math.random() * (movies.length -1));
        popularMovies.push(movies[idx]);
    }
    return popularMovies;
}

const getRecommendedMovies = movies => {
    const recommendedMovies = [];
    for(let i = 0; i<10; i++){
        const idx = Math.floor(Math.random() * (movies.length -1));
        recommendedMovies.push(movies[idx]);
    }
    return recommendedMovies;
}

const getMainMovie = movies => {
    const idx = Math.floor(Math.random() * (movies.length -1));
    return movies[idx];
}

export {
    getPopularMovies,
    getRecommendedMovies,
    getMainMovie
}