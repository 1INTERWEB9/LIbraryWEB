const mongoose =require('mongoose');
const {Schema} = mongoose;


const Book_Schema = new Schema({
   Name: {type:String, required:true},
   Author: {type:String, required:true},
   Genre:{type:String, required:true},
   Cover: {type:String, required:true},
   Publisher: {type:String, required:true},
   Summary: {type:String, required:true}
})

module.exports = mongoose.model('Books',Book_Schema)