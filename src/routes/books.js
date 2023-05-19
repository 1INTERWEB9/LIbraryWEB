const router =require('express').Router();
const Book = require('../models/Book');
const GenreDB= require('../models/Genre')
const {isAuthenticated} = require('../helpers/auth');

router.get('/books/add',isAuthenticated,async(req,res)=>{
    const Genres=await GenreDB.find().lean().sort({Genre:'ascending'});
    res.render('books/create_books',{Genres})
});

module.exports = router;