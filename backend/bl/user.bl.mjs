import { getAllUsers, getUser, addMovieToWatchList, removeMovieFromWatchList } from "../database/index.mjs";


const getAllUsersAsync = () => getAllUsers();
const getUserAsync = (userId) => getUser(userId);
const addToWatchListAsync = (userId, movieId) => addMovieToWatchList(userId, movieId);
const removeFromWatchListAsync = (userId, movieId) => removeMovieFromWatchList(userId, movieId);


export {
    getAllUsersAsync,
    getUserAsync,
    addToWatchListAsync,
    removeFromWatchListAsync
}