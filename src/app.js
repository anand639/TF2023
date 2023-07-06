const express = require('express')
const app = express();
let port = process.env.PORT || 3000;
const path= require('path');
const empCollection = require('./model/model')
const template_path= path.join(__dirname,'../template/views');
const router = require('./routes/quiz');



require('./db/db');

app.set('view engine','hbs');
app.set('views', template_path)

// app.get('/' , (req,res)=>{
//     res.send("hello world");
// })
app.get('/', (req,res)=>{
    res.render('index')
});


app.use('/quiz', router);




app.use(express.urlencoded({extended : false}));

app.post('/quiz', async (req,res)=>{
    const name1 = req.body.name;
    const name2 = req.body.name;

    if (name1===name2){
       const empdata = new empCollection({
           name:req.body.name,
           email: req.body.email,
           school: req.body.school,
           class:req.body.class
       });

       const postData = await empdata.save();
       //res.send(postData);
       res.render('quiz');     

    }


})

app.listen(port , ()=>{
    console.log(`listening to the port ${port}`);
})




