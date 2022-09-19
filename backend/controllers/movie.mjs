import { getMoviesAsync } from '../bl/movie.bl.mjs';
import { getUserAsync } from '../bl/user.bl.mjs';
import { Router} from 'express';
import { ErrorModel } from '../models/error.model.mjs';
import { authUser } from '../middleware/auth.mjs';

const movieCtrl = Router()

movieCtrl.get('/', authUser , async (req,res,next) => {
    try{
        const userId = req.body.user._id;
        const user = await getUserAsync(userId);
        const movies = await getMoviesAsync(user.watchList);
        if(!movies) throw new ErrorModel(404,"movies not found");
        res.send(movies);
    }
    catch(err){ next(err) }
})

export { movieCtrl }
