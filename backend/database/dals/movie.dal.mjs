import MovieModel from "../models/movie.model.mjs";


const getAllMovies = () => MovieModel.find({});
const addMovies = movies => MovieModel.insertMany(movies);


export {
    getAllMovies,
    addMovies
}