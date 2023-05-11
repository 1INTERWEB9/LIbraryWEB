const mongoose =require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    Username: {type: String, required: true, unique:true},
    Password: {type:String, required:true},
});


UserSchema.methods.encryptPassword = async (Password) =>
{
   const salt= await bcrypt.genSalt(10);
   return await bcrypt.hash(Password,salt);
};

UserSchema.methods.matchPassword= async function  (Password){
    return await bcrypt.compare(Password,this.Password);
};



module.exports = mongoose.model('User',UserSchema);