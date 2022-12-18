const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

mongoose.connect('mongodb://localhost:27017/movieApps')
.then(() =>{
    console.log(" Connection Open !!!!")
})
.catch(err => {
    console.log("Ohh No Error !!!")
    console.log(err)
})


const movieSchema = new mongoose.Schema({
    title: String, year: Number, score: Number, rating: String
});

const Movie = mongoose.model('Movie', movieSchema);
const movieName = new Movie({ title: 'Your Name', year: 2016, score: 8.4, rating: 'R' });