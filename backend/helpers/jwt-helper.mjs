import jwt from 'jsonwebtoken';
import { config } from 'dotenv'; config()

const secretKey = process.env.JWTSecretKey;


function getNewToken(user){
    const payload = { user };
    const token = jwt.sign(payload, secretKey);
    return token;
};

function verifyToken(authHeader){
    return new Promise(resolve => {
        if(!authHeader){
            resolve(false);
            return;
        }
        const token = authHeader.split(" ")[1];
        if(!token){
            resolve(false);
            return;
        }

        jwt.verify(token, secretKey, (err,payload)=> { // payload = { user }
            if(err){
                resolve(false);
                return;
            }
            resolve(payload);
        });
    })
};

function getUserFromToken(authHeader){
    const token = authHeader.split(" ")[1];
    const payload = jwt.decode(token);
    return payload.user;
}

export {
    getNewToken,
    verifyToken,
    getUserFromToken
}