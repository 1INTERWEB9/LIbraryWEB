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
    const {NameGenre,Description,NamePublisher,Adress,Celphone,Name,Author,Genre,Cover, Publisher,Summary} = req.body;
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
        const Genres=await GenreDB.find().lean().sort({NameGenre:'ascending'});
        const Publishers=await PublisherDB.find().lean().sort({Publisher:'ascending'});
        res.render('books/create_books',{errors,Genres,NameGenre,Description,Publishers,NamePublisher,Adress,Celphone,Name,Author,Genre,Cover, Publisher,Summary})
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
    const {NameGenre,Description,NamePublisher,Adress,Celphone,Name,Author,Genre,Cover, Publisher,Summary} = req.body;
    const Genres=await GenreDB.findOne({NameGenre: NameGenre}).lean();
    const errors = [];
    if(Genres)
    {
        errors.push({text: 'Género ya existente'});
    }
    
    if(errors.length>0)
    {
        const Genres=await GenreDB.find().lean().sort({Genre:'ascending'});
        const Publishers=await PublisherDB.find().lean().sort({Publisher:'ascending'});
        res.render('books/create_books',{errors,Genres,NameGenre,Description,Publishers,NamePublisher,Adress,Celphone,Name,Author,Genre,Cover, Publisher,Summary})
    }
    else
    {
        const newGenre= new GenreDB({NameGenre,Description});
        await newGenre.save();
        req.flash('success_msg','El nuevo género se registro exitosamente');
        res.redirect('/books/add');  
    }
});

router.post('/books/publishers/add', async (req,res) =>{
    const {NameGenre,Description,NamePublisher,Adress,Celphone,Name,Author,Genre,Cover, Publisher,Summary} = req.body;
    const Publishers=await PublisherDB.findOne({NamePublisher: NamePublisher}).lean();
    const errors = [];
    if(Publishers)
    {
        errors.push({text: 'Editorial ya existente'});
    }
    
    if(errors.length>0)
    {
        const Genres=await GenreDB.find().lean().sort({Genre:'ascending'});
        const Publishers=await PublisherDB.find().lean().sort({Publisher:'ascending'});
        res.render('books/create_books',{errors,Genres,NameGenre,Description,Publishers,NamePublisher,Adress,Celphone,Name,Author,Genre,Cover, Publisher,Summary})
    }
    else
    {
        const newPublisher= new PublisherDB({NamePublisher,Adress,Celphone});
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
    const Genre= await GenreDB.findOne({NameGenre:book.Genre}).lean()
    const Publisher= await PublisherDB.findOne({NamePublisher:book.Publisher}).lean()
    const Genres=await GenreDB.find().lean().sort({Genre:'ascending'});
    const Publishers=await PublisherDB.find().lean().sort({Publisher:'ascending'});
    res.render('books/edit_books',{book,Genres, Publishers, Genre, Publisher});
});

router.put('/books/edit-book/:id',isAuthenticated, async (req,res) =>{
    const {NameGenre,Description,NamePublisher,Adress,Celphone,Name,Author,Genre,Cover, Publisher,Summary} = req.body;
    await Books.findByIdAndUpdate(req.params.id,{Name,Author,Genre,Cover, Publisher,Summary}).lean()
    req.flash('success_msg','Libro actualizado satisfactoriamente');
    res.redirect('/books');
});

router.delete('/books/delete/:id',isAuthenticated, async(req,res) =>{
    await Books.findByIdAndDelete(req.params.id).lean();
    req.flash('success_msg','Libro eliminado satisfactoriamente');
    res.redirect('/books');
});

router.put('/books/edit-genre/:id',isAuthenticated, async (req,res) =>{
    const {NameGenre,Description,NamePublisher,Adress,Celphone,Name,Author,Genre,Cover, Publisher,Summary} = req.body;
    const aux = await GenreDB.findByIdAndUpdate(req.params.id,{NameGenre,Description}).lean();
    await Books.updateMany({Genre:aux.NameGenre},{$set:{Genre:NameGenre}}).lean();
    req.flash('success_msg','Género actualizado satisfactoriamente');
    res.redirect('/books');
});

router.put('/books/edit-publisher/:id',isAuthenticated, async (req,res) =>{
    const {NameGenre,Description,NamePublisher,Adress,Celphone,Name,Author,Genre,Cover, Publisher,Summary} = req.body;
    const aux = await PublisherDB.findByIdAndUpdate(req.params.id,{NamePublisher,Adress,Celphone}).lean();
    await Books.updateMany({Publisher:aux.NamePublisher},{$set:{Publisher:NamePublisher}}).lean();
    req.flash('success_msg','Editorial actualizado satisfactoriamente');
    res.redirect('/books');
});


module.exports = router;