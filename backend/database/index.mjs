import { addMovies, getAllMovies } from "./dals/movie.dal.mjs" 
import { addMovieToWatchList, getUser, addUsers, getAllUsers, removeMovieFromWatchList } from "./dals/user.dal.mjs" 
import mongoose from 'mongoose';


const HOSTURL = 'mongodb://localhost:27017/'
const DATABASE = 'netflicht';

mongoose.connect(HOSTURL + DATABASE);


export {
    addMovieToWatchList,
    removeMovieFromWatchList,
    getAllUsers,
    getUser,
    getAllMovies,
}

