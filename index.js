const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/movie_db")
  .then((result) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// Schema untuk model Movie
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  genre: String,
  director: String,
  rating: Number,
});

// Model Movie
const Movie = mongoose.model("Movie", movieSchema);

// find movie berdasarkan tahun
// find => menghasilkan array, walaupun hasil search nya 1
// findOne => menghasilkan 1 object
// const getMovie = Movie.find({year: {$gt: 2018}})
// Movie.findOne({ year: { $gte: 2018 }, genre: "Drama" })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// find by id
// findOne
// Movie.findOne({ _id: "66c9258ed4e99c2749a4df54" })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// findById
// Movie.findById("66c9258ed4e99c2749a4df52")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Update one
// Movie.updateOne({ title: "Parasite" }, { rating: 7.0 })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Movie.updateMany({ year: { $lt: 2019 } }, { rating: 8 })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

Movie.findByIdAndUpdate(
  "66c9258ed4e99c2749a4df52",
  { rating: 10 },
  { new: true } // options untuk menampilkan data yg di update
)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

// const movie = new Movie({
//   title: "Black Panther",
//   genre: "Action",
//   director: "Ryan Coogler",
//   year: 2018,
//   rating: 7.3,
// });

// Movie.insertMany([
//   {
//     title: "Avengers: Infinity War",
//     genre: "Action",
//     director: "Anthony Russo, Joe Russo",
//     year: 2018,
//     cast: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
//     description:
//       "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
//     rating: 8.4,
//     image: "https://www.example.com/avengers_infinity_war.jpg",
//   },
//   {
//     title: "Joker",
//     genre: "Crime",
//     director: "Todd Phillips",
//     year: 2019,
//     cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
//     description:
//       "In Gotham City, mentally-troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: 'The Joker'.",
//     rating: 8.4,
//     image: "https://www.example.com/joker.jpg",
//   },
//   {
//     title: "Parasite",
//     genre: "Drama",
//     director: "Bong Joon Ho",
//     year: 2019,
//     cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
//     description:
//       "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
//     rating: 8.6,
//     image: "https://www.example.com/parasite.jpg",
//   },
//   {
//     title: "Spider-Man: Into the Spider-Verse",
//     genre: "Animation",
//     director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
//     year: 2018,
//     cast: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
//     description:
//       "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
//     rating: 8.4,
//     image: "https://www.example.com/spider_man_into_the_spider_verse.jpg",
//   },
// ])
//   .then((result) => {
//     console.log("It works!");
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// movie.save();
