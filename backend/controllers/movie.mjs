import { getMoviesAsync } from '../bl/movie.bl.mjs';
import { getUserAsync } from '../bl/user.bl.mjs';
import { Router} from 'express';
import { ErrorModel } from '../models/error.model.mjs';
import { authUser } from '../middleware/auth.mjs';

const movieCtrl = Router()

movieCtrl.get('/', authUser , async (req,res,next) => {
    try{
        const userId = req.body.user._id;
        const movies = await getUserAsync(userId)
        .then(user => getMoviesAsync(user.watchList) ).catch(() => null);
        if(!movies) throw new ErrorModel(500,"unable to get movies - server error")
        res.send(movies);
    }
    catch(err){ next(err) }
})

export { movieCtrl }