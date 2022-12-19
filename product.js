const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

mongoose.connect('mongodb://localhost:27017/shopApps')
.then(() =>{
    console.log(" Connection Open !!!!")
})
.catch(err => {
    console.log("Ohh No Error !!!")
    console.log(err)
})

