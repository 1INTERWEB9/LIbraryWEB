const mongoose =require('mongoose');
const {Schema} = mongoose;


const Book_Schema = new Schema({
   Publisher:{type:String, required:true},
   Adress: {type:String, required:true},
   Celphone: {type:Number, required:true}
})

module.exports = mongoose.model('Publishers',Book_Schema)