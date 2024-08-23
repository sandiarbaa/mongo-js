const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/movie_db")
  .then((result) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// Buat schema dulu baru model
// Schema mendefinisikan struktur tipe data yg digunakan di model
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  director: String,
});

// berikan nama untuk model nya singular
// misal ada db/collections movies maka modelnya cukup movie saja
// gunakan schema yg sudah dibuat tadi, agar tipe data nya semua terdaftar
// supaya tidak ada properti yg nyelonong aja tanpa melewati schema
const Movie = mongoose.model("Movie", movieSchema);

// kalau sudah buat schema dan model
// lalu buat objek data yg akan disimpan ke mongodb/model yg bersangkutan
const movie = new Movie({
  // instance object yg berisi data yg ingin di simpan ke mongodb, menggunakan model Movie
  title: "Black Panther",
  year: 2018,
  score: 7.3,
  director: "Ryan Coogler",
});

// save adalah method yg ada di dalam model, untuk menyimpan data yg sudah dibuat melalui instance object dari si modelnya
// contoh model nya adalah Movie maka instance objectnya adalah movie
movie.save();

console.log(movie);
