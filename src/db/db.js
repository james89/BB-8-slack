let mongoose = require('mongoose');

// Create song schema
let movieSchema = mongoose.Schema({
  title: String,
  year: String,
  imdbID: String
});

// Store watchlist items in a collection called "movies"
let Movie = mongoose.model('movies', movieSchema);

exports.seedData = function (){
  let db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));

  db.once('open', function callback () {


    // Create seed data
    let homeAlone = new Movie({
      title: 'Home Alone 2',
      year: '1990',
      imdbID: 'fakeID'
    });
    homeAlone.save();


  });
}
