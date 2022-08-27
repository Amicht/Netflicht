import { addMovies } from "../database/dals/movie.dal.mjs";
import { addUsers } from "../database/dals/user.dal.mjs" 
import mongoose from 'mongoose';
import { seariesDb} from '../seariesDb.mjs';
import { movieDb } from './movieDB.mjs';
import { users } from '../usersDb.mjs'

const HOSTURL = 'mongodb://localhost:27017/'
const DATABASE = 'netflicht';

mongoose.connect(HOSTURL + DATABASE);

const users = [
    {
        name:"עמית",
        img: "/api/assets/images/profiles/1.png",
        watchList: []
    },
    {
        name:"טליה",
        img: "/api/assets/images/profiles/2.png",
        watchList: []
    },
    {
        name:"תומר",
        img: "/api/assets/images/profiles/3.png",
        watchList: []
    },
    {
        name:"אבא",
        img: "/api/assets/images/profiles/4.png",
        watchList: []
    },
    {
        name:"ילדים",
        img: "/api/assets/images/profiles/5.png",
        watchList: []
    }
]

const db = shuffle([...movieDb, ...seariesDb]);

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


// addMovies(db);
// addUsers(users).then(res => console.log(res));