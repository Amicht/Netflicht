import { addMovies } from "../database/dals/movie.dal.mjs";
import { addUsers } from "../database/dals/user.dal.mjs" 
import mongoose from 'mongoose';
import { seariesDb} from '../seariesDb.mjs';
import { movieDb } from './movieDB.mjs';
import { users } from '../usersDb.mjs'

const HOSTURL = 'mongodb://localhost:27017/'
const DATABASE = 'netflicht';

mongoose.connect(HOSTURL + DATABASE);


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

// const db = shuffle([...movieDb, ...seariesDb]);
// addMovies(db);
// addUsers(users).then(res => console.log(res));