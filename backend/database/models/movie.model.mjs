import  mongoose from 'mongoose';
const {model, Schema }  = mongoose;

const MovieSchema = new Schema({
    name: {type: String , required: true},
    img: {type: String, required: true},
    type: {type: String, required: true},   // movie or series
    trailer: {type: String, required: true},
    genre: {type: String, required: true},  // action, drama, thriller, etc.
    description: {type: String, required: true},
    year: {type: Number, required: true},
    length: {type: String, required: true},
});

const MovieModel = model('Movies', MovieSchema);

export default MovieModel;