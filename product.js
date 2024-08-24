const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/ShopApp")
  .then((result) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// Schema untuk model Product
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
});

const Product = mongoose.model("Product", productSchema);

// data yg akan disimpan harus sesuai field nya dengan type yg ada di schema
// di contoh instance tshirt ini tidak sesuai
// karena properti color tidak ada di schema productSchema
const tshirt = new Product({
  name: "T Shirt Raglan",
  price: "500",
  color: "Black",
});

tshirt
  .save()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
