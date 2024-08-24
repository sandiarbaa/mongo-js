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

personSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

// dia akan bekerja sebelum dan sesudah ketika kita melakukan sesuatu pada model
// ini hanya sekedar contoh, penggunaan pre ini di real project nya bukan untuk meng-overwrite nilai
personSchema.pre("save", async function () {
  // meng-overwrite nilai apapun yg dibuat dalam object nya di sini object person
  this.firstName = "Luna";
  this.lastName = "Lovegood";
  console.log("persiapan menyimpan data");
});

personSchema.post("save", async function () {
  console.log("data berhasil disimpan");
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  firstName: "Ron",
  lastName: "Weasley",
});

console.log(person);

person
  .save()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
