const mongoose = require('mongoose');
const DB="mongodb+srv://navdeepsingh13092007:NavdeepSingh@cluster0.srbzyj7.mongodb.net/register?retryWrites=true&w=majority";
mongoose.connect(DB)
.then(()=>{
    console.log('connection is successful')
})
.catch((error)=>{
console.log(error)
})