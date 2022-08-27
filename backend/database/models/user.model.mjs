import  mongoose from 'mongoose';
const {model, Schema }  = mongoose;

const UserSchema = new Schema({
    name: {type: String , required: true},
    img: {type: String, required: true},
    watchList: {type: Array, required:true}
});

const UserModel = model('users', UserSchema);

export default UserModel;