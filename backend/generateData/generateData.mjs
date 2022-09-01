import { addMovies } from "../database/dals/movie.dal.mjs";
import { addUsers } from "../database/dals/user.dal.mjs" 
import mongoose from 'mongoose';
import { seariesDb} from '../seariesDb.mjs';
import { movieDb } from './movieDB.mjs';
import { users } from '../usersDb.mjs'

const HOSTURL = 'mongodb://localhost:27017/'
const DATABASE = 'netflicht';

mongoose.connect(HOSTURL + DATABASE);


// const db = [...movieDb, ...seariesDb];
// addMovies(db);
// addUsers(users).then(res => console.log(res));