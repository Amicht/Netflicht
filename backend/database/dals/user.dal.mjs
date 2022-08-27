import UserModel from '../models/user.model.mjs';
import { ObjectId } from 'mongodb';


const getAllUsers = () => UserModel.find({});

const getUser = (userId) => UserModel.findById(userId);

const addMovieToWatchList = (userId, movieId) => {
    return UserModel.updateOne( { _id: userId },{ $push: { watchList: movieId } } )
}

const removeMovieFromWatchList = (userId, movieId) =>{
    return UserModel.updateOne( { _id: userId }, { $pull: { watchList: movieId } } )
}

const addUsers = users => UserModel.insertMany(users);

// getUser("630893cd2e0a6464a14c2596").then(res => console.log(res));

export {
    getAllUsers,
    getUser,
    addMovieToWatchList,
    addUsers,
    removeMovieFromWatchList,
}