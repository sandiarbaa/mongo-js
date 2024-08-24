// koneksi ke mongodb
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/ShopApp")
  .then((result) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const personSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
});

// bisa menggunakan get dan set
// kalau get bisa menggunakan property yg sudah ada di schema nya
// kalau get itu bisa langsung ubah saja value yg sudah ada di database nya
// kalau setter bisa definisikan nilainya di dalam parameter nya
personSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  firstName: "Harry",
  lastName: "Potter",
});

console.log(person.fullName);
