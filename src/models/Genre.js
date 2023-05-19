const mongoose =require('mongoose');
const {Schema} = mongoose;


const Book_Schema = new Schema({
   Genre:{type:String, required:true},
   Description: {type:String, required:true}
})

module.exports = mongoose.model('Genres',Book_Schema)