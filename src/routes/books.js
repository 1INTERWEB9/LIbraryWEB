const router =require('express').Router();
const Books = require('../models/Book');
const GenreDB= require('../models/Genre')
const PublisherDB= require('../models/Publisher')
const {isAuthenticated, isAuthenticatedWithLessOptions} = require('../helpers/auth');
const { verifyImageURL } = require('verify-image-url');

router.get('/books/add',isAuthenticated,async(req,res)=>{
    const Genres=await GenreDB.find().lean().sort({Genre:'ascending'});
    const Publishers=await PublisherDB.find().lean().sort({Publisher:'ascending'});
    res.render('books/create_books',{Genres,Publishers})
});

router.post('/books/add',isAuthenticated,async(req,res)=>{
    const {Genre,Description,Publisher,Adress,Celphone,Name,Author,NGenre,Cover, NPublisher,Summary} = req.body;
    const Book=await Books.findOne({Name: Name}).lean();
    const Img=await verifyImageURL(Cover);
    const errors = [];
    if(Book)
    {
        errors.push({text: 'Libro ya existente'});
    }
    if(Img.isImage==false)
    {
        errors.push({text: 'URL de portada no valida'});
    }
    
    if(errors.length>0)
    {
        const Genres=await GenreDB.find().lean().sort({Genre:'ascending'});
        const Publishers=await PublisherDB.find().lean().sort({Publisher:'ascending'});
        res.render('books/create_books',{errors,Genres,Genre,Description,Publishers,Publisher,Adress,Celphone,Name,Author,NGenre,Cover, NPublisher,Summary})
    }
    else
    {
        const newBook= new Books({Name,Author,Genre,Cover, Publisher,Summary});
        await newBook.save();
        req.flash('success_msg','El nuevo libro se registro exitosamente');
        res.redirect('/books/add');  
    }
});

router.post('/books/genres/add', async (req,res) =>{
    const {Genre,Description,Publisher,Adress,Celphone,Name,Author,NGenre,Cover, NPublisher,Summary} = req.body;
    const Genres=await GenreDB.findOne({Genre: Genre}).lean();
    const errors = [];
    if(Genres)
    {
        errors.push({text: 'Género ya existente'});
    }
    
    if(errors.length>0)
    {
        const Genres=await GenreDB.find().lean().sort({Genre:'ascending'});
        const Publishers=await PublisherDB.find().lean().sort({Publisher:'ascending'});
        res.render('books/create_books',{errors,Genres,Genre,Description,Publishers,Publisher,Adress,Celphone,Name,Author,NGenre,Cover, NPublisher,Summary})
    }
    else
    {
        const newGenre= new GenreDB({Genre,Description});
        await newGenre.save();
        req.flash('success_msg','El nuevo género se registro exitosamente');
        res.redirect('/books/add');  
    }
});

router.post('/books/publishers/add', async (req,res) =>{
    const {Genre,Description,Publisher,Adress,Celphone,Name,Author,NGenre,Cover, NPublisher,Summary} = req.body;
    const Publishers=await PublisherDB.findOne({Publisher: Publisher}).lean();
    const errors = [];
    if(Publishers)
    {
        errors.push({text: 'Editorial ya existente'});
    }
    
    if(errors.length>0)
    {
        const Genres=await GenreDB.find().lean().sort({Genre:'ascending'});
        const Publishers=await PublisherDB.find().lean().sort({Publisher:'ascending'});
        res.render('books/create_books',{errors,Genres,Genre,Description,Publishers,Publisher,Adress,Celphone,Name,Author,NGenre,Cover, NPublisher,Summary})
    }
    else
    {
        const newPublisher= new PublisherDB({Publisher,Adress,Celphone});
        await newPublisher.save();
        req.flash('success_msg','La nueva editorial se registro exitosamente');
        res.redirect('/books/add');  
    }
});

router.get('/books',isAuthenticatedWithLessOptions,async(req,res)=>{
    const book = await Books.find().lean().sort({Name:'ascending'});
    const user= res.locals.isAuthenticated
    res.render('books/view_books',{book,user})
});

router.get('/books/edit/:id',isAuthenticated,async(req,res)=>{
    const book = await Books.findById(req.params.id).lean();
    const Genres=await GenreDB.find().lean().sort({Genre:'ascending'});
    const Publishers=await PublisherDB.find().lean().sort({Publisher:'ascending'});
    res.render('employees/edit_employees',{book,Genres, Publishers });
});

module.exports = router;