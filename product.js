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

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    onsale: {   
        type: Boolean,
        default: false
    }
        
})

const Product = mongoose.model('Product', productSchema);
const bike = new Product({  
    name: 'Mountain Bike',
    price : 599
})
bike.save()
    .then(data => {
        console.log('It Worked');
}).catch(err => {
    console.log('Something is Wrong')
    console.log(err)
})
