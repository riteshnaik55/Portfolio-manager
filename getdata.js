//GET data working
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://admin:admin@cluster0.zpjhr.mongodb.net/testDB?retryWrites=true&w=majority');

const moviesSchema = {
    title: String,
    content: String
}

const Movie = mongoose.model('Notes', moviesSchema);

app.get('*', (req, res) => {
    Movie.find({}, function(err, notes) {
        res.render('index', {
            moviesList: notes
        })
    })
})

app.listen(3000, function() {
    console.log('server is running');
})