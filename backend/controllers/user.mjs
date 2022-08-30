import {Router} from 'express';
import { ErrorModel } from '../models/error.model.mjs';
import { getAllUsersAsync, getUserAsync, addToWatchListAsync, removeFromWatchListAsync } from '../bl/user.bl.mjs';
import { authUser } from '../middleware/auth.mjs'
import { getNewToken } from '../helpers/jwt-helper.mjs';

const userCtrl = Router();

userCtrl.get('/',async (req,res,next)=>{
    try{
        const users = await getAllUsersAsync().catch(() => null);
        if(!users) throw new ErrorModel(500, "server error");
        res.send(users);
    }
    catch(err){next(err)}
});

userCtrl.get('/:userId',async (req,res,next)=>{
    try{
        const userId = req.params.userId;
        if(!userId) throw new ErrorModel(404, "user id not found");
        const user = await getUserAsync(userId).catch(() => null);
        if(!user) throw new ErrorModel(400, "user dont exist");
        const token = getNewToken(user);
        res.send({user,token});
    }
    catch(err){next(err)}
});

userCtrl.post('/list/:movieId', authUser,async (req,res,next)=>{
    try{
        const userId = req.body.user._id;
        const movieId = req.params.movieId;
        if(!userId) throw new ErrorModel(404,"user id not found");
        if(!movieId) throw new ErrorModel(404,"no movie id sent");
        const user = await addToWatchListAsync(userId, movieId)
        .then(() => getUserAsync(userId)).catch(()=> null);
        if(!user) throw new ErrorModel(500, "watchList didnt updated or unable to get user");
        res.status(201).send(user);
    }
    catch(err){ next(err) }
});

userCtrl.delete('/list/:movieId', authUser,async (req,res,next)=>{
    try{
        const userId = req.body.user._id;
        const movieId = req.params.movieId;
        if(!userId) throw new ErrorModel(404,"user id not found");
        if(!movieId) throw new ErrorModel(404,"no movie id sent");
        const user = await removeFromWatchListAsync(userId, movieId)
        .then(() => getUserAsync(userId)).catch(()=> null);
        if(!user) throw new ErrorModel(500, "watchList didnt updated or unable to get user");
        res.status(204).send(user);
    }
    catch(err){ next(err) }
})

export { userCtrl }