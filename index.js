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
//Inserting Single Movie 
// const movieName = new Movie({ title: 'Your Name', year: 2016, score: 8.4, rating: 'R' });

//Inserting multiple movies
Movie.insertMany([
    { title: 'Amelie', year: 2001 , score: 8.3, rating: 'R' },
    { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
    { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
    { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
    { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'pG-13' }
])
.then(data => {
    console.log('It Worked');
})
