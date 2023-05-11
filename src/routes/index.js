const router =require('express').Router();
router.get('/home',(req,res) =>{
   res.render('index'); 
});

router.get('/',(req,res) =>{
    res.redirect('/home');
 });

router.get('/about',(req,res) =>{
    res.render('about');
});


module.exports = router;