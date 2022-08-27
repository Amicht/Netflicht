import express from "express";
import { userCtrl } from "./controllers/user.mjs";
import { movieCtrl } from "./controllers/movie.mjs";
import { config } from "dotenv"; config();
import cors from 'cors'; 

const PORT = process.env.PORT;
const server = express();

server.use(cors());
server.use(express.json());
server.use('/api/assets/', express.static('assets'));

server.use('/api/users',userCtrl);
server.use('/api/movies',movieCtrl);
server.get('*',(req,res)=> res.status(404).send('route not found'));

server.use('*', (err, req,res,next)=>{
    res.status(err.status || 500).json(err.message || "ERROR");
})

server.listen(PORT, () => console.log("Listening to port "+ PORT));