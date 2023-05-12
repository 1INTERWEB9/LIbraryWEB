const router =require('express').Router();
const Book = require('../models/Book');
const {isAuthenticated} = require('../helpers/auth');

router.get('/books/add',isAuthenticated,(req,res)=>{
    res.render('books/create_books')
});

module.exports = router;