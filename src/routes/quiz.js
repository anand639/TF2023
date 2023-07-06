const express = require('express')
var router = express.Router()


router.get('/', function(req,res,next){
res.render('quiz' ,{title: 'Express'})
})

module.exports= router