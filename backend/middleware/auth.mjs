import { getUserFromToken, verifyToken } from "../helpers/jwt-helper.mjs";
import {ErrorModel} from "../models/error.model.mjs";


const authUser = async(req,res,next) => {
    try{
        if(!req.headers.authorization) throw new ErrorModel(403, "bad request");
        const isregistered = await verifyToken(req.headers.authorization);
        if(!isregistered) throw new ErrorModel(403, "unauthorized");
        const user = await getUserFromToken(req.headers.authorization);
        delete user.watchList;
        req.body.user = user;
        next();
    }
    catch(err){
        res.status(403).send(err.message || "unauthorized");
    };
};

export {
    authUser
};