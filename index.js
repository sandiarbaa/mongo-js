// koneksi ke mongodb | gunakan menthod connect untuk mengakses mongodb service nya dengan ip localhost dan port default 27017 itu milik mongodb dan test nama database yang akan digunakan
const mongoose = require("mongoose");
//mongoose.connect("mongodb://127.0.0.1:27017/movie_db"); // 27017 = port local, /movie_db itu nama database

// method connect ini akan menghasilkan promise
// jadi bisa digunakan dengan then dan catch atau try dan catch
mongoose
  .connect("mongodb://127.0.0.1:27017/movie_db")
  .then((result) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
