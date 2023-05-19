const router =require('express').Router();
const GenreDB= require('../models/Genre')
const {isAuthenticated} = require('../helpers/auth');

router.get('/genres/add',isAuthenticated,async(req,res)=>{
    res.render('genres/create_genres')
});

router.post('/genres/add', async (req,res) =>{
    const {Genre,Description} = req.body;
    const Genres=await GenreDB.findOne({Genre: Genre}).lean();
    const errors = [];
    if(Genres)
    {
        errors.push({text: 'Género ya existente'});
    }
    
    if(errors.length>0)
    {
        res.render('users/signup',{errors, Genre,Description});
    }
    else
    {
        const newGenre= new GenreDB({Genre,Description});
        await newGenre.save();
        req.flash('success_msg','El nuevo género se registro exitosamente')
        res.redirect('/');
        
    }
});

module.exports = router;